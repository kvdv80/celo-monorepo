variable celo_env {
  type        = string
  description = "Name of the testnet Celo environment"
}

variable network_name {
  type        = string
  description = "Name of the GCP network the tx-node load balancer is in"
}

variable tx_node_self_links {
  type        = list(string)
  description = "A list including the self_links of each tx-node"
}

variable deploy_txnode_lb {
  type        = bool
  description = "Deploy or not the Load Balancer for the TX Nodes"
  default     = false
}
