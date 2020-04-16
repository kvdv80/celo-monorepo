export const TEST_DOLLAR_ADDRESS = '0x0000000000000000000000000000000000dollaR'
export const TEST_GOLD_ADDRESS = '0x000000000000000000000000000000000000golD' // Note upper and lower case letters

const mockTokenTxs = {
  status: '1',
  // indexes 0 and 1 are an exchange tx gold to dollars
  // index 2 is an outgoing dollars tx
  // index 3 is an incoming dolars tx
  // index 4 in an outgoing gold tx
  // index 5 in an incoming gold tx
  // index 6 in an incoming faucet
  // index 7 is an outgoing verification fee
  result: [
    // Exchange outgoing
    {
      value: '10000000000000000000',
      transactionIndex: '0',
      tokenSymbol: 'cGLD',
      tokenName: 'Celo Gold',
      tokenDecimal: '18',
      to: '0xe167029b1a56c6cba74c35c472e9db3c9e2402ff',
      timeStamp: '1566345866',
      nonce: '223',
      input:
        '0xa9059cbb000000000000000000000000e167029b1a56c6cba74c35c472e9db3c9e2402ff0000000000000000000000000000000000000000000000008ac7230489e80000',
      hash: '0x961403536006f9c120c23900f94da59dbf43edf10eb3569b448665483bab77b2',
      gasUsed: '67154',
      gasPrice: '100000000000',
      gas: '6700000',
      from: '0x0000000000000000000000000000000000007E57',
      cumulativeGasUsed: '67154',
      contractAddress: TEST_GOLD_ADDRESS,
      confirmations: '269650',
      blockNumber: '90637',
      blockHash: '0x9ca0ae7f9496660c849069e05f8f429048bc185d7578f6315f07c0e68ad0b330',
    },
    // Exchange incoming
    {
      value: '10000000000000000000',
      transactionIndex: '0',
      tokenSymbol: 'cUSD',
      tokenName: 'Celo Dollar',
      tokenDecimal: '18',
      to: '0x0000000000000000000000000000000000007E57',
      timeStamp: '1566345876',
      nonce: '224',
      input:
        '0xa9059cbb000000000000000000000000e167029b1a56c6cba74c35c472e9db3c9e2402ff0000000000000000000000000000000000000000000000008ac7230489e80000',
      hash: '0x961403536006f9c120c23900f94da59dbf43edf10eb3569b448665483bab77b2',
      gasUsed: '55740',
      gasPrice: '100000000000',
      gas: '6700000',
      from: '0xf4314cb9046bece6aa54bb9533155434d0c76909',
      cumulativeGasUsed: '55740',
      contractAddress: TEST_DOLLAR_ADDRESS,
      confirmations: '269648',
      blockNumber: '90639',
      blockHash: '0x6cec0caf59b0441812cb6a7eb7eeadae1721bf5cc3beeaa993e2bfd8a570bb22',
    },
    // Dollars sent
    {
      value: '150000000000000000',
      transactionIndex: '1',
      tokenSymbol: 'cUSD',
      tokenName: 'Celo Dollar',
      tokenDecimal: '18',
      to: '0x8b7649116f169d2d2aebb6ea1a77f0baf31f2811',
      timeStamp: '1566346276',
      nonce: '1',
      input:
        '0xd02e0f0c681ea8bf469fe300315d8caf1f9c22002c1f516a8b329cfcc9288e3518104f4300000000000000000000000000000000000000000000000000000000000000030000000000000000000000002df4dd6bd1b26a8503f763506bdb8e7cf165f69e',
      hash: '0x21dd2c18ae6c80d61ffbddaa073f7cde7bbfe9436fdf5059b506f1686326a2fb',
      gasUsed: '1604760',
      gasPrice: '200',
      gas: '7000000',
      from: '0x0000000000000000000000000000000000007E57',
      cumulativeGasUsed: '1788432',
      contractAddress: TEST_DOLLAR_ADDRESS,
      confirmations: '269568',
      blockNumber: '90719',
      blockHash: '0x9418a662ed1f4a33297500a2a14af01c6bbd7aeb88eb80324d7fbd7d41a9236f',
    },
    // Dollars received
    {
      value: '10000000000000000000',
      transactionIndex: '0',
      tokenSymbol: 'cUSD',
      tokenName: 'Celo Dollar',
      tokenDecimal: '18',
      to: '0x0000000000000000000000000000000000007E57',
      timeStamp: '1566479946',
      nonce: '234',
      input:
        '0xa9059cbb000000000000000000000000e167029b1a56c6cba74c35c472e9db3c9e2402ff0000000000000000000000000000000000000000000000008ac7230489e80000',
      hash: '0xe70bf600802bae7a0d42d89d54b8cdb977a8c5a34a239ec73597c7abcab74536',
      gasUsed: '40740',
      gasPrice: '100000000000',
      gas: '6700000',
      from: '0xf4314cb9046bece6aa54bb9533155434d0c76909',
      cumulativeGasUsed: '40740',
      contractAddress: TEST_DOLLAR_ADDRESS,
      confirmations: '242834',
      blockNumber: '117453',
      blockHash: '0x995bfb34d28ead83fed889bc46fc18ec3e82bb7172ef5d5bf78a5086fd715e41',
    },
    // Gold sent
    {
      value: '1000000000000000000',
      transactionIndex: '0',
      tokenSymbol: 'cGLD',
      tokenName: 'Celo Gold',
      tokenDecimal: '18',
      to: '0xf4314cb9046bece6aa54bb9533155434d0c76909',
      timeStamp: '1566481000',
      nonce: '233',
      input:
        '0xa9059cbb000000000000000000000000e167029b1a56c6cba74c35c472e9db3c9e2402ff0000000000000000000000000000000000000000000000008ac7230489e80000',
      hash: '0xc6689ed516e8b114e875d682bbf7ba318ea16841711d97ce473f20da289435be',
      gasUsed: '67154',
      gasPrice: '100000000000',
      gas: '6700000',
      from: '0x0000000000000000000000000000000000007E57',
      cumulativeGasUsed: '67154',
      contractAddress: TEST_GOLD_ADDRESS,
      confirmations: '242836',
      blockNumber: '117451',
      blockHash: '0xcfffc293e190c74490b6c5a3ea831e7020c4380d7a5330716b9eb6e0db1df95d',
    },
    // Gold received
    {
      value: '10000000000000000000',
      transactionIndex: '0',
      tokenSymbol: 'cGLD',
      tokenName: 'Celo Gold',
      tokenDecimal: '18',
      to: '0x0000000000000000000000000000000000007E57',
      timeStamp: '1566482000',
      nonce: '234',
      input:
        '0xa9059cbb000000000000000000000000e167029b1a56c6cba74c35c472e9db3c9e2402ff0000000000000000000000000000000000000000000000008ac7230489e80000',
      hash: '0xe8fe81f455eb34b672a8d8dd091472f1ae8d4d204817f0bcbb7a13486b9b5605',
      gasUsed: '67154',
      gasPrice: '100000000000',
      gas: '6700000',
      from: '0xf4314cb9046bece6aa54bb9533155434d0c76909',
      cumulativeGasUsed: '67154',
      contractAddress: TEST_GOLD_ADDRESS,
      confirmations: '242836',
      blockNumber: '117451',
      blockHash: '0xcfffc293e190c74490b6c5a3ea831e7020c4380d7a5330716b9eb6e0db1df95d',
    },
    // Faucet received
    {
      value: '5000000000000000000',
      transactionIndex: '0',
      tokenSymbol: 'cGLD',
      tokenName: 'Celo Gold',
      tokenDecimal: '18',
      to: '0x0000000000000000000000000000000000007E57',
      timeStamp: '1566483000',
      nonce: '233',
      input:
        '0xa9059cbb000000000000000000000000e167029b1a56c6cba74c35c472e9db3c9e2402ff0000000000000000000000000000000000000000000000008ac7230489e80000',
      hash: '0xf6856169eb7bf78211babc312028cddf3dad2761799428ab6e4fcf297a27fe09',
      gasUsed: '67154',
      gasPrice: '100000000000',
      gas: '6700000',
      from: '0x0000000000000000000000000000000000f40c37',
      cumulativeGasUsed: '67154',
      contractAddress: TEST_GOLD_ADDRESS,
      confirmations: '242836',
      blockNumber: '117451',
      blockHash: '0xcfffc293e190c74490b6c5a3ea831e7020c4380d7a5330716b9eb6e0db1df95d',
    },
    // Verification fee sent
    {
      value: '200000000000000000',
      transactionIndex: '0',
      tokenSymbol: 'cUSD',
      tokenName: 'Celo Dollar',
      tokenDecimal: '18',
      to: '0x0000000000000000000000000000000000a77357',
      timeStamp: '1566484000',
      nonce: '233',
      input:
        '0xa9059cbb000000000000000000000000e167029b1a56c6cba74c35c472e9db3c9e2402ff0000000000000000000000000000000000000000000000008ac7230489e80000',
      hash: '0xcc2120e5d050fd68284dc01f6464b2ed8f7358ca80fccb20967af28eb7d79160',
      gasUsed: '67154',
      gasPrice: '100000000000',
      gas: '6700000',
      from: '0x0000000000000000000000000000000000007E57',
      cumulativeGasUsed: '67154',
      contractAddress: TEST_DOLLAR_ADDRESS,
      confirmations: '242836',
      blockNumber: '117451',
      blockHash: '0xcfffc293e190c74490b6c5a3ea831e7020c4380d7a5330716b9eb6e0db1df95d',
    },
  ],
  message: 'OK',
}
export default mockTokenTxs