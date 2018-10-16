
# Service Nodes Overview

Although Loki implements novel changes on top of the CryptoNote protocol (see 7), much of Loki’s networking functionality and scalability is enabled by a set of incentivised nodes called Service Nodes.  To operate a Service Node, an operator [time-locks a significant amount of Loki](../ServiceNodes/StakingRequirement.md) and provides a minimum level of bandwidth and storage to the network. In return for their services, Loki Service Node operators receive a portion of the block reward from each block.

The resulting network provides [market-based resistance to Sybil attacks](../Advanced/SybilResistance.md), addressing a range of problems with existing mixnets and privacy-centric services. This resistance is based on supply and demand interactions which help prevent single actors from having a large enough stake in Loki to have a significant negative impact on the second-layer privacy services Loki provides. [DASH](https://github.com/dashpay/dash/wiki/Whitepaper) first theorised that Sybil attack resistant networks can be derived from cryptoeconomics. As an attacker accumulates Loki, the  circulating supply decreases, in turn applying demand-side pressure, driving the price of Loki up. As this continues, it
becomes increasingly costly for additional Loki to be purchased, making the attack prohibitively expensive.

To achieve this economic protection, Loki encourages the active suppression of the circulating supply. In particular, the [emissions curve](../Advanced/EmissionCurve.md) and [collateral requirements](../ServiceNodes/StakingRequirement.md) must be designed to ensure enough circulating supply is locked and reasonable returns are provided for operators to ensure Sybil attack resistance.

## Service Node Activities

Right now Service Nodes can:

-   Service Nodes are full nodes on the Loki network
    
-   Full nodes become Service Nodes when the owner [locks the required amount of Loki](../ServiceNodes/StakingRequirement.md) for 30 days (2 days on testnet) and submits a registration transaction
    
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

- **[Sybil Resistance](../Advanced/SybilResistance.md)**: >> **Add information**

## Guides & Resources

- **[Setting up Service Node](../ServiceNodes/SNFullGuide.md)**: How to host and maintain a Service Node using the [CLI wallet](../Wallets/CliWallet/CLIOverview.md).

- **[Service Node as Service](../ServiceNodes/SNOverview.md)**: How to run the daemon to automatically start after a crash or reboot, which helps your Service Node keep running without undesired interruptions.

- **[Service Node RPC](../Advanced/SNRPCGuide.md)**: How to use JSON 2.0 RPC Calls with Service Nodes.

- **[Active Service Node List](https://www.lokiblocks.com)**: Loki Block explorer showing the current Service Node Pubkeys.

