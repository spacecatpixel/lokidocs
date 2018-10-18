# Frequently Asked Questions

* [What is Loki?](#what-is-loki)

* [Is Loki Proof of Work (PoW) or Proof of Service (PoS)?](#is-loki-proof-of-work-pow-or-proof-of-service-pos)

* [What is the token supply?](#what-is-the-token-supply)

* [Why are Service Nodes required?](#why-are-service-nodes-required)

* [Do SNApps run on Service Nodes only?](#do-snapps-run-on-service-nodes-only)

* [Is there a concept of Masternode's in Loki?](#is-there-a-concept-of-masternodes-in-loki)

* [What's Loki Messenger?](#whats-loki-messenger)

* [Are SNApps like DApps?](#are-snapps-like-dapps)

* [What do you do differently from Monero?](#what-do-you-do-differently-from-monero)

* [Who would use Loki Network?](#who-would-use-loki-network)

* [Is Loki an ERC20 token?](#is-loki-an-erc20-token)

* [What is the collateral requirement to run Service Nodes?](#what-is-the-collateral-requirement-to-run-service-nodes)


###**What is Loki?**

Loki provides users with tools to interact online in an anonymous, decentralised, secure and private way. By combining a private transaction network, the $LOKI cryptocurrency, with economically incentivised [Service Nodes](../ServiceNodes/SNOverview), Loki creates a trustless quorum based mixnet called [Lokinet](../Lokinet/LokinetOverview). Built into Lokinet is [Loki Messenger](../Lokinet/Messenger) - a decentralised, anonymous and private messaging service. Front end applications, known as [Service Node Apps](../Lokinet/SNapps) (SNApps) operate on Lokinet, and will allow browser integration and contribution from our open-source community.

###**Is Loki Proof of Work (PoW) or Proof of Service (PoS)?**

Loki uses a hybrid of [Proof of Work](../Mining/ProofOfWork) and [Proof of Service](../ServiceNodes/SNOverview), similar to how DASH is secured by PoW but also has a reward for their masternodes through a Proof of Service.

###**What is the token supply?**

Like Monero, there is no total token supply. The current supply can be seen at [lokiblocks.com](https://lokiblocks.com)

###**Why are Service Nodes required?**

The [Service Nodes](../ServiceNodes/SNOverview) form a second layer network that allows for anonymous networking using a novel garlic routing technology. [SNApps](../Lokinet/SNapps) are the front-end views enabled by this network, such as the [Messenger](../Lokinet/Messenger) and other applications such as a generalised [mixnet](../Lokinet/LokinetOverview). SNApps do not run on the blockchain, but rely on the consensus rules of the blockchain to enforce Service Node behaviours. This also means that SNApps do not impact blockchain scalabilty. Service Nodes don't mine blocks but do propagate and validate blocks like regular full nodes.

###**Do SNApps run on Service Nodes only?**

The unique property of the [Service Node](../ServiceNodes/SNOverview) network is that because of the [staking requirement](../ServiceNodes/StakingRequirement), it becomes very expensive to collect enough Loki to do effective temporal analysis on the network. Therefore, users are afforded protection against this kind of analysis, but only if the network only allows routing to be done by the Service Nodes.

###**Is there a concept of 'Masternodes' in Loki?**

Yes, they are called [Service Nodes](../ServiceNodes/SNOverview) in Loki.

### **What's Loki Messenger?**

[Loki Messenger](../Lokinet/Messenger) will be a decentralised, end-to-end encrypted private messaging service. There are already applications that provide a platform for users to send messages without revealing their contents, however they rely on centralised servers that governments or third parties can target. By leveraging the power of public-private key cryptography and the [Service Node](../ServiceNodes/SNOverview) architecture on the [Loki network](../Lokinet/LokinetOverview), we can create a service similar to Signal, a secure messaging application with the added benefit of decentralisation and network anonymity.

###**Are SNApps like DApps?**

In the sense that their core function is 'decentralised,' yes. However, unlike most DApps, [SNApps](../Lokinet/SNapps) do not rely on on-chain execution or computation. All SNApps are computed client-side, and the networking is handled offchain by the [Service Node](../ServceNodes/SNOverview) network.

###**What do you do differently from Monero?**

Aside from some minor changes in approach to the core currency, we implement a [Service Node](../ServceNodes/SNOverview) network that performs a variety of functions, including an [anonymous networking layer](../Lokinet/LLARP), trustless quorum-based instant transactions through a system called "[Blink](../Lokinet/Blink)," and a range of functions that leverage the networking layer to do things like secure, [private messaging](../Lokinet/Messenger).

###**Who would use Loki Network?**

Loki provides both private transaction and private communication functionality, so the use case presents itself to users who want the highest level of privacy in their communication channels. As more [SNApps](../Lokinet/SNapps) are developed we imagine Loki will present it self as the network to run privacy-centric applications on top of.

###**Is Loki an ERC20 token?**

It is not an ERC20 token. Loki is its own coin running its own mainnet. See [lokiblocks.com](https://lokiblocks.com)

###**What is the collateral requirement to run Service Nodes?**

The initial requirement is 45K $LOKI, though this will adjust downward over time. Pools are also allowed up to 4 people.
For more Information on the collateral requirement [click here](../ServiceNode/StakingRequirement).
