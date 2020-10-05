title: Loki Documentation | Loki Service Nodes Overview
description: This document is your resource to find more information on Loki Service Nodes. The document has links to Service Node and Masternode setup guides, aswell as Service Node and Masternode calculators.

# Loki Service Nodes

## Quick Navigation

|                             **Service Node Setup**                             |                              **Staking to Open Pool Service Node**                             |                              **Updating Your Binaries**                              |
|:------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|
|[How to setup a Service Node.](DebianPackageGuide.md)            |[GUI Staking](GUIStakingGuide.md)                                               |[Update your Service Node](../DebianPackageGuide/#upgrading) |
| Set up a Service Node with debs via an apt repository by following this guide. | Want to stake without operating a Service Node, or want to stake to an open pool Service Node? |  Need to download the latest releases for your Service Node and run the Loki Launcher?   |

## Service Nodes Overview

Much of Loki’s networking functionality and scalability is enabled by a set of incentivised nodes called Service Nodes.  To operate a Service Node, an operator [time-locks a significant amount of Loki](../ServiceNodes/StakingRequirement.md) and provides a minimum level of bandwidth and storage to the network. In return for their services, Loki Service Node operators receive a portion of the block reward from each block.

The resulting network provides [market-based resistance to Sybil attacks](../Advanced/SybilResistance.md), addressing a range of problems with existing onion routers and privacy-centric services. This resistance is based on supply and demand interactions which help prevent single actors from having a large enough stake in Loki to have a significant negative impact on the second-layer privacy services Loki provides. [DASH](https://github.com/dashpay/dash/wiki/Whitepaper) first theorised that Sybil attack resistant networks can be derived from cryptoeconomics. As an attacker accumulates Loki, the  circulating supply decreases, in turn applying demand-side pressure, driving the price of Loki up. As this continues, it becomes increasingly costly for additional Loki to be purchased, making the attack prohibitively expensive.

To achieve this economic protection, Loki encourages the active suppression of the circulating supply. In particular, the [emissions curve](../Advanced/Cryptoeconomics.md) and [collateral requirements](../ServiceNodes/StakingRequirement.md) must be designed to ensure enough circulating supply is locked and reasonable returns are provided for operators to ensure [Sybil attack resistance](../Advanced/SybilResistance.md).

## Express Guide

Start a new service node by running these four commands on your server:

```
sudo curl -s https://deb.loki.network/public.gpg | sudo apt-key add -

echo "deb https://deb.loki.network $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/loki.list

sudo apt update

sudo apt install loki-service-node
```

The services will run via systemd as `loki-node.service`, `loki-storage-server.service`, and
`lokinet-router.service`.

> To see the full guide [click here](../ServiceNodes/DebianPackageGuide.md).

## Service Node Activities

Full nodes become Service Nodes when the owner [locks the required amount of $Loki](../ServiceNodes/StakingRequirement.md) and submits a registration transaction. Once accepted by the network, the Service Node is eligible to win [block rewards](../Advanced/Cryptoeconomics.md). Multiple participants can be involved in one Service Node and can have the reward automatically distributed.

It is also worth noting that Service Nodes operators will need to stay up to date with new updates to keep in line with software and hardware requirements. 

Service Nodes are required to:

-   Route end user’s internet traffic, either as an [exit node](/ServiceNodes/ServiceNodeFunctions/#exit-nodes) or relay
    
-   Receive, store and forward [encrypted user messages](../LokiServices/Messenger/Session.md)
    
-   Monitor other Service Nodes and [vote on their performance](../Advanced/SwarmFlagging.md)
    
-   Be called into quorums which give them authority over instant transactions ([Blink](../LokiServices/Blink.md))
    
-   Create new blocks ([Pulse](../Advanced/PulseLip5.md), *coming soon*)

## Guides & Resources

| **Guide/Resource**                                                                                                       	| **Description**                                                                                                                                   	|
|--------------------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------	| 
| **[Service Node Setup](DebianPackageGuide.md)**                                                            	| How to host and maintain a Service Node using a Debian Package and [CLI wallet](/Wallets/WalletsOverview/#command-line-interface-wallet-cli). |
|**[Service Node Setup - Advanced](../ServiceNodes/SNFullGuideLegacy.md)** | How to host and maintain a Service Node using the [CLI wallet](/Wallets/WalletsOverview/#command-line-interface-wallet-cli). |
| **[Staking to a Service Node as a Contributor](../ServiceNodes/GUIStakingGuide.md)** | How to Stake to a Service Node when you are not operating one but contributing. |
| **[Updating your Service Node](../DebianPackageGuide/#upgrading)**                                                          | How to update your Service Node.|
|**[Loki Dashboard](https://lokidashboard.com/)**| See statistics, data, maps and other information on the Loki Service Nodes.|
| **[Service Node RPC](../Developer/SNRPCGuide.md)**                                                                       	| How to use JSON 2.0 RPC Calls with Service Nodes.                                                                                                 	|
| **[Active Service Node List](https://www.lokiblocks.com)**                                                               	| Loki Block explorer showing the current Service Node Pubkeys.                                                                                     	|
| **[Staking Requirement Calculator WEB](https://imaginary.stream/sn/)**                                                   	| Webpage showing Staking Requirement at current Block Height.                                                                                      	|
