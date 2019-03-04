#Lokinet Overview

[Service Nodes](../ServiceNodes/SNOverview.md) on the Loki network will operate a [low latency onion routing protocol](../Lokinet/LLARP.md), forming a fully decentralised overlay network, called Lokinet. Onion routing protocols allow for users to form tunnels or paths through a distributed network, using multiple nodes as hops to obfuscate the destination and origin of data packets.  

The network does not rely on trusted authorities and its state is fully derived from the blockchain.  Users can connect to individual [Service Nodes](../ServiceNodes/SNOverview.md) and create bidirectional paths for packets to be routed through.  The network can be used to access internally hosted services called [SNApps](../Lokinet/SNApps.md). Users can utilise [Service Nodes](../ServiceNodes/SNOverview.md) [exit functionality](/ServiceNodes/ServiceNodeFunctions/#exit-nodes) to browse the external internet without their IP address being exposed.


## Guides & Resources

| **Guide/Resource**                                                      	| **Description**                                                                             	|
|-------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------	|
| [Lokinet Public Testing Guide](../Lokinet/Guides/PublicTestingGuide.md) 	| Full Lokinet public testing guide.                                                          	|
| [Installation](../Lokinet/Guides/Install.md)                            	| Computer preperation for Lokinet.                                                           	|
| [Accessing SNApps](../Lokinet/Guides/AccessingSNApps.md)                	| How to access SNApps.                                                                       	|
| [Joining a Lokinet IRC](../Lokinet/Guides/LokinetIRC.md)                	| Connect to an IRC chat over Lokinet.                                                        	|
| [Hosting SNApps](../Lokinet/Guides/HostingSNApps.md)                    	| Host your own SNApp/Hidden Service.                                                         	|
| [Route through Exit Node](../Lokinet/Guides/RouteThroughExitNode.md)    	| Route your data through an exit node.                                                       	|
| [LLARP Github](https://github.com/loki-project/loki-network)            	| LLARP (low latency anonymous routing protocol), a layer 3 onion routing protocol.           	|
| [Setting Up A TestNet Relay](../Lokinet/Guides/TestNetRelay.md)         	| How to host a relay on the test network.                                                    	|
| [Lokinet config files](../Lokinet/Guides/LokinetConfig.md)              	| This guide shows the different config files and their associated sections, keys and values. 	|