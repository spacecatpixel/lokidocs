title: Loki Documentation | Low Latency Anonynous Routing Protocol | LLARP
description: Loki proposes a new routing protocol called LLARP which is designed as a hybrid between Tor and I2P to provide additional desirable properties versus any existing routing protocol.

# Low Latency Anonymous Routing Protocol (LLARP)

Underlying all applications for [Service Nodes](../ServiceNodes/SNOverview.md) is an anonymous routing protocol, which defines the way each Service Node communicates with its peers.  Loki proposes a new routing protocol called [LLARP](https://github.com/loki-project/loki-network) which is designed as a hybrid between Tor and I2P to provide additional desirable properties versus any existing routing protocol.  LLARP is built specifically to run on top of the Loki Service Nodes network and all LLARP optimisations consider this architecture. To understand the goals of LLARP, it is best to conduct an analysis of existing routing protocols and consider how LLARP improves upon them.

LLARP operates without the need to make use of directory authorities and, instead, relies on a DHT built from blockchain staking transactions, which allows [Service Nodes](../ServiceNodes/SNOverview.md) to act as routers in the network.  Bandwidth is not monitored or recorded in the DHT. Instead, bandwidth measurement and triage result from [swarms](../Advanced/SwarmFlagging.md) that assess each node and make a judgement on the nodes ability to provide appropriate bandwidth to the network.

In the Open Systems Interconnection model (OSI model), LLARP only attempts to provide an anonymous network layer. This means that it supports a larger range of internet protocols and it also minimises the overhead for storing file descriptors should exit nodes pass through [User Datagram Protocol (UDP)](https://en.wikipedia.org/wiki/OSI_model) traffic.  Additionally, LLARP opts for packet-switched based routing instead of tunnel-based routing, allowing for better load balancing and redundancy across the network.

End users of Lokinet are not expected (or even allowed) to route packets, this means that Lokinet exposes itself to a much lower attack surface for a Sybil attack due to the significant capital outlay required to begin [Service Nodes](../ServiceNodes/SNOverview.md) operation.

## The Onion Router (Tor)

In recent years, Tor has been the most popular anonymous mixnet. The Tor network maintains a high-level of censorship  resistance and has proved a valuable tool for preserving internet privacy. However,Tor is not a decentralised network as much as it is a hierarchical one. Tor is reliant on a group of directory authorities which are centralised servers operated by a group of volunteers close to the [Tor Foundation](https://www.torproject.org/docs/faq#KeyManagement). These directory authorities perform two main functions.  Firstly, they act as trusted reporters on the state of nodes in the network. When a Tor user (or relay) connects to the network for the first time they can connect to one of ten hard-coded directory authorities.  These directory authorities provide the user or relay with a file called the consensus. This file provides a list of all of the relays, guard nodes, and exit nodes currently in operation (excluding bridges) on the Tor network. Secondly, the directory authorities also measure the bandwidth that each relay can provide to the network.  They use this information to triage relays into categories, deciding whether nodes can operate as relays, guard nodes, or exit nodes.

### Tor has potential problems with Centralisation

This high level of centralisation creates points of failure that leaves Tor vulnerable. In 2014, Tor received information of a credible threat to take down the [directory authority servers](https://blog.torproject.org/possible-upcoming-attempts-disable-tor-network). If the directory authorities in the United States and either Germany or the Netherlands were to be shut down, that would be enough to shut down five of the ten directory authority servers. This would result in a highly unstable Tor network, with new relays being greatly diminished in their ability to interact with the network.

Methods of communication in Tor are also limited, as Tor only allows communication overTCP. IP over Tor is possible, but it lacks support for UDP based protocols (such as VoIP).

## Invisible Internet Project (I2P)

I2P takes a different approach to mixnet architecture, maintaining a higher level of trust agility by referring to a Distributed Hashing Table (DHT) to ascertain the network state instead of trusted directory authorities [15]. I2P also allows for both TCP and UDP traffic, supporting a larger scope of protocol interactions. However, I2P has not had a steady development process and over time it has accumulated technical debt, specifically in its cryptography usage. I2P uses 2048 bit ElGamal, which makes encryption and decryption slow in contrast to elliptic curve operations. While plans to migrate away from ElGamal exist in the I2P roadmap, progress has been slow.

### I2P has a lack of formal exit node support.

Additionally, I2P lacks formal support for [exit nodes](../Lokinet/Guides/ExitNode.md), meaning the majority of traffic on the network is accessing internally hosted websites, called Eepsites. This has greatly reduced the ability for the I2P network to reach users whose main purpose for using anonymising networks is to access the wider internet.

Furthermore, the manner in which I2P is built means that the majority of users that connect to  the  network  also  become  routers, which is problematic as the resulting network often lacks sufficient bandwidth to be able to build fast paths.   Network speeds in mixnets are bottlenecked by the least capable node in each circuit, and as a result of low-performance users becoming relays in I2P, a reduction in overall performance is seen.

### How does Tor compare with I2P

Finally, I2P differs from Tor in that it offers a packet-switched (rather than circuit-switched) network. Instead of establishing a single longer-term tunnel which all traffic travels through, I2P establishes multiple paths that each packet being communicated can use to use to take a different route through the network.  This gives I2P the ability to transparently route around network congestion and node failures.

### Cheap Node Attack

Both I2P and Tor have not fully mitigated Sybil attacks.  A sufficiently motivated attacker that has enough time and  capital to buy large amounts of relays can perform temporal analysis which undermines user privacy. The effectiveness of this analysis increases the more exit nodes, [relays and guard nodes the attacker operates](https://arxiv.org/abs/1602.07787). Tor and I2P are operated entirely by volunteers that donate both their time and money to the operation of nodes. We surmise that a network constructed from financial incentives rather than altruism can achieve a greater resilience against attacks, while providing a more reliable service.