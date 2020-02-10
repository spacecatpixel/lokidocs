title: Loki Documentation | Frequently Asked Questions
description: What is Loki? Does Loki have Masternodes? What is Session? Loki FAQ page goes into the frequently asked questions the Loki project receive.


# Frequently Asked Questions

## General

* [What is Loki?](#what-is-loki)

* [Is Loki Proof of Work (PoW) or Proof of Service (PoS)?](#is-loki-proof-of-work-pow-or-proof-of-service-pos)

* [What is the token supply?](#what-is-the-token-supply)

* [What do you do differently from Monero?](#what-do-you-do-differently-from-monero)

* [Who would use Loki Network?](#who-would-use-loki-network)

* [Is Loki an ERC20 token?](#is-loki-an-erc20-token)

* [Why the name Loki?](#why-the-name-loki)

* [What is the business model behind this peer-to-peer network?](#what-is-the-business-model-behind-this-peer-to-peer-network)

* [Will you guys commit back to the Monero source code?](#will-you-guys-commit-back-to-the-monero-source-code)

* [What's the difference from Monero?](#whats-the-difference-from-monero)

* [Can I see details about the premine?](#can-i-see-details-about-the-premine)

* [Why is there a 5% governance reward?](#why-is-there-a-5-governance-reward)

* [What is the block reward for mining?](#what-is-the-block-reward-for-mining)

* [What is the block generation time?](#what-is-the-block-generation-time)

* [Are there plans to support Loki on the Ledger Nano S hardware wallet?](#are-there-plans-to-support-loki-on-the-ledger-nano-s-hardware-wallet)

---

## Service Nodes

* [Why are Service Nodes required?](#why-are-service-nodes-required)

* [Is there a concept of Masternode's in Loki?](#is-there-a-concept-of-masternodes-in-loki)

* [What is the collateral requirement to run Service Nodes?](#what-is-the-collateral-requirement-to-run-service-nodes)

* [Can you run multiple service nodes in a single VPS server?](#can-you-run-multiple-service-nodes-in-a-single-vps-server)

* [Can a pool member request for the stake to be unlocked?](#can-a-pool-member-request-for-the-stake-to-be-unlocked)

---

## Session 
* [What is Session?](#what-is-session)

* [why should I trust Session?](#why-should-i-trust-session)


* [What will Session do if compelled by a court to reveal user identities?](#what-will-session-do-if-compelled-by-a-court-to-reveal-user-identities)

* [How do I contact Session?](#how-do-i-contact-session)

* [How does Session protect my identity?](#how-does-session-protect-my-identity)

* [What is metadata and why does Session need to protect it?](#what-is-metadata-and-why-does-session-need-to-protect-it)

* [What are the differences between Session on mobile and Session on desktop?](#what-are-the-differences-between-session-on-mobile-and-session-on-desktop)

* [What is an onion routing network?](#what-is-an-onion-routing-network)

* [What is proxy routing, and how is it different from onion routing?](#what-is-proxy-routing-and-how-is-it-different-from-onion-routing)


* [How do I know if the person I am talking to is the person I want to talk to?](#how-do-i-know-if-the-person-i-am-talking-to-is-the-person-i-want-to-talk-to)

* [What are channels, and do they protect my privacy in the same way as person-to-person messages?](#what-are-channels-and-do-they-protect-my-privacy-in-the-same-way-as-person-to-person-messages)

* [What are private group chats, and how do they compare with channels?](#what-are-private-group-chats-and-how-do-they-compare-with-channels)

* [If my phone is taken from me, can someone access my messages?](#if-my-phone-is-taken-from-me-can-someone-access-my-messages)

* [Can I share attachments with my contacts? If so, does the app strip metadata from those attachments?](#can-i-share-attachments-with-my-contacts-if-so-does-the-app-strip-metadata-from-those-attachments)

---

## SNApps

* [Do SNApps run on Service Nodes only?](#do-snapps-run-on-service-nodes-only)

* [Are SNApps like DApps?](#are-snapps-like-dapps)

* [Where will SNApps and all of its data be hosted?](#where-will-snapps-and-all-of-its-data-be-hosted)

---

## Loki Services

* [What's Session?](#whats-loki-messenger)

---

General
---

###**What is Loki?**

Loki provides users with tools to interact online in an anonymous, decentralised, secure and private way. By combining a private transaction network, the $LOKI cryptocurrency, and economically incentivised [Service Nodes](../ServiceNodes/SNOverview), Loki has created a trustless quorum-based onion router called [Lokinet](../Lokinet/LokinetOverview). Built into Lokinet is [Session](../LokiServices/Messenger) — a decentralised, anonymous and private messaging service. Front end applications, known as [Service Node Apps](../Lokinet/SNApps) (SNApps) operate on Lokinet, and will allow browser integration and contribution from our open-source community.

###**Is Loki Proof of Work (PoW) or Proof of Service (PoS)?**

Loki uses a hybrid of [Proof of Work](https://en.wikipedia.org/wiki/Proof-of-work_system) and [Proof of Service](../ServiceNodes/SNOverview), similar to how DASH is secured by PoW but also has a reward for their masternodes through a Proof of Service.

###**What is the token supply?**

Like Monero, there is no total token supply. The current supply can be seen at [lokiblocks.com](https://lokiblocks.com).

###**What do you do differently from Monero?**

Aside from some minor changes in approach to the core currency, we implement a [Service Node](../ServiceNodes/SNOverview) network that performs a variety of functions, including an [anonymous networking layer](../Lokinet/LLARP), trustless quorum-based instant transactions (based on a system called "[Blink](../LokiServices/Blink)"), and a range of functions that leverage the networking layer for applications like secure [private messaging](../LokiServices/Messenger).

###**Who would use Loki Network?**

Loki provides both private transaction and private communication functionality, making the Loki Network important for users who want the highest level of privacy in their communication channels. As more [SNApps](../Lokinet/SNApps) are developed we imagine Loki will present it self as the network to run privacy-centric applications on top of.

###**Is Loki an ERC20 token?**

Loki is not an ERC20 token. Loki is its own coin, running its own mainnet. See [lokiblocks.com](https://lokiblocks.com)

###**Why the name Loki?**

Loki is the Norse god of trickery. This is fitting as we use a lot of digital 'tricks' to obfuscate transactional data. The name is also a play on words, as transactions and communications on the Loki network are very 'Low-Key'.

###**What is the business model behind this peer-to-peer network?**

Loki operates on an incentives structure provided by the network. Peer-to-peer communications only occurs through the [Service Node](../ServiceNodes/SNOverview) layer which is already incentivised to run so there is less of an incentive to provide any additional businesses models. The business model post-launch for the Loki Foundation is twofold: first, to continue to build core [Loki Services](/LokiServices/LokiServicesOverview), and second, to aid in the development of 3rd party SNApps which Loki Service Nodes can optionally operate.

###**Will you guys commit back to the Monero source code?**

Loki plans to push back any useful changes to Monero, such as optimisations, bug fixes, and feature adds.


###**What's the difference between Loki and Monero?**

Compared to Monero, Loki has a [fixed ring size](/Advanced/CryptoNoteElements/#ring-signature-size) with a minimum mixin of 10, [governance block reward](/Advanced/Cryptoeconomics/#block-reward-split) of 5% which will [fund community projects and developments](/Governance/LokiFundingSystem), and [emission curve changes](/Advanced/Cryptoeconomics/#loki-block-reward). These are base-layer changes that will differentiate us from Monero; however, the main change that is being implemented is the second layer of incentivised [Service Nodes](../ServiceNodes/SNOverview), [Loki Services](/LokiServices/LokiServicesOverview), and [Lokinet](/Lokinet/LokinetOverview).

###**Can I see details about the premine?**

Yes, see the [premine report](https://loki.network/loki-premine-report/).

###**Why is there a 5% governance reward?**

We intended to create a [self-funding system](../Governance/LokiFundingSystem) so that users can be certain that no external influences can drive the development funding of the network in an undesirable direction. The 5% block reward that is issued to the governance wallet is for this purpose.

This is a similar approach to other projects, such as the Zcash Foundation, who for the first 4 years of the network’s operation will receive a 20% block reward, and the DASH project, who receive a 10% block reward from the network.

We wanted to keep the governance reward significantly smaller than Zcash and DASH, but we also want to ensure that the amount is enough to sustain the project indefinitely.

In the future, the community may decide that this reward is unnecessary, or of too high or too low a proportion, in which case, a hard fork event may change the nature of this block reward split.

###**What is the block reward for mining?**

The exact block reward can be found at [www.lokiblocks.com](https://www.lokiblocks.com). This block reward is split as follows: 50% of the block reward goes to service nodes, 45% to miners, and 5% to the governance pool. You can see more details on the block reward split [here](../Advanced/Cryptoeconomics/#block-reward-split)

###**What is the block generation time?**

About 120 seconds.

###**Are there plans to support Loki on the Ledger Nano S hardware wallet?**
Yes, support is in the works.

---

Service Nodes
---

###**Why are Service Nodes required?**

[Loki Service Nodes](../ServiceNodes/SNOverview) form a second-layer network that allows for anonymous networking using a novel garlic routing technology. Service Nodes will route data being passed through our onion router, called [Lokinet](../Lokinet/LokinetOverview). [SNApps](../Lokinet/SNApps) are the front-end user-facing applications enabled by this network of service nodes. SNApps do not run on the blockchain, but rely on the consensus rules of the blockchain to enforce service node behaviour. This also means that SNApps do not impact blockchain scalability. Service nodes don't mine blocks, but they do propagate and validate blocks like regular full nodes.

###**Is there a concept of 'Masternodes' in Loki?**

Yes, they are called [Service Nodes](../ServiceNodes/SNOverview) in Loki.

###**What is the collateral requirement to run Service Nodes?**

The initial requirement is 20K $LOKI, though this will adjust downward over time. Pools are also allowed, and can include up to 4 people.
For more information on the collateral requirement [click here](../ServiceNodes/StakingRequirement).

Check out the collateral calculator [here](https://jagerman.com/sn/) to see the current requirement. You can either run a single node or join a pooled node. For a single node, you will need to stake the full collateral. For a pooled node, the operator and all but one of the 4 contributors must have at least 25% of the required total collateral. See more details on service nodes in the [Service Node Portal](https://loki.network/service-nodes-portal/).


###**Can you run multiple service nodes in a single VPS server?**

It is recommended that you run different VPS instances for each [service node](../ServiceNodes/SNOverview), however it is not required.

###**Can a pool member request for the stake to be unlocked?**

In pooled nodes, any contributor that requests the stake be unlocked will schedule the service node for expiration. 

---

Session
---

### What is Session?

[Session](https://getsession.org) is a secure messaging app that protects your metadata, encrypts your communications and makes sure your messaging activities leave no digital trail behind.

### Why should I trust Session?

Conversations in Session are end-to-end encrypted, just as in most private messengers. However, when you use Session, the identities of the people communicating are also protected. Session keeps your communication private, secure and anonymous.

When using Session Desktop, your messages are sent to their destinations through Lokinet, a decentralised onion routing network similar to Tor (with a few key differences). Lokinet protects user privacy by ensuring that no single server ever knows a message's origin and destination. For more on this, check out What is an onion routing network? While Lokinet is being finished on mobile, Session’s Android and iOS clients use proxy routing to protect IP addresses and maintain anonymity. For more on the difference between desktop and mobile, check out "What is proxy routing?" below. 

Session’s code is open-source and can be independently audited at any time. Session is a project of the Loki Foundation, a not-for-profit organisation whose mission is to provide the world with better access to digital privacy technologies.

### What will Session do if compelled by a court to reveal user identities?

As Session is a project of the Loki Foundation, court orders in situations such as this would be targeted at the Foundation.

The Loki Foundation would comply with lawful orders. However, the Loki Foundation could not reveal user identities simply because the Foundation does not have access to the data required to do so. Session account creation does not use or require email addresses or phone numbers. Session IDs (which are public keys) are recorded, but there is no link between a public key and a person's real identity, and due to Session's decentralised network, there's also no way to link a Session ID to a specific IP address.

The most the Loki Foundation could provide, if compelled to do so, would be tangential information such as access logs for the getsession.org website or statistics collected by the Apple App Store or Google Play Store.

### How do I contact Session?

Got questions, comments or suggestions? Contact the team behind Session at team@loki.network or reach out to Session on social media.

### How does Session protect my identity?

You don’t need a mobile number or an email to make an account with Session. Your display name can be your real name, an alias, or anything else you like.

Session does not collect any geolocation data, metadata or any other data about the device or network you are using. Session Desktop messages are sent over Lokinet, Session's decentralised onion routing solution, so no remote servers are ever able to trace or track your conversations. And on mobile, Session uses secure proxy routing to keep your identity private. For more on Session's secure message routing, check out "What is an onion routing network?" and "What is proxy routing?"

### What is metadata and why does Session need to protect it?

In messaging apps, metadata is the information created when you send a message — everything about the message besides the actual contents of the message itself. This can include information like your IP address, the IP addresses of your contacts, who your messages are sent to, and the time and date that messages are sent.

It’s impossible for Session to track users’ IP addresses because the app uses onion routing (on desktop) and proxy routing (on mobile) to send messages. Because Session doesn’t use central servers to route messages from person to person, we don’t know when you send messages, or who you send them to. Session lets you send messages — not metadata.

### What are the differences between Session on mobile and Session on desktop?

As mentioned in "What is proxy routing" below, mobile devices use an alternative form of anonymous routing, called proxy routing, to protect user IP addresses. This is a temporary measure which will be replaced by Lokinet when the latter has mobile client functionality. Other than this, mobile and desktop Session clients have feature parity.

### What is an onion routing network?

An onion routing network is a network of nodes over which users can send anonymous encrypted messages. Onion networks encrypt messages with multiple layers of encryption, then send them through a number of nodes. Each node ‘unwraps’ (decrypts) a layer of encryption, meaning that no single node ever knows both the destination and origin of the message. Session uses onion routing to ensure that a server which receives a message never knows the IP address of the sender.

Session uses the Loki Project’s Lokinet onion routing network to send messages securely and anonymously. Lokinet is built on a foundation of Loki Service Nodes, which also power the $LOKI cryptocurrency. Check out Loki.network for more information on the tech behind Session’s onion routing.

### What is proxy routing, and how is it different from onion routing?

Session’s desktop client uses the Lokinet onion routing network to send messages, but due to platform-specific limitations, Lokinet is not yet available on mobile devices. While we work to make Lokinet available on mobile, we have implemented an interim solution: proxy routing.

Instead of connecting directly to a Loki Service Node to send or receive messages, mobile devices connect to a service node which then connects to a second service node on behalf of the mobile device. The first service node then sends or requests messages from the second node on behalf of the mobile device. 

This proxy routing system ensures that the client device’s IP address is never known by the service node which fetches or sends the messages. However, proxy routing does provide weaker privacy than the Lokinet onion routing protocol used by Session’s desktop client. Proxy routing still provides a high level of security for minimising metadata leakage on mobile. The proxy routing system will be replaced by full Lokinet integration when Lokinet clients are ready for mobile devices.

### How do I know if the person I am talking to is the person I want to talk to?

Session's "Safety Numbers" feature makes it easy for people in a conversation to verify each other if both parties would like to do so. You can use another channel of communication outside of Session to ask for and verify someone's Session Safety Number, and then check that the Safety Number in the app matches what you've been told. If the Safety Numbers match, you're speaking to the correct person. If they do not, the Session account may be an imposter.

### What are channels, and do they protect my privacy in the same way as person-to-person messages?

The short answer: channels are not as private as person-to-person messages.

The long answer: channels are large public channels where Session users can congregate and discuss anything they want. Channels, unlike other services in Session, are self-hosted and thus not fully decentralised. Someone has to run a server which stores the public chat's message history. Additionally, because channel servers can serve thousands of users, messages are only encrypted in transit to the server rather than being fully end-to-end encrypted.

For smaller group chats with a higher degree of privacy, users are encouraged to use private group chats. You can find out more about channels and private group chats [here](https://loki.network/tag/group-messaging/).

### What are private group chats, and how do they compare with channels?

Private group chats are fully end-to-end encrypted group chats. Up to 10 people can participate in a private group chat. Private group chat messages are stored on Session's decentralised network, with no central servers used or required.

### If my phone is taken from me, can someone access my messages?

Session allows users to encrypt their local Session database with a PIN code. With this feature turned on, your messages cannot be accessed without knowing your PIN code.

### Can I share attachments with my contacts? If so, does the app strip metadata from those attachments?

Session can send files, images and other attachments up to 10MB in both person-to-person messages and group chats. By default, Session uses the Loki File Server for attachment sending and storage. The Loki File Server is an open-source file server run by the Loki Foundation — the creators of Session. When you send an attachment, the file is symmetrically encrypted on the device and then sent to the Loki File Server. To send the attachment to a friend, Session sends them an encrypted message containing the link, plus the decryption key for the file. This ensures that the Loki File Server can never see the contents of files being uploaded to it. 

Additionally, the desktop and mobile versions of Session use onion routing and proxy routing (respectively) to hide users' IP addresses when uploading or downloading attachments from the Loki File Server. In future, you will be able to configure the Session app to use a custom file server, such as a self-hosted server or VPS (Virtual Private Server), if you would prefer not to use a file server hosted by the Loki Foundation.

---

SNapps
---

###**Do SNApps run on Service Nodes only?**

When accessing a [SNApp](../Lokinet/SNApps) your data is obfuscated by being routed through multiple service nodes. However, the SNApp you are accessing is hosted on servers, similar to hidden services in Tor, and is computed client-side.


###**Are SNApps like DApps?**

In the sense that their core function is 'decentralised,' yes. However, unlike most DApps, [SNApps](../Lokinet/SNApps) do not rely on on-chain execution or computation. All Loki SNApps are computed client-side, and the networking is handled offchain by the [service node](../ServiceNodes/SNOverview) network.

###**Where will SNApps and all of their data be hosted?**

[SNApps](../Lokinet/SNApps) are similar to hidden services in Tor; they are hosted on servers by users.

---

Loki Services
---

### **What is Session?**

[Session](../LokiServices/Messenger) is a decentralised, end-to-end encrypted private messaging service. Many other encrypted private messengers rely on central servers to route traffic. Session leverages the power of public-private key cryptography and the [Loki Service Node](../ServiceNodes/SNOverview) architecture on the Loki network to create a service similar to the secure messaging application Signal, but with the added benefit of decentralisation and network anonymity.