#Lokinet Overview

[Service Nodes](../ServiceNodes/SNOverview.md) on the Loki network will operate a [low latency onion routing protocol](../Lokinet/LLARP.md), forming a fully decentralised overlay network, called Lokinet. Onion routing protocols allow for users to form tunnels or paths through a distributed network, using multiple nodes as hops to obfuscate the destination and origin of data packets.  

The network does not rely on trusted authorities and its state is fully derived from the blockchain.  Users can connect to individual [Service Nodes](../ServiceNodes/SNOverview.md) and create bidirectional paths for packets to be routed through.  The network can be used to access internally hosted services called [SNApps](../Lokinet/SNApps.md). Users can utilise [Service Nodes](../ServiceNodes/SNOverview.md) [exit functionality](/ServiceNodes/ServiceNodeFunctions/#exit-nodes) to browse the external internet without their IP address being exposed.



## Terms

**[Service Node](../ServiceNodes/SNOverview.md)**: Full nodes on the Loki Network.

**[SNApps/Hidden Services](../Lokinet/SNApps.md)**: An anonymized IP endpoint.

**[LLARP](../Lokinet/LLARP.md)**: Low Latency Anonymous Routing Protocol.

## Guides & Resources

**[Lokinet Public Testing Guide](../Lokinet/Guides/PublicTestingGuide.md)**: Full Lokinet public testing guide.

**[LLARP Github](https://github.com/loki-project/loki-network)**: LLARP (low latency anonymous routing protocol), a layer 3 onion routing protocol.

**[Accessing SNApps](../Lokinet/Guides/AccessingSNApps.md)**: How to access different SNApps.

**[Hosting a SNApp](../Lokinet/Guides/HostingSNApps.md)**: How to hose a SNApp

**[Setting Up A TestNet Relay](../Lokinet/Guides/TestNetRelay.md)**: How to host a relay on the test network.

**[Developer Info](../Lokinet/DeveloperInfo.md)**: Protocol Specifications.

## Concepts

**[Path](../Lokinet/LLARP.md)**: Bidirection Onion Routing Construct, (I2P tunnel / Tor circuit equiv.)



