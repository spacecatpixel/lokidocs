title: Loki Documentation | How to access hidden services or Lokinet SNApps.
description: The function of SNApps is similar to so-called hidden services in Tor which have flourished. They provide users with a way to interact fully within the onion router environment, providing an even higher-degree of anonymity than can be achieved when accessing externally hosted content.

# LokiNET SNApps/ Hidden Service Setup Guide

The function of [SNApps](../SNApps.md) is similar to so-called hidden services in Tor which have flourished. They provide users with a way to interact fully within the onion router environment, providing an even higher-degree of anonymity than can be achieved when accessing externally hosted content. SNApps allow for users to setup and host marketplaces, forums, whistle-blowing websites, social media, and most other internet applications on their own machines or servers while maintaining full-server and user-side anonymity. This greatly expands the scope of the network and allows users to build meaningful communities within [Lokinet](../../LokinetOverview/).

SNApp operators use the traditional server-client model with the key difference being that [Service Nodes](../../ServiceNodes/SNOverview.md) will be intermediaries in a users connection through Lokinet. When a SNApp wishes to register on the network, it must update the DHT with its descriptor. This descriptor contains various introducers, which are specific Service Nodes that users can contact to form a path to the SNApp. When these paths are set up, users can connect to the SNApp without either party knowing where the other is located in the network.

## 1. Installing

To install lokinet, see the install guide [here](../../Lokinet/Guides/lokinet-linux-guide.md).

## 2. Test services
Jump onto a browser such as google chrome or firefox and try and go to one of the following SNApps:

- Lokinet Wiki [http://dw68y1xhptqbhcm5s8aaaip6dbopykagig5q5u1za4c7pzxto77y.loki/wiki/](http://dw68y1xhptqbhcm5s8aaaip6dbopykagig5q5u1za4c7pzxto77y.loki/wiki/)

Congratulations, you now have access to the Lokinet.

## Finish

Well done, you have finished the guide. Jump back into the [Lokinet Public Testing Guide here](../PublicTestingGuide/#3-joining-a-lokinet-irc-chat).
