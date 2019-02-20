# Lokinet config files

This guide shows the different config files and their associated sections, keys and values.

##Table of contents:

- [lokinet.ini](#lokinetini)
     - [Example lokinet.ini files](#example-lokinetini-files)
     - [[router]](#router)
     - [[api]](#api)
     - [[system]](#system)
     - [[dns]](#dns)
     - [[netdb]](#netdb)
     - [[bootstrap]](#bootstrap)
     - [[network]](#network)
     - [[bind]](#bind)
     - [[services]](#services)

- [service.ini](#ltfilenamegtini)
	 - [Example service.ini files](#example-lokinetini-files_1)
	 - [[`<any_string>`]](#ltany_stringgt)

## lokinet.ini

### Example lokinet.ini files

#### Windows
<details>
  <summary>Expand for Windows example</summary>

Default file location: `C:\Users\Username\AppData\Roaming\.lokinet\lokinet.ini`
```
# this configuration was auto generated with 'sane' defaults
# change these values as desired

[router]
# number of crypto worker threads 
threads=4
# path to store signed RC
contact-file=C:\Users\Goose\AppData\Roaming\.lokinet\self.signed
# path to store transport private key
transport-privkey=C:\Users\Goose\AppData\Roaming\.lokinet\transport.private
# path to store identity signing key
ident-privkey=C:\Users\Goose\AppData\Roaming\.lokinet\identity.private
# encryption key for onion routing
encryption-privkey=C:\Users\Goose\AppData\Roaming\.lokinet\encryption.private
# uncomment following line to set router nickname to 'lokinet'
# nickname=lokinet

# admin api (disabled by default)
[api]
enabled=false
# authkey=insertpubkey1here
# authkey=insertpubkey2here
# authkey=insertpubkey3here
bind=127.0.0.1:1190

# system settings for priviledges and such
[system]
# user=lokinet
# group=lokinet

# dns provider configuration section
[dns]
# CloudFare + APNIC DNS Resolver
upstream=1.1.1.1
# Google DNS resolver
upstream=8.8.8.8
bind=127.0.0.1:53

# network database settings block 
[netdb]
# directory for network database skiplist storage
dir=C:\Users\Goose\AppData\Roaming\.lokinet\netdb

# bootstrap settings
[bootstrap]
# add a bootstrap node's signed identity to the list of nodes we want to bootstrap from
# if we don't have any peers we connect to this router
add-node=C:\Users\Goose\AppData\Roaming\.lokinet\bootstrap.signed
# add another bootstrap node
#add-node=/path/to/alternative/self.signed

# network settings 
[network]
profiles=C:\Users\Goose\AppData\Roaming\.lokinet\profiles.dat
# uncomment next line to add router with pubkey to list of routers we connect directly to
#strict-connect=pubkey
# uncomment next line to use router with pubkey as an exit node
#exit-node=pubkey
ifname=lokitun0
ifaddr=172.16.10.1/24
enabled=true
# Store the keyfile of your snapp in specified location.
# This enforces the same .loki address when serving a SNApp.
keyfile=C:\Users\Goose\AppData\Roaming\.lokinet\example-snap-keyfile.private
```
</details>

#### Linux
<details>
  <summary>Expand for Linux example</summary>
Default file location: `/home/username/.lokinet/lokinet.ini`

```
# this configuration was auto generated with 'sane' defaults
# change these values as desired

[router]
# number of crypto worker threads 
threads=4
# path to store signed RC
contact-file=/home/goose/.lokinet/self.signed
# path to store transport private key
transport-privkey=/home/goose/.lokinet/transport.private
# path to store identity signing key
ident-privkey=/home/goose/.lokinet/identity.private
# encryption key for onion routing
encryption-privkey=/home/goose/.lokinet/encryption.private
# uncomment following line to set router nickname to 'lokinet'
# nickname=lokinet

# admin api (disabled by default)
[api]
enabled=false
# authkey=insertpubkey1here
# authkey=insertpubkey2here
# authkey=insertpubkey3here
bind=127.0.0.1:1190

# system settings for priviledges and such
[system]
user=lokinet
group=lokinet

# dns provider configuration section
[dns]
# resolver
upstream=1.1.1.1
bind=127.3.2.1:53

# network database settings block 
[netdb]
# directory for network database skiplist storage
dir=/home/goose/.lokinet/netdb

# bootstrap settings
[bootstrap]
# add a bootstrap node's signed identity to the list of nodes we want to bootstrap from
# if we don't have any peers we connect to this router
add-node=/home/goose/.lokinet/bootstrap.signed
# add another bootstrap node
#add-node=/path/to/alternative/self.signed

# snapps configuration section
[services]
#uncomment next line to load a service.ini file.
#example-snapp=/home/goose/.lokinet/snapp-example.ini

# network settings 
[network]
profiles=/home/modeify/.lokinet/profiles.dat
# uncomment next line to add router with pubkey to list of routers we connect d$
strict-connect=3dcb5a34d015a7bbb4636be83991e00cbeff13fe7834e0d5452ffe9a5af5a5be
# uncomment next line to use router with pubkey as an exit node
exit-node=b61df944b8547af56201c6c7528ed86289566dcf73358c5ef8e3b4e628671399
ifname=lokitun0
ifaddr=172.16.10.1/24
enabled=true
#Store the keyfile of your snapp in specified location.
#This enforces the same .loki address when serving a SNApp.
keyfile=/home/<user>/.lokinet/example-snap-keyfile.private
```
</details>

### [router]

| Key                	| Defaults                                                                                                            	| Range        	| Description                         	|
|-----------------------	|---------------------------------------------------------------------------------------------------------------------	|--------------	|-------------------------------------	|
| `threads=`            	| 4                                                                                                                   	| 0 -`<#cores>` | Number of crypto worker threads     	|
| `contact-file=`       	| Windows: `C:\Users\AppData\Roaming\.lokinet\self.signed`<br></br>Linux:`/home/.lokinet/self.signed`               	| Any filepath 	| Path to store signed RC             	|
| `transport-privkey=`  	| Windows: `C:\Users\AppData\Roaming\.lokinet\transport.private`<br></br>Linux:`/home/.lokinet/transport.private`   	| Any filepath 	| Path to store transport private key 	|
| `ident-privkey=`      	| Windows: `C:\Users\AppData\Roaming\.lokinet\identity.private`<br></br>Linux:`/home/.lokinet/identity.private`     	| Any filepath 	| Path to store identity signing key  	|
| `encryption-privkey=` 	| Windows: `C:\Users\AppData\Roaming\.lokinet\encryption.private`<br></br>Linux:`/home/.lokinet/encryption.private` 	| Any filepath 	| Encryption key for onion routing    	|
| `nickname=`           	| lokinet                                                                                                             	| 32 Byte      	| Nickname set for Router             	|

### [api]

| Key     	| Defaults            	| Range                                                                                                                        	| Description                                                       	|
|------------	|---------------------	|------------------------------------------------------------------------------------------------------------------------------	|-------------------------------------------------------------------	|
| `enabled=` 	| `false`             	| `false`, `true`                                                                                                              	| Enable API calls to daemon                                        	|
| `authkey=` 	| `insertpubkey1here` 	| Not implemented                                                                                                              	| Add API authentication key                                        	|
| `bind=`    	| `127.0.0.1:1190`    	| `0.0.0.0` (only for testing), <br></br>`127.0.0.1:<port>` (loopback), <br></br>Any IP bound to an adapter / interface on the computer 	| The IP a machine can connect to the daemon to parse API calls 	|

### [system]

| Key  	| Defaults 	| Range           	| Description                                                           	|
|---------	|----------	|-----------------	|-----------------------------------------------------------------------	|
| `user`  	| lokinet  	| Not implemented 	| Lokinet to drop privileges to this user after performing root tasks.  	|
| `group` 	| lokinet  	| Not implemented 	| Lokinet to drop privileges to this group after performing root tasks. 	|

### [dns]

| Key      	| Defaults         	| Range                                                                                                                                                                                                                                      	| Description                                                                                                          	|
|-------------	|------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|----------------------------------------------------------------------------------------------------------------------	|
| `upstream=` 	| `1.1.1.1`        	| Any DNS Directory                                                                                                                                                                                                                          	| Resolves clearnet addresses if .loki address is not queried.<br></br>Choose your DNS directory, multiple directories can be added by adding a new line with `upstream=<DNS Directory IP>` 	|
| `bind=`     	| `127.0.0.1:53` 	| Any IP address that is set within resolv.conf file. <br></br>Linux has an exception to the default and must be changed,<br></br>See [lokinet installion](../../../Lokinet/Guides/AccessingSNApps/#2-setting-your-dns) for further details. 	| Resolves lokinet addresses.<br></br>Tells Lokinet where to set up the server to receive lokinet address queries.<br></br> Port should be kept at 53 in most cases.                                          	|

### [netdb]

| Key 	| Defaults                                                                                              	| Range    	| Description                                     	|
|--------	|-------------------------------------------------------------------------------------------------------	|----------	|-------------------------------------------------	|
| `dir=` 	| Windows: `C:\Users\<user>\AppData\Roaming\.lokinet\netdb`<br></br>Linux:`/home/<user>/.lokinet/netdb` 	| filepath 	| Directory for network database skiplist storage 	|


### [bootstrap]

| Key      	| Defaults                                                                                                                    	| Range        	| Description                                                                                                                                                                                                           	|
|-------------	|-----------------------------------------------------------------------------------------------------------------------------	|--------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| `add-node=` 	| Windows: `C:\Users\<user>\AppData\Roaming\.lokinet\bootstrap.signed`<br></br>Linux:`/home/<user>/.lokinet/bootstrap.signed` 	| Any filepath 	| If we don't have any peers to connect to add a bootstrap node's signed identity to the list of nodes we want to bootstrap from.<br></br> Add another bootstrap node by adding another line with `add-node=<filepath>` 	|

### [network]

| Key            	| Defaults                                                                                                                                             	| Range                                 	| Description                                                                                          	|
|-------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------------	|------------------------------------------------------------------------------------------------------	|
| `profiles=`       	| Windows: `C:\Users\<user>\AppData\Roaming\.lokinet\profiles.dat`<br></br>Linux:`/home/<user>/.lokinet/profiles.dat`                                  	| Any filepath                          	| Location to save the log of up-time about routers you connect to.                                    	|
| `strict-connect=` 	| `pubkey`                                                                                                                                             	| Any lokinet relay node pubkey         	| Enforce a strict first hop router with it's pubkey.                                                  	|
| `exit-node=`      	| `pubkey`                                                                                                                                             	| Any lokinet exit node pubkey          	| Enforce a strict exit node with it's pubkey.                                                         	|
| `ifname=`         	| `lokitun0`                                                                                                                                           	| Character limit based on OS           	| Set the interface name of the IP set in the `ifaddr=` in the next line of the config file.           	|
| `ifaddr=`         	| `172.16.10.1/24`                                                                                                                                     	| Any IP can be set that is not in use. 	| Set the IP connected to the interface name set in `ifname=` in the previous line of the config file. 	|
| `keyfile=`        	| Windows: `C:\Users\<user>\AppData\Roaming\.lokinet\example-snap-keyfile.private`<br></br>Linux:`/home/<user>/.lokinet/example-snap-keyfile.private` 	| Any filepath                          	| Set a persistent SNApp by saving the private key into a local file.                                  	|
| `enabled=`            | True                                                                                                                                                  | True, False                               | Enable this network section  |

### [bind]
| Key                      	| Defaults 	| Range                              	| Description                                                           	|
|-----------------------------	|----------	|------------------------------------	|-----------------------------------------------------------------------	|
| `<network_interface_name>=` 	| 1090     	| `<port>` you listen on that adapter. 	| ROUTERS ONLY: publish network interfaces for handling inbound traffic<br></br> Example: `eth0=1090` 	|

### [services]
| Key    	| Defaults                                                                                                                  	| Range        	| Description                                                                                 	|
|-----------	|---------------------------------------------------------------------------------------------------------------------------	|--------------	|---------------------------------------------------------------------------------------------	|
| `<name>=` 	| Windows: `C:\Users\<user>\AppData\Roaming\.lokinet\service.ini`<br></br>Linux: `/home/<user>/.lokinet/service.ini` 	| Any filepath 	| Load services file.<br></br>Can run multiple lines of this Key to run multiple services.<br></br> See [service.ini](#ltfilenamegtini) for more details. 	|

## service.ini

> The service.ini is being pulled from the [services] section of `lokinet.ini`.

> The section title can be anything for example: [any_string]

### Example service.ini files

#### Windows
<details>
  <summary>Expand for Windows example</summary>
Default file location: `Path is set within your lokinet.ini file`

```
# this is an example configuration for a snapp

[example-snapp]
# keyfile is the path to the private key of the snapp
keyfile=C:\Users\Username\AppData\Roaming\.lokinet\example-snap-keyfile.private

# ifaddr is the ip range to allocate to this snapp
ifaddr=10.55.0.0/16

# ifname is the name to try and give to the network interface this snap owns
ifname=snapp-tun0
```
</details>

#### Linux
<details>
  <summary>Expand for Linux example</summary>
Default file location: `Path is set within your lokinet.ini file`

```
# this is an example configuration for a snapp

[example-snapp]
# keyfile is the path to the private key of the snapp
keyfile=/home/goose/.lokinet/example-snap-keyfile.private

# ifaddr is the ip range to allocate to this snapp
ifaddr=10.55.0.0/16

# ifname is the name to try and give to the network interface this snap owns
ifname=snapp-tun0
```
</details>

### [`any_string`]

| Key          	| Defaults                                                                                                                               	| Range                                                                                                                                                     	| Description                                                                                                                                                                    	|
|-----------------	|----------------------------------------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| `profiles= `      	| Windows: `C:\Users\<user>\AppData\Roaming\.lokinet\profiles.dat`<br></br>Linux: `/home/<user>/.lokinet/profiles.dat`                                 	| Any filepath                                                                                                                                              	| Location to save the log of up-time about routers you connect to.                                                                                                              	|
| `strict-connect= `	| pubkey                                                                                                                                 	| Any lokinet relay node pubkey                                                                                                                             	| Enforce a strict first hop router with it's pubkey.                                                                                                                            	|
| `exit-node= `     	| pubkey                                                                                                                                 	| Any lokinet exit node pubkey                                                                                                                              	| Enforce a strict exit node with it's pubkey.                                                                                                                                   	|
| `ifname= `        	| lokitun0                                                                                                                               	| Character limit based on OS                                                                                                                               	| Set the interface name of the IP set in the `ifaddr=` in the next line of the config file.                                                                                       	|
| `ifaddr= `        	| 172.16.10.1/24                                                                                                                         	| Any IP can be set that is not in use.                                                                                                                     	| Set the IP connected to the interface name set in ifname= in the previous line of the config file.                                                                             	|
| `keyfile=`        	| Windows: `C:\Users\<user>\AppData\Roaming\.lokinet\example-snap-keyfile.private`<br></br>Linux: `/home/<user>/.lokinet/example-snap-keyfile.private` 	| Any filepath                                                                                                                                              	| Set a persistent SNApp by saving the private key into a local file.                                                                                                            	|
| `upstream= `      	| 1.1.1.1                                                                                                                                	| Any DNS Directory                                                                                                                                         	| Resolves clearnet addresses if .loki address is not queried.<br></br>Choose your DNS directory, <br></br>multiple directories can be added by adding a new line with `upstream=<DNS Directory IP>` 	|
| `bind= `          	| 127.0.0.1:53                                                                                                                           	| Any IP address that is set within resolv.conf file.<br></br> Linux has an exception to the default and must be changed, See [lokinet installion](../../../Lokinet/Guides/AccessingSNApps/#2-setting-your-dns) for further details. 	| Resolves lokinet addresses.<br></br>Tells Lokinet where to set up the server to receive lokinet address queries.<br></br>Port should be kept at 53 in most cases.                                	|
| `enabled=`            | True                                                                                                                                                  | True, False                               | Enable this network section  |