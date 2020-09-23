# How to set up free, anonymous reverse SSH 

Have you ever wanted to be able to access a computer behind a firewall or NAT, but didn't want to pay for (or set up) a complicated reverse SSH proxy? Have you ever wanted to set up your VPS or virtual machine so that you can access it anonymously via SSH?  

Lokinet lets you accomplish both these goals simultaneously. This guide will walk you through the process.

## Step 1 - Install Lokinet on the computer you want to SSH into (the ‘host’)

>> Note: This guide currently covers Linux operating systems, but we will add macOS instructions soon. 

Install `curl` if you don’t have it already (this will let us download and verify Lokinet):

```
sudo apt install curl
```

Add the Lokinet debian repo GPG Keys:

```
curl -s https://deb.imaginary.stream/public.gpg | sudo apt-key add -
```

Confirm which release you need to download:

```
echo "deb https://deb.imaginary.stream $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/imaginary.stream.list
```

Resync your package repositories:

```
sudo apt update
```

Install Lokinet:

```
sudo apt install lokinet
```

Make your .loki address static:

```
sudo nano /etc/loki/lokinet.ini
```

Scroll to the bottom of the file in the [Network] section and add the following line: 

```
keyfile=/var/lib/lokinet/snappkey.private 
```

Restart Lokinet: 

```
sudo systemctl restart lokinet
```

## Step 2 - Get your .loki address 
Get your Lokinet address by running the following command. Once you run the command, look for an address in a format similar to m7zy3dpi1dyui91enond31a6acgd538934k6kpasati4yfrku5oy.loki (this will be your .loki address). 

```
dig @127.3.2.1 -t cname localhost.loki
```

## Step 3. Configure the computer you want to access your machine from (the ‘client’)

On the client computer, download a [Lokinet client from here](https://github.com/loki-project/loki-network/releases).

Once you have downloaded, launch the client, press the big green button, and Lokinet will start intercepting requests to .loki addresses

## Step 4 - Connect with your favourite SSH client 
Open your SSH client (any SSH client should do fine; I’m using Putty for demonstration purposes) and enter the .loki address instead of the IP address/hostname. You should connect anonymously, bypassing NAT and firewalls.  

![lokinet-gui](../../assets/ReverseSSH.PNG)

## What’s going on behind the scenes? 

When you install Lokinet on the host computer, Lokinet creates a type of multi-hop tunnel to a number of nodes in the Loki Service Node network. Functionally, this is very similar to how Tor hidden services work, except instead of getting a .onion address, you get a .loki address. 

On the SSH client side, when you enter the .loki address and start the connection process, your Lokinet client intercepts the DNS call to your system resolver and uses Lokinet to construct a DHT lookup for that .loki address. Once Lokinet finds the right introset, it creates a path from itself to the host computer’s endpoint, represented as D in the diagram below: 

Client -> A -> B -> C -> D <- E <- F <-G <- Host  

Once a client is communicating with D successfully over Lokinet, all SSH commands follow this path back to the host. Anonymity is maintained on both client and server sides: both the SSH host’s IP address and the client’s IP address are kept secret at all times.

Lokinet is a powerful tool for traversing NAT and firewalls, and for maintaining anonymity when connecting to remote servers. Because Lokinet operates on Layer 3 (the network layer) — instead of Layer 4 (the transport Layer) like Tor — Lokinet can carry any IP based protocol, including UDP, TCP and ICMP packets. 

