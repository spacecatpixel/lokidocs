title: Loki Documentation | Loki Service Node Functions.
description: What do Loki Service Nodes do? Loki Service Nodes begin as a Remote Node, you might be familiar with the Monero Remote Nodes. Loki remote nodes help people send transactions on the private blockchain without having to download the entire ledger of Loki. Service Nodes also do Exit Node duties, similar to Tor or I2P. 

# Service Node Functions

## Remote Nodes

On any given cryptocurrency network, storing a full copy of the blockchain is not possible or practical for many users.   In Bitcoin and Ethereum, users can choose to connect to a public full node that holds a copy of the blockchain and can query and submit transactions to the network. This works because Bitcoin and Ethereum full nodes can efficiently search the blockchain for transactions that have the users public key as the target.

Due to the construction of CryptoNote currencies, public full nodes (called remote nodes) are put under much more stress.  When a user connects to a remote node, they must temporarily download every block (upon wallet creation or since last checked block) to their local machine and check each transaction for a public transaction key which can be generated from the users private view key. This process can cause a significant performance impact on remote nodes. Considering that there is no reward for this service, it can dissuade users from operating syncing services for light clients. CryptoNote mobile wallets are often unreliable and sometimes have to switch between remote nodes multiple times before establishing a reliable connection to either scan the blockchain or to submit a transaction.

Additionally, malicious remote node operators running one of the few popular nodes can record the IP address of users as they broadcast specific transactions.  Although no information about the actual transaction is revealed by this attack, specific IP addresses can be linked with transactions which can then be used to establish a link to a real-world identity, compromising privacy.

Loki circumvents these issues by requiring each [Service Node](../ServiceNodes/SNOverview.md) to act as a remote node that can be used by general users. Service Nodes naturally lend themselves to this work as they already hold a full copy of the  blockchain and form a widely distributed network of high bandwidth nodes. By using Service Nodes as remote nodes, there is an inherent financial limitation as to how much of the remote node network any given party can own, and therefore, how much data a malicious node operator can collect.

# Future Service Node Functions

## Exit Nodes

Exit nodes allow users to make requests to the wider internet and return those requests through a [mixnet](../Lokinet/LLARP.md). If used correctly, exit nodes allow users to browse the internet privately and without the users IP address being exposed to the server.

Although the operation of exit nodes is essential to Loki’s extended utility, forcing all [Service Node](../ServiceNodes/SNOverview.md) operators to act as exit nodes could be detrimental. Acting as an exit node may expose the operator to legal risks, as users of the exit node may perform malicious activity whilst using it as a proxy. As exit nodes simply relay traffic from the internet to the end user, exit nodes often receive Digital Millennium Copyright Act (DMCA) requests or are often assumed to be the source of hacking attempts. Although in most jurisdictions safe harboring laws may protect exit node operators, internet service providers that carry Service Node traffic on their servers may fear legal risks and often cut off service to the exit node.

Upon startup, a Service Node is assigned a relay flag and is restricted to routing packets within Lokinet, but never makes requests to the wider internet. An operator must opt-in if they wish to become an exit node, in doing so they demonstrate an understanding of the additional risks while also submitting to additional [Swarm tests](../Advanced/SwarmFlagging.md).

Opting-in as an exit node affords an operator double the reward of a normal relay when selected for a [block reward](../Advanced/Cryptoeconomics.md). This incentive is provided to ensure that exit node operators have sufficient financial  incentives to operate exit nodes, helping to protect against [Sybil attacks](../Advanced/SybilResistance.md) specifically  targeted to take over the exit node network. This is a vulnerability which Tor suffers from due to its low ratio of exit nodes to relays.

