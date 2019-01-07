#LokiNET SNApps/Hidden Service Setup Guide

The function of [SNApps](../SNApps.md) is similar to so-called hidden services in Tor which have flourished. They provide users with a way to interact fully within the mixnet environment, providing an even higher-degree of anonymity than can be achieved when accessing externally hosted content. SNApps allow for users to setup and host marketplaces, forums, whistle-blowing websites, social media, and most other internet applications on their own machines or servers while maintaining full-server and user-side anonymity. This greatly expands the scope of the network and allows users to build meaningful communities within [Lokinet](../../LokinetOverview/).

SNApp operators use the traditional server-client model with the key difference being that [Service Nodes](../../ServiceNodes/SNOverview.md) will be intermediaries in a users connection through Lokinet. When a SNApp wishes to register on the network, it must update the DHT with its descriptor. This descriptor contains various introducers, which are specific Service Nodes that users can contact to form a path to the SNApp. When these paths are set up, users can connect to the SNApp without either party knowing where the other is located in the network.

## Installing

To install lokinet, see the install guide [here](../../Lokinet/Guides/Install.md).

## DNS
Next we need to edit our resolv.conf files and add our dns resolver.

Run the following command: 

`sudo nano /etc/resolvconf/resolv.conf.d/head`

Add the following at the bottom of this file:

`nameserver 127.3.2.1`

Once that line is added hold CTRL and click x. 
Click enter to confirm the file changes.

Next we need to update our /etc/resolv.conf file by running the command:

`sudo resolvconf -u`

## Setup

**DO NOT RUN LOKINET AS ROOT**

For the first time setup, you need to generate a config and obtain bootstrap information.

`lokinet -g && lokinet-bootstrap`

>The default configuration for lokinet is `lokinet.ini` located at `~/.lokinet/lokinet.ini` (`%APPDATA%\.lokinet\lokinet.ini` on windows).
>
>To enable a SNApps with a long term address, add `keyfile=/path/to/keyfile.private` to `[network]` section in `lokinet.ini` .

Then run lokinet in foreground:

`lokinet`

For future reference, after generating initial configuration you just need to run `lokinet` and start browsing.


## Test services
Jump onto a browser such as google chrome or firefox and try and go to the url `7okic5x5do3uh3usttnqz9ek3uuoemdrwzto1hciwim9f947or6y.loki`. If you see a youtube video you are in luck, congratulations, you now have access to the Lokinet.

## Finish

Well done, you have finished the guide. Jump back into the [Lokinet Public Testing Guide here](../PublicTestingGuide/#1-lokinet-installation).


## Best Practices

// TODO: talk about binding to all interfaces being bad

// TODO: talk about networking namespaces options for linux

## Examples

// TODO: insert secure example here
