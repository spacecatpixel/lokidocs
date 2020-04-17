title: Loki Documentation | Lokinet Overview | Onion Router
description: Lokinet is a unique, blockchain enforced and incentivized onion router, where you can browse the internet anonymously, visit and host private websites all without exposing your identity or IP address.

#Lokinet Overview

[Service Nodes](../ServiceNodes/SNOverview.md) on the Loki network will operate a [low latency onion routing protocol](../Lokinet/LLARP.md), forming a fully decentralised overlay network, called Lokinet. Onion routing protocols allow for users to form tunnels or paths through a distributed network, using multiple nodes as hops to obfuscate the destination and origin of data packets.  

The network does not rely on trusted authorities and its state is fully derived from the blockchain.  Users can connect to individual [Service Nodes](../ServiceNodes/SNOverview.md) and create bidirectional paths for packets to be routed through.  The network can be used to access internally hosted services called [SNApps](../Lokinet/SNApps.md). Users can utilise [Service Nodes](../ServiceNodes/SNOverview.md) [exit functionality](/ServiceNodes/ServiceNodeFunctions/#exit-nodes) to browse the external internet without their IP address being exposed.


## Guides & Resources

| **Guide/Resource**                                                      	| **Description**                                                                             	|
|-------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------	|
| [Lokinet Gui Guide](../Lokinet/Guides/LokinetGuiGuide.md)                 | Easiest way to access Lokinet and SNApps.                                                     |
| [Anonymous Reverse SSH Guide](../Lokinet/Guides/ReverseSSHGuide.md)       | Simple and easy way to SSH into a VPS through lokinet.                                        |
| [Lokinet Public Testing Guide](../Lokinet/Guides/PublicTestingGuide.md) 	| Full Lokinet public testing guide.                                                          	|
| [Linux Setup Guide](../Lokinet/Guides/lokinet-linux-guide.md)             | Linux preperation for accessing Lokinet.                                                      |
| [Linux - Build it yourself](../Lokinet/Guides/Install.md)                 | How to build Lokinet from source.                                                             |
| [Accessing SNApps](../Lokinet/Guides/AccessingSNApps.md)                	| How to access SNApps.                                                                       	|
| [Joining a Lokinet IRC](../Lokinet/Guides/LokinetIRC.md)                	| Connect to an IRC chat over Lokinet.                                                        	|
| [Hosting SNApps](../Lokinet/Guides/HostingSNApps.md)                    	| Host your own SNApp/Hidden Service.                                                         	|
| [LLARP Github](https://github.com/loki-project/loki-network)            	| LLARP (low latency anonymous routing protocol), a layer 3 onion routing protocol.           	|
| [Setting up a Lokinet Router/Relay](../Lokinet/Guides/LokinetRouter.md)   | How to host a relay on the test network.                                                    	|
| [Lokinet config files](../Lokinet/Guides/LokinetConfig.md)              	| This guide shows the different config files and their associated sections, keys and values. 	|