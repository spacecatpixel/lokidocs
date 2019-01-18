# Route through Exit Node

## 1. Lokinet Installation

To install Lokinet, see the install guide [here](../../Lokinet/Guides/Install.md).

After the guide is finished you should have installed the dependencies and built Lokinet.

## 2. Lokinet Setup

To setup and run Lokinet, see the accessing SNApps guide [here](../../Lokinet/Guides/AccessingSNApps.md).

After the above guide is finished you should be able to run `lokinet` and be able to access SNApps.

## 3. Route Configuration

To use an exit node as a client, you need to change the `[network]` section in `~/.lokinet/lokinet.ini` 

Use the following command to access your `lokinet.ini` file.

```
nano ~/.lokinet/lokinet.ini
```
Use your arrow keys to to scroll down to the network settings.
```
# network settings 
[network]
profiles=/home/modeify/.lokinet/profiles.dat
# uncomment next line to add router with pubkey to list of routers we connect directly to
#strict-connect=pubkey
# uncomment next line to use router with pubkey as an exit node
#exit-node=pubkey
ifname=lokitun0
ifaddr=172.16.10.1/24
enabled=true
```
Delete the `#` in front of `strict-connect` and `exit-node`.

Replace `pubkey` next to `strict-connect` with one of the following pubkeys, also take note of the IP address attached to the pubkey.

* `8df8ca1cc9d39d381f0efafdf58e2569457675a1e543189bea8279522aee6461` `167.114.185.46`

* `3dcb5a34d015a7bbb4636be83991e00cbeff13fe7834e0d5452ffe9a5af5a5be` `162.243.164.223`

Next replace `pubkey` next to `exit-node` with the following pubkey:

* `b61df944b8547af56201c6c7528ed86289566dcf73358c5ef8e3b4e628671399`

Your network settings section should now look like the following:

```
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
```
Hold `Ctrl` and click `x`, the terminal will prompt you to confirm changes. Click `y` and then `enter` to continue.

This sets our computer to use an exit node by its public identity key and sets a strict first hop by its public identity key. Setting a strict first allows for the routing table to be set up easily.

## 4. Finding your Default Gateway

On linux, run the following command:

`ip route | grep default`

The IP address shown is your default gateway, for our example our IP is `10.0.2.2`.

## 5. Set up Routes

In the following example the first hop is `162.243.164.223` which is connected to the pubkey `3dcb5a34d015a7bbb4636be83991e00cbeff13fe7834e0d5452ffe9a5af5a5be`. 

If you used a different pubkey as your first hop you must replace the IP address in the example with the one associated with it.

To route everything through a Lokinet Exit Node run the following command. Replacing `<first hop>` with your first hop IP address and `<default gateway>` with your default gateway.
```
sudo ip route add <first hop> via <default gateway>
```
For this example the command is:
```
sudo ip route add 162.243.164.223 via 10.0.2.2
```
Next run the following command to remove your default:
```
sudo ip route del default
```
At this point make sure you are running `lokinet`, you should have `lokinet` running from [section 2](#2-lokinet-setup).

While `lokinet` is running open up a new terminal and run the following command:
```
sudo ip route add default dev lokitun0
```

---

If you want to unset the route everything over lokinet route do the following as root:

`sudo ip route del default`

`sudo ip route add default via <default gateway>`

---

Now when you browse the internet your IP address will be obfuscated. Go to a "where is my location" website to see if your IP appears to be in Romania.

## Finish

Well done, you have finished the guide. Jump back into the [Lokinet Public Testing Guide here](../PublicTestingGuide/#1-lokinet-installation).