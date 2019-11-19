title: Loki Documentation | Loki Network Doc Overview
description: Find out about Loki Wallets, Mining, Service Nodes, Lokinet, Advanced information, FAQ and Contributing.

# Loki Network

## Wallets
Wallets offer a gateway to private decentralised transactions and communications. They allow you to hold, secure and trade Loki with peers. [Download an official Loki wallet](https://loki.network/getting-started/) today and start taking back control of your online privacy.

To learn more about wallets, [click here](../Wallets/WalletsOverview.md).

Confused about which wallet to use? Check out the "[Which wallet to use?](../Wallets/WhatWalletToUse.md)" guide.

## Mining
Mining on the Loki Network is the process of solving a difficult computational puzzle through a Proof-of-Work (PoW) protocol and compiling newly created transactions into a block. Miners do this in order to earn money from the [Block Reward](/Advanced/Cryptoeconomics/#block-reward) and the fees associated from the transactions they include in each block.

The Loki cryptocurrency can be mined using the RandomXL algorithm.

To learn more about mining, [click here](../Mining/MiningOverview.md).

## Service Nodes
Loki utilises a network of [Service Nodes](../ServiceNodes/SNOverview.md) which are paid to propagate the blockchain and process transactions. Service Nodes require a [collateral](../ServiceNodes/SNOverview.md) of Loki to be active, and this gives the Loki network built-in market-based [Sybil resistance](../Advanced/SybilResistance.md) by forcing actors to incur a large cost in order to attempt any form of temporal analysis on the network.

In addition, because Service Nodes are rewarded for staying active on the network, they can be leveraged to maintain the [Lokinet](../Lokinet/LokinetOverview.md) by [routing traffic](../Lokinet/LLARP.md). Service Nodes are also leveraged to maintain the [Loki Services](../LokiServices/LokiServicesOverview.md) by handling special off-chain activities, as seen in the case of [Loki Messenger](../LokiServices/Messenger/Messenger.md).

To learn more about Service Nodes, [click here](../ServiceNodes/SNOverview.md).

## Lokinet
Lokinet is a network that uses market-based [Sybil attack resistance](../Advanced/SybilResistance.md) and [onion routing](../Lokinet/LLARP.md) to create a new way to privately access the [internet](https://www.youtube.com/watch?v=4KzH_eyX99A&t=2m48s). Users of Lokinet will be able to access normal websites and [SNApps](../Lokinet/SNApps.md) without revealing their IP address.

SNApps are traditional web applications that sit inside Lokinet and are hidden from the rest of the internet. The host’s IP is never revealed, so SNApps provide excellent protection for the development of censorship resistant social media, marketplaces, information sharing sites, and other apps that depend on user and server anonymity.

To learn more about Lokinet, [click here](../Lokinet/LokinetOverview.md).

## Loki Services
Loki Services are back-end user-facing applications, such as [Loki Messenger](../LokiServices/LokiServicesOverview.md) and [Blink](../LokiServices/Blink.md). Off-chain networking and/or storage activities for these services are handled by [swarms](../Advanced/SwarmFlagging.md), groups of [Service Nodes](../ServiceNodes/SNOverview.md) who query each other to enforce each other's honesty. This creates a trustless environment where no centralised leader can enforce censorship on any of the off-chain activities being conducted on the Loki Network.

To learn more about Loki Services, [click here](../LokiServices/LokiServicesOverview.md).

## Advanced
Learn more about Loki by browsing through the Advanced section. Topics that are covered include:

* [Technical Specs](../Advanced/TechnicalSpecs.md)
* [Loki's Cryptoeconomics](../Advanced/Cryptoeconomics.md)
* [Sybil Resistance](../Advanced/SybilResistance.md)
* [Dynamic Block Size](../Advanced/DynamicBlockSize.md)
* [CryptoNote Elements](../Advanced/CryptoNoteElements.md) used by Loki.

Additionally, you can find information on how Loki is going to mitigate [Denial of Service Attacks](../Advanced/DenialofServiceAttacks.md), circumvent [IP and Packet Blocking](../Advanced/IPandPacketBlocking.md), and deal with underperforming nodes through [Swarm Flagging](../Advanced/SwarmFlagging.md).

## FAQ
If you have a question, chances are other developers or community members have asked it.

Check out our "[Frequently Asked Questions](../FAQ.md)" page. If the information you are looking for is not there, please join one of our community chat groups, such as our [Telegram](https://t.me/LokiCommunity) group or [Discord](https://discord.gg/67GXfD6) channel, and ask one of our community managers.

## Contributing
Want to contribute to the Loki-Docs page?
Check out "[How to Contribute to Loki-Docs](../Contributing/HowToContributeToLokiDocs.md)".

Have you found a security vulnerability in Loki's code?
Have a look at Loki's [Vulnerabiity Response Disclosure](../Contributing/VULNERABILITY_RESPONSE_LOKI.md) and get in contact with us.
