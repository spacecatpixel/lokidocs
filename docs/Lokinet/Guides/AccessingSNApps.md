#LokiNET SNApps/Hidden Service Setup Guide

The function of SNApps is similar to so-called hidden services in Tor which have flourished. They provide users with a way to interact fully within the mixnet environment, providing an even higher-degree of anonymity than can be achieved when accessing externally hosted content. SNApps allow for users to setup and host marketplaces, forums, whistle-blowing websites, social media, and most other internet applications on their own machines or servers while maintaining full-server and user-side anonymity. This greatly expands the scope of the network and allows users to build meaningful communities within Lokinet.

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

Run the following command in directory `~/loki-network/build`:


`sudo ./lokinet -r`

Change directory to `~/loki-network`

`cd ~/loki-network`

Run the following command:
`sudo ./lokinet-bootstrap`

>The default configuration for lokinet is `lokinet.ini` located at `~/.lokinet/lokinet.ini` (`%APPDATA%\.lokinet\lokinet.ini` on windows).
>
>To enable a SNApps with a long term address, uncomment the line in the `[services]` section in `lokinet.ini` that starts with `example-snapp=`.

Please note that currently node long term SNApps are not currently recommended or supported on windows at this time.

Then run lokinet:

`sudo ./lokinet`

Now that you have `.lokinet` running you can access any SNApps being hosted on the network.

For future reference, if you want to browse lokinet in the future you just need to run `.lokinet` and start browsing.


## Test services
Jump onto a browser such as google chrome or firefox and try and go to the url `7okic5x5do3uh3usttnqz9ek3uuoemdrwzto1hciwim9f947or6y.loki`. If you see a youtube video you are in luck, congratulations, you now have access to the Lokinet.

You can join the lokinet irc network at `7okic5x5do3uh3usttnqz9ek3uuoemdrwzto1hciwim9f947or6y.loki` plaintext port `6667` with your irc client

Active channels:

* `#lokinet`


## Best Practices

// TODO: talk about binding to all interfaces being bad

// TODO: talk about networking namespaces options for linux

## Examples

// TODO: insert secure example here
