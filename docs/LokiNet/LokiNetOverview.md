#LokiNET Overview

Onion routing protocols allow for users to form tunnels or paths through a distributed network, using multiple nodes as hops to obfuscate the destination and origin of data packets. [Service Nodes](../ServiceNodes/SNOverview.md) on the Loki network will operate a [low latency onion routing protocol](../Lokinet/LLARP.md), forming a fully decentralised overlay network, called Lokinet.  The network does not rely on trusted authorities and its state is fully derived from the blockchain.  Users can connect to individual [Service Nodes](../ServiceNodes/SNOverview.md) and create bidirectional paths for packets to be routed through.  The network can be used to access internally hosted services called [SNApps](../Lokinet/SNapps.md). Users can utilise
[Service Nodes](../ServiceNodes/SNOverview.md) [exit functionality](../Lokinet/ExitNodes.md) to browse the external internet without their IP address
being exposed.

## Loki Services
Similar to the investment that miners make into hardware, each Service Node operator freezes Loki coins when they begin to operate a Service Node. This frozen capital is called the [staking requirement](../ServiceNodes/StakingRequirement.md) and helps serve the two purposes for Loki Services:

1.  Every Service Node operator has a sufficiently large stake in the success of the network.
Should any Service Node operator provide poor performance to the network,  or act
dishonestly, they undermine and risk devaluing their own stake within the network.

2.  It provides an opportunity for more aggressive enforcement; if the network is able to
effectively limit dishonest nodes from receiving a reward, then dishonest nodes must
bear the opportunity cost of both the reward loss and the remaining lockup time on
their collateral.

If we take the above points to be true, and we can enforce aggressive punishments for poorly behaving nodes, then we can create [groups of Service Nodes](../Advanced/SwarmFlagging.md) which can be queried to come to consensus on the state of the blockchain or to enforce special off-chain node behaviour. In Loki, this behaviour pertains to both networking and storage activities. These off-chain activities are combined to be the back-end of user-facing applications that leverage these desirable properties, which are called Loki services.

Example Loki Services:

- [Service Node Applications](../Lokinet/SNapps.md)

- [Loki Messenger](../Lokinet/Messenger.md)

- [Blink Transactions](../Lokinet/Blink.md)

- [Exit Nodes](../Lokinet/ExitNodes.md)

- [Remote Nodes](../Lokinet/RemoteNodes.md)

## Terms

**[Service Node](../ServiceNodes/SNOverview.md)**: Full nodes on the Loki Network.

**[SNApps/Hidden Services](../Lokinet/SNapps.md)**: An anonymized IP endpoint.

**[LLARP](../Lokinet/LLARP.md)**: Low Latency Anonymous Routing Protocol.

## Guides & Resources

**[LLARP Github](https://github.com/loki-project/loki-network)**: LLARP (low latency anonymous routing protocol), a layer 3 onion routing protocol.

**[Setting Up A SNApp](../Lokinet/Guides/SNApps.md)**: How to host a hidden service the right way.

**[Setting Up A TestNet Relay](../Lokinet/Guides/TestNetRelay.md)**: How to host a relay on the test network.

**[Developer Info](../Lokinet/DeveloperInfo.md)**: Protocol Specifications.

## Concepts

**[Path](../Lokinet/LLARP.md)**: Bidirection Onion Routing Construct, (I2P tunnel / Tor circuit equiv.)



