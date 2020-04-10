import { newKitFromWeb3 } from '@celo/contractkit'
import { printValueMapRecursive } from '../../utils/cli'
import { proposalToJSON } from '@celo/contractkit/lib/governance/proposals'
import { ProposalBuilder } from '@celo/contractkit/lib/governance'
import { GovernanceWrapper, Proposal } from '@celo/contractkit/lib/wrappers/Governance'
import { NetworkConfig, testWithGanache, timeTravel } from '@celo/dev-utils/lib/ganache-test'
import { Address } from '@celo/utils/lib/address'
import BigNumber from 'bignumber.js'
import Web3 from 'web3'
import Approve from './approve'
import Vote from './vote'
import Register from '../account/register'
import Lock from '../lockedgold/lock'

process.env.NO_SYNCCHECK = 'true'

const expConfig = NetworkConfig.governance

testWithGanache('governance:vote cmd', (web3: Web3) => {
  const minDeposit = web3.utils.toWei(expConfig.minDeposit.toString(), 'ether')
  const kit = newKitFromWeb3(web3)
  const proposalID = new BigNumber(1)

  let accounts: Address[] = []
  let governance: GovernanceWrapper

  beforeEach(async () => {
    accounts = await web3.eth.getAccounts()
    kit.defaultAccount = accounts[0]
    governance = await kit.contracts.getGovernance()
    let proposal: Proposal
    proposal = await new ProposalBuilder(kit).build()
    await governance
      .propose(proposal, 'URL')
      .sendAndWaitForReceipt({ from: accounts[0], value: minDeposit })
    await timeTravel(expConfig.dequeueFrequency, web3)
    await governance.dequeueProposalsIfReady().sendAndWaitForReceipt()

    // There appears to be a bug in the testing framework, as the test does not pass without
    // this.
    const record = await governance.getProposalRecord(proposalID)
    const jsonproposal = await proposalToJSON(kit, record.proposal)
    record.proposal = jsonproposal as any
    console.log(record)
    printValueMapRecursive(record)

    await Approve.run([
      '--from',
      accounts[0],
      '--proposalID',
      proposalID.toString(10),
      '--useMultiSig',
    ])
    await Register.run(['--from', accounts[0]])
    await Lock.run(['--from', accounts[0], '--value', '100'])
    await timeTravel(expConfig.approvalStageDuration, web3)
  })

  test('can vote yes', async () => {
    await Vote.run([
      '--from',
      accounts[0],
      '--proposalID',
      proposalID.toString(10),
      '--value',
      'Yes',
    ])
    const votes = await governance.getVotes(proposalID)
    expect(votes.Yes.toNumber()).toEqual(100)
    printValueMapRecursive(await governance.getVoter(accounts[0]))
  })
})
