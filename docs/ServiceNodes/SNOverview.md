
# Service Nodes Overview

To understand what a Service Node is, you can refer to the [whitepaper](https://loki.network/whitepaper) to get an in depth understanding. For now, all you need to know is that:

-   Service Nodes are full nodes on the Loki network
    
-   Full nodes become Service Nodes when the owner [locks the required amount of Loki](StakingRequirement.md) for 30 days (2 days on testnet) and submits a registration transaction
    
-   Once accepted by the network, the Service Node is eligible to win block rewards
    
-   Multiple participants can be involved in one Service Node and can have the reward automatically distributed

It is also worth noting that Service Nodes are quite basic at the moment, and operators will need to stay up to date with new updates to keep in line with software and hardware requirements. Once all of the updates are out, Service Nodes will also:

-   Route end user’s internet traffic, either as an exit node or relay in a novel mixnet
    
-   Receive, store and forward encrypted user messages
    
-   Monitor other Service Nodes and vote on their performance
    
-   Be called into quorums which give them authority over instant transactions (Blink)
    
-   Act as remote nodes for users

Once these features come out, Service Node operation will require better servers, particularly when it comes to bandwidth.

## Terms

- **[Service Node](../ServiceNodes/SNOverview.md)**: Full nodes on the Loki Network.

- **[Staking Requirement](../ServiceNodes/StakingRequirement.md)**: Collateral requirement to run a Service Node.

## Guides & Resources

- **[Setting up Service Node](../Wallets/CliWallet/SNFullGuide.md)**: How to host and maintain a Service Node using the [CLI wallet](../Wallets/CliWallet/CLIOverview.md).

- **[Service Node as Service](../ServiceNodes/SNOverview.md)**: How to run the daemon to automatically start after a crash or reboot, which helps your Service Node keep running without undesired interruptions.

- **[Service Node RPC](../Wallets/RPCGuides/SNRPCGuide.md)**: How to use JSON 2.0 RPC Calls with Service Nodes.

- **[Active Service Node List](https://www.lokiblocks.com)**: Loki Block explorer showing the current Service Node Pubkeys.

## Concepts
