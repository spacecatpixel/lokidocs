#LokiNET Overview

Onion routing protocols allow for users to form tunnels or paths through a distributed network, using multiple nodes as hops to obfuscate the destination and origin of data packets. [Service Nodes](../ServiceNodes/SNOverview.md) on the Loki network will operate a low latency onion routing protocol, forming a fully decentralised overlay network, called Lokinet.  The network does not rely on trusted authorities and its state is fully derived from the blockchain.  Users can connect to individual [Service Nodes](../ServiceNodes/SNOverview.md) and create bidirectional paths for packets to be routed through.  The network can be used to access internally hosted services called [SNApps](../LokiNET/SNapps.md). Users can utilise
[Service Nodes](../ServiceNodes/SNOverview.md) exit functionality to browse the external internet without their IP address
being exposed.

## Terms

**[Service Node](../ServiceNodes/SNOverview.md)**: Full nodes on the Loki Network.

**[SNApps/Hidden Services](../LokiNET/SNapps.md)**: An anonymized IP endpoint.

**[LLARP](../LokiNET/LLARP.md)**: Low Latency Anonymous Routing Protocol.

## Guides

**[Setting Up A SNApp](../LokiNET/Guides/SNApps.md)**: How to host a hidden service the right way.

**[Setting Up A TestNet Relay](../LokiNET/Guides/TestNetRelay.md)**: How to host a relay on the test network.

**[Developer Info](../LokiNET/DeveloperInfo.md)**: Protocol Specifications.

## Concepts

**[Path](../LokiNET/LLARP.md)**: Bidirection Onion Routing Construct, (I2P tunnel / Tor circuit equiv.)



