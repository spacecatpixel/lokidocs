title: Loki Documentation | Service Node Applications | SNApps
description: The function of SNApps is similar to so-called hidden services in Tor which have flourished. SNApp operators use the traditional server-client model with the key difference being that Service Nodes will be intermediaries in a users connection through Lokinet.

# SNApps

The function of SNApps is similar to so-called hidden services in Tor which have flourished. They provide users with a way to interact fully within the onion router environment, providing an even higher-degree of anonymity than can be achieved when accessing externally hosted content.  SNApps allow for users to setup and host marketplaces, forums, whistle-blowing websites, social media, and most other internet applications on their own machines or servers while maintaining full-server and user-side anonymity.  This greatly expands the scope of the network and allows users to build meaningful communities within Lokinet.

SNApp operators use the traditional server-client model with the key difference being that [Service Nodes](../ServiceNodes/SNOverview.md) will be intermediaries in a users connection through Lokinet.  When a SNApp wishes to register on the network, it must update the DHT with its descriptor.  This descriptor contains various introducers, which are specific Service Nodes that users can contact to form a path to the SNApp.  When these paths are set up, users can connect to the SNApp without either party knowing where the other is located in the network.

## Guides & Resources

| **Guide/Resource**                                                      	| **Description**                                                                             	|
|-------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------	|
| [Accessing SNApps](../Lokinet/Guides/AccessingSNApps.md)                	| How to access SNApps.                                                                       	|
| [Setting Up a Lokinet Router/Relay](../Lokinet/Guides/LokinetRouter.md)         	| How to host a relay on the test network.                                                    	|
| [Joining a Lokinet IRC](../Lokinet/Guides/LokinetIRC.md)                	| Connect to an IRC chat over Lokinet.                                                        	|
| [Hosting SNApps](../Lokinet/Guides/HostingSNApps.md)                    	| Host your own SNApp/Hidden Service.                                                         	|
| [LLARP Github](https://github.com/loki-project/loki-network)            	| LLARP (low latency anonymous routing protocol), a layer 3 onion routing protocol.           	|
| [Lokinet config files](../Lokinet/Guides/LokinetConfig.md)              	| This guide shows the different config files and their associated sections, keys and values. 	|