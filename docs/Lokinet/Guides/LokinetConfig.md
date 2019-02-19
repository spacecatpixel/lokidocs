# Lokinet Config File

## [router]
| Option                	| Defaults                                                                                                            	| Range        	| Description                         	|
|-----------------------	|---------------------------------------------------------------------------------------------------------------------	|--------------	|-------------------------------------	|
| `threads=`            	| 4                                                                                                                   	| 0 -`<#cores>` 	| Number of crypto worker threads     	|
| `contact-file=`       	| Windows: `C:\Users\AppData\Roaming\.lokinet\self.signed`<br></br>Linux:`/home/.lokinet/self.signed`               	| Any filepath 	| Path to store signed RC             	|
| `transport-privkey=`  	| Windows: `C:\Users\AppData\Roaming\.lokinet\transport.private`<br></br>Linux:`/home/.lokinet/transport.private`   	| Any filepath 	| Path to store transport private key 	|
| `ident-privkey=`      	| Windows: `C:\Users\AppData\Roaming\.lokinet\identity.private`<br></br>Linux:`/home/.lokinet/identity.private`     	| Any filepath 	| Path to store identity signing key  	|
| `encryption-privkey=` 	| Windows: `C:\Users\AppData\Roaming\.lokinet\encryption.private`<br></br>Linux:`/home/.lokinet/encryption.private` 	| Any filepath 	| Encryption key for onion routing    	|
| `nickname=`           	| lokinet                                                                                                             	| 32 Byte      	| Nickname set for Router             	|

## [api]

| Option     	| Defaults            	| Range                                                                                                                        	| Description                                                       	|
|------------	|---------------------	|------------------------------------------------------------------------------------------------------------------------------	|-------------------------------------------------------------------	|
| `enabled=` 	| `false`             	| `false`, `true`                                                                                                              	| Enable API calls to daemon                                        	|
| `authkey=` 	| `insertpubkey1here` 	| Not implemented                                                                                                              	| Add API authentication key                                        	|
| `bind=`    	| `127.0.0.1:1190`    	| `0.0.0.0` (only for testing), <br></br>`127.0.0.1:<port>` (loopback), <br></br>Any IP bound to an adapter / interface on the computer 	| The IP a machine can connect to the daemon to parse API calls 	|

## [system]

| Option  	| Defaults 	| Range           	| Description                                                           	|
|---------	|----------	|-----------------	|-----------------------------------------------------------------------	|
| `user`  	| lokinet  	| Not implemented 	| Lokinet to drop privileges to this user after performing root tasks.  	|
| `group` 	| lokinet  	| Not implemented 	| Lokinet to drop privileges to this group after performing root tasks. 	|

## [dns]

| Option      	| Defaults         	| Range                                                                                                                                                                                                                                      	| Description                                                                                                          	|
|-------------	|------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|----------------------------------------------------------------------------------------------------------------------	|
| `upstream=` 	| `1.1.1.1`        	| Any DNS Directory                                                                                                                                                                                                                          	| Resolves clearnet addresses if .loki address is not queried.<br></br>Choose your DNS directory, multiple directories can be added by adding a new line with `upstream=<DNS Directory IP>` 	|
| `bind=`     	| `127.0.0.1:53` 	| Any IP address that is set within resolv.conf file. <br></br>Linux has an exception to the default and must be changed,<br></br>See [lokinet installion](../../../Lokinet/Guides/AccessingSNApps/#2-setting-your-dns) for further details. 	| Resolves lokinet addresses.<br></br>Tells Lokinet where to set up the server to receive lokinet address queries.<br></br> Port should be kept at 53 in most cases.                                          	|

## [netdb]

| Option 	| Defaults                                                                                              	| Range    	| Description                                     	|
|--------	|-------------------------------------------------------------------------------------------------------	|----------	|-------------------------------------------------	|
| `dir=` 	| Windows: `C:\Users\<user>\AppData\Roaming\.lokinet\netdb`<br></br>Linux:`/home/<user>/.lokinet/netdb` 	| filepath 	| Directory for network database skiplist storage 	|


## [bootstrap]

| Option      	| Defaults                                                                                                                    	| Range        	| Description                                                                                                                                                                                                           	|
|-------------	|-----------------------------------------------------------------------------------------------------------------------------	|--------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| `add-node=` 	| Windows: `C:\Users\<user>\AppData\Roaming\.lokinet\bootstrap.signed`<br></br>Linux:`/home/<user>/.lokinet/bootstrap.signed` 	| Any filepath 	| If we don't have any peers to connect to add a bootstrap node's signed identity to the list of nodes we want to bootstrap from.<br></br> Add another bootstrap node by adding another line with `add-node=<filepath>` 	|

## [network]

| Option            	| Defaults                                                                                                                                             	| Range                                 	| Description                                                                                          	|
|-------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------------	|------------------------------------------------------------------------------------------------------	|
| `profiles=`       	| Windows: `C:\Users\<user>\AppData\Roaming\.lokinet\profiles.dat`<br></br>Linux:`/home/<user>/.lokinet/profiles.dat`                                  	| Any filepath                          	| Location to save the log of up-time about routers you connect to.                                    	|
| `strict-connect=` 	| `pubkey`                                                                                                                                             	| Any lokinet relay node pubkey         	| Enforce a strict first hop router with it's pubkey.                                                  	|
| `exit-node=`      	| `pubkey`                                                                                                                                             	| Any lokinet exit node pubkey          	| Enforce a strict exit node with it's pubkey.                                                         	|
| `ifname=`         	| `lokitun0`                                                                                                                                           	| Character limit based on OS           	| Set the interface name of the IP set in the `ifaddr=` in the next line of the config file.           	|
| `ifaddr=`         	| `172.16.10.1/24`                                                                                                                                     	| Any IP can be set that is not in use. 	| Set the IP connected to the interface name set in `ifname=` in the previous line of the config file. 	|
| `keyfile=`        	| Windows: `C:\Users\<user>\AppData\Roaming\.lokinet\example-snap-keyfile.private`<br></br>Linux:`/home/<user>/.lokinet/example-snap-keyfile.private` 	| Any filepath                          	| Set a persistent SNApp by saving the private key into a local file.                                  	|