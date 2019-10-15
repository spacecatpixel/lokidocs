title: Loki Documentation | Loki Service Nodes Overview
description: This document is your resource to find more information on Loki Service Nodes. The document has links to Service Node and Masternode setup guides, aswell as Service Node and Masternode calculators.

# Loki Service Nodes

## Quick Navigation

|                         **Service Node Setup**                        |                             **Service Node Setup**                             |                              **Staking to Open Pool Service Node**                             |                              **Updating your Service Node**                              |
|:---------------------------------------------------------------------:|:------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|
|     [Service Node Launcher Setup](../ServiceNodes/SNFullGuide.md)     |      [Service Node Apt Repo Setup](../ServiceNodes/DebianPackageGuide.md)      |                        [GUI Staking](../ServiceNodes/GUIStakingGuide.md)                       | [Update your Binaries and Launcher](../SNFullGuide/#updating-your-binaries) |
| Set up a Service Node with the Loki Launcher by following this guide. | Set up a Service Node with debs via an apt repository by following this guide. | Want to stake without operating a Service Node, or want to stake to an open pool Service Node? |  Need to download the latest releases for your Service Node and run the Loki Launcher?   |

## Service Nodes Overview

Much of Loki’s networking functionality and scalability is enabled by a set of incentivised nodes called Service Nodes.  To operate a Service Node, an operator [time-locks a significant amount of Loki](../ServiceNodes/StakingRequirement.md) and provides a minimum level of bandwidth and storage to the network. In return for their services, Loki Service Node operators receive a portion of the block reward from each block.

The resulting network provides [market-based resistance to Sybil attacks](../Advanced/SybilResistance.md), addressing a range of problems with existing mixnets and privacy-centric services. This resistance is based on supply and demand interactions which help prevent single actors from having a large enough stake in Loki to have a significant negative impact on the second-layer privacy services Loki provides. [DASH](https://github.com/dashpay/dash/wiki/Whitepaper) first theorised that Sybil attack resistant networks can be derived from cryptoeconomics. As an attacker accumulates Loki, the  circulating supply decreases, in turn applying demand-side pressure, driving the price of Loki up. As this continues, it
becomes increasingly costly for additional Loki to be purchased, making the attack prohibitively expensive.

To achieve this economic protection, Loki encourages the active suppression of the circulating supply. In particular, the [emissions curve](../Advanced/Cryptoeconomics.md) and [collateral requirements](../ServiceNodes/StakingRequirement.md) must be designed to ensure enough circulating supply is locked and reasonable returns are provided for operators to ensure [Sybil attack resistance](../Advanced/SybilResistance.md).

## Methods to Setup a Loki Service Node

We support three different mechanisms of managing the loki service node suite:

| Method                                                                      | Description                                                                                                                                                      |
|-----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Loki Launcher](../ServiceNodes/SNFullGuide.md)                             | Using loki-launcher to download, start, monitor, and manage service node components.  Has built-in updating capabilities for new releases.  Requires nodejs.     |
| [Apt Repository](../ServiceNodes/DebianPackageGuide.md)                     | Installing debs via apt repository which installs and runs the components via systemd.  Updates via the system package manager(apt).  Requires Ubuntu or Debian. |
| [Installing and Configuring Manually](../ServiceNodes/SNFullGuideLegacy.md) | Installing and configuring manually.  This is more involved than the above, and requires manual configurating and updating of each component.                    |

## Service Node Activities

Right now Service Nodes are full nodes on the Loki network. Full nodes become Service Nodes when the owner [locks the required amount of Loki](../ServiceNodes/StakingRequirement.md) and submits a registration transaction. Once accepted by the network, the Service Node is eligible to win [block rewards](../Advanced/Cryptoeconomics.md). Multiple participants can be involved in one Service Node and can have the reward automatically distributed.

It is also worth noting that Service Nodes are quite basic at the moment, and operators will need to stay up to date with new updates to keep in line with software and hardware requirements. Once all of the updates are out, Service Nodes will also offer the following [Loki Services](../LokiServices/LokiServicesOverview.md):

-   Route end user’s internet traffic, either as an [exit node](/ServiceNodes/ServiceNodeFunctions/#exit-nodes) or relay in a novel mixnet
    
-   Receive, store and forward [encrypted user messages](../LokiServices/Messenger.md)
    
-   Monitor other Service Nodes and [vote on their performance](../Advanced/SwarmFlagging.md)
    
-   Be called into quorums which give them authority over instant transactions ([Blink](../LokiServices/Blink.md))
    
-   Act as [remote nodes](/ServiceNodes/ServiceNodeFunctions/#remote-nodes) for users

Once these features come out, Service Node operation will require better servers, particularly when it comes to bandwidth.

## Guides & Resources

| **Guide/Resource**                                                                                                       	| **Description**                                                                                                                                   	|
|--------------------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------	| 
| **[Service Node Setup](../ServiceNodes/SNFullGuide.md)**                                                            	| How to host and maintain a Service Node using the Loki-Launcher and [CLI wallet](/Wallets/WalletsOverview/#command-line-interface-wallet-cli). |
|**[Service Node Setup - Advanced](../ServiceNodes/SNFullGuideLegacy.md)** | How to host and maintain a Service Node using the [CLI wallet](/Wallets/WalletsOverview/#command-line-interface-wallet-cli). |
| **[Staking to a Service Node as a Contributor](../ServiceNodes/GUIStakingGuide.md)** | How to Stake to a Service Node when you are not operating one but contributing. |
| **[Updating your Service Node](../ServiceNodes/UpdateGuide.md)**                                                          | How to update your Service Node version.|
|**[Loki Dashboard](https://lokidashboard.com/)**| See statistics, data, maps and other information on the Loki Service Nodes.|
| **[Service Node RPC](../Developer/SNRPCGuide.md)**                                                                       	| How to use JSON 2.0 RPC Calls with Service Nodes.                                                                                                 	|
| **[Active Service Node List](https://www.lokiblocks.com)**                                                               	| Loki Block explorer showing the current Service Node Pubkeys.                                                                                     	|
| **[Setup Video Guide](https://www.youtube.com/watch?v=6uiRD1847UY)**                                                     	| Video Guide on how to setup a Service Node using the CLI Wallet.                                                                                  	|
| **[Staking Requirement Calculator WEB](https://imaginary.stream/sn/)**                                                   	| Webpage showing Staking Requirement at current Block Height.                                                                                      	|
