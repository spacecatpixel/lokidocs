title: Loki Documentation | How to access hidden services or Lokinet SNApps.
description: The function of SNApps is similar to so-called hidden services in Tor which have flourished. They provide users with a way to interact fully within the mixnet environment, providing an even higher-degree of anonymity than can be achieved when accessing externally hosted content.

# LokiNET SNApps/ Hidden Service Setup Guide

The function of [SNApps](../SNApps.md) is similar to so-called hidden services in Tor which have flourished. They provide users with a way to interact fully within the mixnet environment, providing an even higher-degree of anonymity than can be achieved when accessing externally hosted content. SNApps allow for users to setup and host marketplaces, forums, whistle-blowing websites, social media, and most other internet applications on their own machines or servers while maintaining full-server and user-side anonymity. This greatly expands the scope of the network and allows users to build meaningful communities within [Lokinet](../../LokinetOverview/).

SNApp operators use the traditional server-client model with the key difference being that [Service Nodes](../../ServiceNodes/SNOverview.md) will be intermediaries in a users connection through Lokinet. When a SNApp wishes to register on the network, it must update the DHT with its descriptor. This descriptor contains various introducers, which are specific Service Nodes that users can contact to form a path to the SNApp. When these paths are set up, users can connect to the SNApp without either party knowing where the other is located in the network.

## 1. Installing

To install lokinet, see the install guide [here](../../Lokinet/Guides/lokinet-linux-guide.md).

## 2. Test services
Jump onto a browser such as google chrome or firefox and try and go to one of the following SNApps:

- Block Explorer: [http://fyb983qpni4bp6nrm98skn33kr1robe979jb8wncxrewfy1rrtzo.loki/](http://fyb983qpni4bp6nrm98skn33kr1robe979jb8wncxrewfy1rrtzo.loki/)

- Lokinet Wiki: [http://icxqqcpd3sfkjbqifn53h7rmusqa1fyxwqyfrrcgkd37xcikwa7y.loki/wiki](http://icxqqcpd3sfkjbqifn53h7rmusqa1fyxwqyfrrcgkd37xcikwa7y.loki/wiki)

- [http://zqkddypocxnu3r53ddy6hkogcdi1xz6kcitjjsh483jom336wo5y.loki/](http://zqkddypocxnu3r53ddy6hkogcdi1xz6kcitjjsh483jom336wo5y.loki/)

- Test for Photos: [http://rxudcygaj7gzqgigyrtti97g4wwaftqe9rd3s6pmu3wby7gxwcbo.loki/photos](http://rxudcygaj7gzqgigyrtti97g4wwaftqe9rd3s6pmu3wby7gxwcbo.loki/photos)

Congratulations, you now have access to the Lokinet.

## Finish

Well done, you have finished the guide. Jump back into the [Lokinet Public Testing Guide here](../PublicTestingGuide/#3-joining-a-lokinet-irc-chat).
