# Full Guide on Service Nodes

This document will tell you exactly how to set up and operate a Service Node for the Loki Project. This document was written with non-developers in mind, so people new to linux or command line operations should be able to follow along without any trouble. Also available is a video guide, which provides a more simplified version of the written guide, it can be viewed [here](https://youtu.be/6uiRD1847UY).

<iframe width="560" height="315" src="https://www.youtube.com/embed/6uiRD1847UY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

If you feel confident around servers and the CLI, then skip to the [Express Setup Guide](#express-setup-guide)

You can of course run the Loki software on any operating system that you can get it to build on, but for the purposes of this document, the instructions apply to running a Service Node on a remote Ubuntu 16.04 server. If that isn’t what you want to do, syntax and server set up will of course differ according to whatever OS you choose to run your Service Node from.

### Summary of Loki Service Node Requirements

Full summary of Loki Service Node Requirements. This may change depending on Service Node functionality, so you should check here regularly, or follow our [telegram](https://t.me/LokiCommunity)/[discord](https://discord.gg/DN72VN) announcements channel. 

|Spec|Note|
|---|---|
|Latest Binary|[loki-linux-x64-1.0.3](https://github.com/loki-project/loki/releases/latest)|
|Software| Ubuntu 16.04|
|Memory | 30-50gb|
|Ram | 2-4 gb|


## Table of Contents
- [Overview of Service Nodes](#Overview)
- [New User Guide](#new-user-guide)
    - Step 1 [Server](#step-1-get-a-server)
    - Step 2 [Server Prep](#step-2-prepare-your-server)
    - Step 3 [Download Binaries](#step-3-download-the-loki-binaries)
    - Step 4 [Run the Loki Daemon](#step-4-run-the-service-node-daemon)
    - Step 5 [Open a Loki Wallet](#step-5-getopen-a-wallet)
    - Step 6 [Register Node](#step-6-service-node-registration)
    - Step 7 [Check Registration](#step-7-service-node-check)
- [Express Setup Guide](#express-setup-guide)
- [Additional Functions](#additional-functions)



## Overview

To understand what a Service Node is, you can refer to the [whitepaper](https://loki.network/whitepaper) to get an in depth understanding. For now, all you need to know is that:

-   Service Nodes are full nodes on the Loki network
-   Full nodes become Service Nodes when the owner [locks the required amount of Loki](StakingRequirement.md) for 30 days (2 days on testnet) and submits a registration transaction
    
-   Once accepted by the network, the Service Node is eligible to win block rewards
    
-   Multiple participants can be involved in one Service Node and can have the reward automatically distributed

It is also worth noting that Service Nodes are quite basic at the moment, and operators will need to stay up to date with new updates to keep in line with software and hardware requirements. Once all of the updates are out, Service Nodes will also:

-   Route end user’s internet traffic, either as an exit node or relay in a novel mixnet
    
-   Receive, store and forward encrypted user messages
    
-   Monitor other Service Nodes and vote on their performance
    
-   Be called into quorums which give them authority over instant transactions ([Blink](../Lokinet/Blink.md))
    
-   Act as remote nodes for users

Once these features come out, Service Node operation will require better servers, particularly when it comes to bandwidth. For the purposes of this guide, however, we will only consider the current requirements.

## New User Guide
This section of this guide is for new users to servers and the CLI interface. 

### Step 1 - Get a Server

Righto! Let’s get started. Choosing where to set up a Service Node is the biggest choice you will make when running a Service Node. There are a number of things to consider. Because you will be locking up funds for 30 days (2 days for testnet) at a time, you will want to ensure that your server has:

-   A stable, relatively fast connection to be able to respond to ping requests to avoid being booted off the network
    
-   We recommend 2GB of RAM to cope with running the software reliably (*Note: This requirement may be much greater once services are live*). 1GB is fine for testing.

-   At Least a 20GB SSD or Hard disk drive, this will be used to store the blockchain (*Note: to future proof yourself against blockchain growth and message storage we recommend a 30 - 40 GB drive*)
    
-   A stable power supply. If your server goes down during the staking period, you may get kicked off the network, and not receive rewards while your funds are still locked for the remainder of the staking period.

For most users, we assume that your home internet connection is relatively slow (< 4MB/s down and up) and probably lacks support for external connections. If this is the case, you will probably not want to run a Service Node from your home in the long term, as this could cost you if and when you get booted off. Since we’re just testing at the moment, you could run it from home anyway, but for this guide we’ll avoid it.

Typically, the easiest and cheapest way to host a server outside of your home is to use a Virtual Private Server (VPS). There are thousands of options when it comes to VPS providers, but for now, just about any one will do. In the future, selection will be made more difficult because most providers will not allow exit node traffic, so we have compiled a list of exit node friendly providers to choose from if you want to stay with your provider for more than a few months.

|Hosting Provider| Product Name | Cost Per Month $USD | Bandwidth Provided | Exit Friendliness Rating |
|--------------------|-----------------|----------------------------|--------------------|-------|
|Netcup|VPS 1000 G8|10.50|30 - 35 MiB’s|5 / 10
|Online.net|Start-2-S-SSD|13.99|15 - 17 MiB’s|9 / 10|
|Scaleway|START1-M|9.33|20 - 25 MiB’s|7 / 10
|OVH|VPS SSD 2|7.61|10 - 15 MiB’s|9 / 10|
|Leaseweb|Virtual Server XL|34.45|30 - 35 MiB’s|5 / 10
|Digital Ocean|2 GB, 2 vCPUs|15|9 - 11 MiB’s|8 / 10
|Feral Hosting|Neon Capability|19.68|9 - 11 MiB’s|9 / 10
|Trabia|VDS-8G|38.54|9 - 11 MiB’s|8 / 10
|Hetzner|EX41-SSD (30 TB)|39.71|80 - 40 MiB’s|4 / 10

Try not to pick the first one off the list. Do some digging and see which one looks the best to you, what your budget is, and what the latency is like for you based on the server location that you choose.

When selecting your VPS’ operating system, choose Ubuntu 16.04 64 bit or Ubuntu 18.04 64 bit if you want to follow this guide. If you feel more confident or wish to run your server on another distribution or operating system, the Loki commands in this guide will still apply.

### Step 2 - Prepare your Server

Every provider has a slightly different way of issuing you access to your new VPS. Most will send an email with the IP address, root username, and a root password of the VPS.

To access your server, you will need a SSH client for your operating system. Because we’re on Windows today, we’ll download PuTTY, Mac users can also use PuTTY. If you’re a Linux user, you probably don’t want us telling you where to get a SSH client from.

To connect to our VPS we will need to paste the IP address into the SSH client’s “Host Name (or IP address)” input box and click the “Open” button. The Port number can usually just be left as `22`.

![](https://lh5.googleusercontent.com/_M0fVg6ubXaB-8xjFPCmpkeCza3nftmI7EH91iMIo6ILREiBJkFFvmj5KpRt3EP-pAHSArkOlAiAp3oyBTAXOqPYmGnYBidm5lpm-ZOXBgUtkeeW1uzQg43J_2Okg6paygjuwGhO)

A terminal window will now appear prompting for your log-in details, username(root) and password, which were provided by your VPS provider. When entering your password, nothing will visually appear in the terminal. This is normal. Hit enter when it’s typed or pasted, and you should be logged in to your VPS.

#### Hot Tips for using the Console

Consoles don't work like the rest of your computer. Here are some basic tips for navigating your way around the command line!
  
-   Don't try copying something by using the usual Ctrl + C hotkey! If you want to copy something, do so by highlighting text and then right clicking it. Pasting works by right clicking a blank area in the console.
    
-   If you want to kill a process or stop something from running, press Ctrl + C. This is why you shouldn't try copying something with this hotkey ;)
    
-   You can always check the directory you are in and its contents by typing `ls`
    
-   You can always return to your home directory by typing `cd ~`
    
-   You can move into a given directory by typing `cd <name>` or move back up one level by typing `cd ..`
    
-   PuTTY allows you to easily duplicate or restart a session by right clicking the top of the window. Handy if you’re trying to do a few things at once.

Once we have logged in correctly to the VPS for the first time, the terminal may prompt us for a new password for our root account. The terminal will require you to enter the new password twice before we can start running commands.

#### Optional - Set up Non-root User

Best practice when running a public server is to not run your software as the root user. Although it is optional, we will create a non-root user to our VPS by running the following command.

`sudo adduser <username>`

Replacing `<username>` with a name you will log-in with. For this user-guide we will use snode as our username.

`sudo adduser snode`

The terminal will prompt you for a new password for our newly created user. Use a different password to the root password.

Once the password has been set, the terminal will prompt for a few details about the individual running the user. You can hit enter through each of the inputs as the details are not important for the purposes of running a Service Node.

Once that’s done, run the following two commands to give our new account admin privileges and to change to such account.

`sudo usermod -aG sudo snode`

`su - snode`

Before we proceed further, it is advised to close your terminal and reopen PuTTY to set up a saved session with our snode user. Your SSH client will have a load and save session function. For PuTTY we will need to type in our VPS IP address again, on the same screen type snode under “Saved Session”. Click on “Data” under the drop-down menu “Connection”, and type in snode (or your username defined before) into the input box “Auto-login username”. Go back to your session screen, where we entered the IP address, and click “Save”. You can load this session whenever you want to check on your Service Node.

#### Server Preparation Continued

We should update our package lists, the below command downloads the package lists from the repositories and "updates" them to get information on the newest versions of packages and their dependencies. It will do this for all repositories and PPAs.

`sudo apt-get update`

You will notice a bunch of package lists were downloaded, once this is complete run the below command to fetch new versions of any packages we currently have installed on the system.

`sudo apt-get upgrade`

You will be prompted to authorise the use of disk space, type `y` and enter to authorise.

If you are prompted at any time that a version of any file is available then click the up and down arrows until you are hovering over `install the package maintainer’s version` and click enter.

![](https://lh3.googleusercontent.com/tekkpWFSL4V0LBe1iIHZERWVZ8YRLUlNjaxrOBTN234yWiL_LKF2ojKiYOth8tqrMb9ASIbCE_BNRRqnTozJPO6a0tQrQcUfVyqima73x3ZZnhZD-T1UZzfe7RLydVnZ8jL2nWOl)

Alright, good to go. Our server is now set up, up to date, and is not running in root. On to the fun part!

### Step 3 - Download the Loki Binaries

First download the Linux binaries by running the following command:

`wget <link>`

Where `<link>` is the download link of the latest linux release. To find the link go to [https://github.com/loki-project/loki/releases/latest](https://github.com/loki-project/loki/releases/latest), right click the latest linux release and click `Copy Link Location`.

Your command should look something like:

`wget https://github.com/loki-project/loki/releases/download/1.0.3/loki-linux-x64-1.0.3.zip`

If `wget` is not installed you may need to run `sudo apt-get install wget`

To get to the binaries, we need to unzip them. Download and install unzip by running the following command.

`sudo apt-get install unzip`

If `unzip` is not installed you may need to run `sudo apt-get install unzip`

To unzip the downloaded zip file run the following command:

`unzip loki-linux-x64-1.0.3.zip`

You should see 8 files unzipped:

-   loki-blockchain-export
    
-   loki-wallet-cli
    
-   loki-blockchain-usage
    
-   lokid
    
-   loki-blockchain-blackball
    
-   loki-wallet-rpc
    
-   loki-blockchain-import
    
-   Loki-gen-trusted-multisig

Check they are unzipped by running:

`ls`

If not, sometimes unzip will dump the binaries in a folder. In our case the folder would be called `loki-linux-x64-1.0.3`, so to get into it we can type:

`cd loki-linux-x64-1.0.3`

To check that they are in that folder, once again, type:

`ls`

Excellent! We now have all of the necessary files to get this show on the road!

> *NOTE: If you’re nervous about trusting the binaries or the link, you should build it from source yourself. Instructions for that can be found in the README of [https://github.com/loki-project/loki](https://github.com/loki-project/loki)*

### Step 4 - Run the Service Node Daemon

Let’s start up the daemon so we can sync the blockchain and register our Service Node.

The problem with the terminal we currently have open is that once we close PuTTY the program running inside it will also shut down. We can run a program called `screen` which can keep our Service Node running for 30 days without having to look at it all the time.

The `screen` command is generally included in Ubuntu by default. If it isn’t, run `sudo apt install screen`. Running it opens up a terminal shell inside your session that will continue to run in the background once you detach it from the session. Type the following command:

`screen`

Enter through the information that the terminal shell is providing until we get back a blank screen awaiting an input.

To begin the Service Node daemon we must launch lokid with the flag `--service-node`.

`./lokid --service-node`

> If you are testing the daemon on testnet run the following command `./lokid --service-node --testnet`

The daemon will now start syncing. You won’t be able to do much if it hasn’t synced.

To have the daemon to continue to run in the background hold Ctrl and type ad. To test your screen is still running in the background run the command `screen -ls` and take note of the port number at the start of the screen. This number will help us re-enter the daemon at future times. Typing `screen -x <port number>` will reattach the session so we can see what’s going on inside. Hold CTRL and type "ad" again to detach the screen once more.

For now, we can just leave the session open to see the daemon messages while we set up the Service Node. Just don't forget to use CTRL + A + D to detach the session before you close PuTTY later on.


### Step 5 - Get/Open A Wallet

While we wait for the daemon to sync, we can now get a wallet going. 

*** You do not have to run this wallet on the server and you should not! Download the software and run it from elsewhere for security reasons! ***

You can run the CLI wallet (Command Line Interface wallet) on any other computer, including your home computer to avoid leaving your wallet on the server.

However, if you do want to run the CLI wallet on another computer, you will either need to run another daemon on that local machine or use a remote node (uk.loki.cash:22020, for example). There is also a list of trusted remote nodes in the Loki Project Discord channel under #links-and-resources. Alternatively if your Service Node is synced up, you could actually use the address of that daemon. When you run 'loki-wallet-cli' locally and wish to use a remote daemon, use the syntax:

`./loki-wallet-cli --daemon-address <insert address here>`
    
Or on windows:

`loki-wallet-cli.exe --daemon-address <insert address here>`
    
If you are made of money and are willing to take the small risk of losing all of your funds, you can continue running the wallet inside the Service Node VPS. So we don't have to talk about a myriad of other operating systems or potential user cases, the rest of this guide will assume you are running the wallet in the same VPS.

As such, it’ll probably save us time to open a second PuTTY session. You can do this by right clicking the window of the current PuTTY session and clicking “Duplicate Session.”

Log in to your non-root user that we set up before, in our case snode, and once in we should open a new screen by typing `screen` and hitting return twice.

Change directory to where our binaries are saved:

`cd loki-linux-x64-1.0.3`

Then to launch the wallet run the command:

`./loki-wallet-cli`

> If you are on testnet run the command with the --testnet flag: `./loki-wallet-cli --testnet`

When `loki-wallet-cli` first runs, it will request for you to specify a wallet name. Assuming we haven't created one yet, we will use the e.g. name `MyWallet`

Because this is the first time we have used the name `MyWallet` the client will prompt us to create a new wallet. Type `y` and click return to continue.

The `loki-wallet-cli` has generated us a wallet called `MyWallet` and is now prompting us for a password.

> _Note:_
>-   _When typing the password, the characters will not appear. It will seem as if you are typing and no text is appearing however the terminal is logging every character you type including if it is capitalised or lowercase._ 
>-   _Write down your wallet name and password on a piece of paper as this information will be required every time we want to enter our wallet._
>-   _Use a password with uppercase letters, lowercase letters, numbers, symbols and make the password at least 9 characters long._
    

Once we have chosen our password for the wallet we must choose our language. For the purposes of this user guide I suggest you use English by typing in `1` and clicking return.

The CLI will generate and spit out several lines of text. The first two lines of text show your wallet public address. This address can be shared, will be used to receive Loki to your wallet, and will be used during the preparation and registration of our Service Node. All Mainnet Loki public addresses start with an L and are followed with a string of characters, Testnet Public addresses start with a T. The public address shown will be your primary address, however multiple public addresses can be generated from this primary address.

Line 13 to 17 show your 25-word mnemonic (“new-monic”) seed. The seed is used to easily backup and restore your wallet without needing any other information. At this stage, grab a pen and paper, and write down your 25 words in order. Store the piece of paper in a safe and secure place, if your words are stored in a text file on your computer or stored online, you increase your risk of someone else getting control of your wallet.

It is at this point that we should get some Loki in the wallet. The amount of Loki required to run a node is derived from the function shown in Lokis [Cryptoeconomic paper](https://loki.network/wp-content/uploads/2018/07/Loki_Cryptoeconomics-1.pdf). Don't worry if you cant work out the formula, you can use this community created [tool](https://jagerman.com/sn/) or, the daemon will display the amount of Loki required to run the node. If you do not have enough you will have the option to join in or run your own Service Node pool.

> If you are running a Service Node on the testnet you will only ever require 100 testnet Loki to run the Node. You can ask someone in the Loki Discord Community for some testnet Loki, or alternatively you can run the command `start_mining` in your wallet. This may take an hour or two to get enough Loki.

**If you are staking please do not use Subaddresses. They are currently unsupported by the Loki wallet** 

We will need our address to register our Service Node later, to get your primary address type the following command:

`address`

Highlight the string of characters that were outputted and save this in a notepad for later use, your public address should look similar to:

`LPoiZQ43qG18FzKq7WhEbk3gfNNiemGsd7REdSQaFv4RdB8E97RxP8WFLRR2xHQStiSM61EFEicXU3EEPj7GEHdz8WHUrWRkbGeQ1r8ro8`

> *NOTE: Do not use CTRL + C to copy your address, it will close the wallet down. Simply highlight the address and this will automatically save the portion you highlighted into your clipboard.*

Once you have enough Loki in this wallet, just leave it open, we’ll come back to it in a minute.


### Step 6 - Service Node Registration
The next part of the guide will split into two sections: 
* If you are an individual staker and do not require any other contributors to run your Service Node jump into **6.1 - individual Staking**.
* If you want to run a pooled Service Node or contribute towards a pool jump into **6.2 - Pool Staking**

---
#### 6.1 - Individual Staking
If you want to run the Service Node as an individual you will require the following things.

* A Loki daemon running with `--service-node` flag (see step 4).
* A `loki-wallet-cli` primary address with enough Loki in your account to meet the Service Node Staking Requirement (see step 5).

Now if we have the two above items we can proceed to our daemon to register our Service Node.

Type `screen -ls` to get a list of the screens running. Your daemon will normally be the bottom one on the list. To enter our daemon run the following command, replacing `<port number>` with the number that corresponds with your daemon.

`screen -x <port number>`

To start the registration process we are going to run the following interactive command within the daemon terminal:

`prepare_registration`

The daemon will output the current staking requirement and prompt you with an input to clarify if you are an individual staker or you will be running a pool. Type `y` and click enter as we will be the sole staker.

The daemon will now prompt us for the Loki address of the operator. If you followed step 5 you should have this address saved in a notepad, if not run through step 5 again to find your Loki Address. Once we have the Loki Address copied to our clipboard we can then right click the terminal screen to paste the address. Double check the address matches the one of your wallet then click enter if it is the same.

The daemon will now ask if you wish to enable automatic re-staking. Type `y` and click enter if you would like to have your Service Node  re-stake automatically for you at the end of every 30 days. Type `n` if you would like to re-stake manually. 

The daemon will now ask for a final confirmation, if you agree to the information provided type `y` and click enter.

The daemon will output a command for us to run looking similar to:
```
register_service_node 4294967292 T6TCCyDgjjbddtzwNGryRJ5HntgGYvqZTagBb2mtHhn7WWz7i5JDeqhFiHqu7ret56411ZJS7Thfeis718bVteBZ2UA6Y7G2d 4294967292 100.000000000 1535677391 ec3895ea70a4a91b5ec4b5e1df96a45e07046f1fb0123c754d98fb2d70f4529d 5bb35d7b8ab1acb943bc47913ada8f9d2e6d6e22264e57484a04c1bbfd461f0ee2e5435454cd9b7059b221eb506ce9ea4537ddd9faf1f1757e0ef611a41c0609
```
Copy the whole line of text and paste it into your notepad as we will need to run this command in our `loki-wallet-cli`.
if registering multiple nodes, please wait at least 10 blocks between Service Nodes before running the register Service Node command in the wallet

You have 2 weeks from the moment of registering the Service Node to run the `register_service_node` command, however it is advised to do it as soon as possible.

We do not require our daemon terminal anymore, however we do need to daemon to be running. Hold CTRL and type `ad` to detach the screen.

Run through step 5 once more to open our Loki wallet. Once we are in our wallet run the command the daemon outputted for us when we prepared our Service Node.

Alternatively, you can also include the `auto` command, this will create a wallet which runs as a background process and automatically signs a register transaction each 30 days, so the contributor need not sign a new transaction manually each registration period.

`register_service_node auto args.....`

> If you run the `auto` command the wallet will close pushing the process into the background. See additional information at the end of this guide to learn how to stop the auto command.

The wallet will prompt us to confirm our password, then the amount of Loki to stake. Confirm this by typing `y` and clicking enter. Well done! Let's continue to the next step **"Step 7 - Service Node Check"** to check if our Service Node is running.

---

#### 6.2 - Pool Staking
Service Nodes can be split between multiple parties. At a minimum, the operator must stake at least 25% of the total required amount. The operator can also reserve contribution slots for specific addresses to prevent random users from adding to the pool.

In any given pool, there will be at most 4 contributors including the operator. After the operator, each new participant must also contribute 25% of the minimum, except the last one. So for example, valid splits might be:

|Operator| Contributor 1 | Contributor 2 | Contributor 3|
|:-:|:-:|:-:|:-:|
|25%|25%|40%|10%|
|65%|25%|10%||
|90%|10%|||
|99%|1%|

Depending on the individual and their circumstance they will need to:
* Jump into section **"6.2.1 - Operator"** if they are running the daemon and hosting the pool;
* Jump into section **"6.2.2 - Pool Contributor"** if they are contributing to someone's Service Node.

>*NOTE: It is advised to read both sections of ***"6.2 - Pool Staking"*** to have a better understanding of the process.*

---
##### 6.2.1 - Operator
The Operator is the individual who will be hosting the pool and running the Service Node daemon, thus incurring the operating expenses encompassed by running a node.

The Operator will need to have:
* A Loki daemon running with `--service-node` flag (see step 4) at all times.
* A `loki-wallet-cli` primary address with enough Loki in their account to meet 25% of the Staking Requirement.
* 1-3 other contributors who also have a `loki-wallet-cli` with enough Loki in their accounts to meet 25% of the staking requirement.
* The address and contribution amounts the 1-3 contributors will stake.
>*NOTE: The other contributors addresses are optional to have as you can create your pool to be open to anyone to contribute to, however they are recommended to have to avoid any issues of other individuals stealing their spots.*

Now if we have the three/four above items we can proceed to our daemon to register our Service Node.

Type `screen -ls` to get a list of the screens running. Your daemon will normally be the bottom one on the list. To enter our daemon run the following command, replacing `<port number>` with the number that corresponds with your daemon:

`screen -x <port number>`

To start the registration process we are going to run the following interactive command within the daemon terminal:

`prepare_registration`

The terminal will prompt the operator to specify if they will contribute the entire stake, because we are running this as a pooled Service Node we will type `n` and click enter.

Next the terminal will request the input for the operator cut. This value is between 0-100 and represents the percentage of the reward the operator will receive before the reward is distributor to the share holders. If you have agreed to a 10% operator cut with the other contributors you would type `10` and click return.

The terminal will now display the minimum reserve the operator can contribute and request the operator to input the amount in Loki they wish to contribute. Type your desired `<operator contribution>` and click return.

Once we have set the operators desired stake amount we have the option to either leave the pool open for anyone to contribute or lock a reserve for individuals that have agreed with us to stake within our Service Node. 

---
##### Reserved Pool
If the operator wishes to have their pool closed they should type `y` and click continue. 

The terminal will now prompt the operator for the number of additional contributors they have organised to be apart of this Service Node. They must type in the number of contributors, not including themselves, and click return.

The daemon will now prompt us for the Loki address of the operator. If you followed step 5 you should have this address saved in a notepad, if not run through step 5 again to find your address. Once we have the Loki Address copied to our clipboard we can then right click the terminal screen to paste the address then click return to confirm your address.

Next the operator must input each of the contributors amount of Loki they will stake and each contributors address.

The daemon will now ask if you wish to enable automatic re-staking. Type `y` and hit return if you would like to have your Service Node  re-stake automatically at the end of every 30 days. Type `n` if you would like to re-stake manually.

You will now be asked to confirm the information above is correct.

---

##### Open Pool

If the operator wishes to leave their pool open they should type `n` and click continue. The terminal will prompt the operator to input their address. Once the address has been inputted the terminal will display the remaining portion that needs to be contributed by others. If you agree click `y` and hit return.

---
The daemon will display a summary of the information we entered. This is our chance for a final check over to make sure we entered in the right information. If you confirm the information is correct type `y` and click return.

The daemon will output a command for us to run within our wallet, looking similar to:
```
register_service_node 214748364 T6UCEoWvJHCJq5biK3LMQZ4CRXAaqiPda2kCRRYYYEMFfxYoqnUo7Nx88RL3wmENwN4kfjDSp2jMN1g6PSErKrSu2EEp8UMy5 1073741823 T6TCCyDgjjbddtzwNGryRJ5HntgGYvqZTagBb2mtHhn7WWz7i5JDeqhFiHqu7ret56411ZJS7Thfeis718bVteBZ2UA6Y7G2d 3221225469 25.000000000 1535692249 5dac247e90ced2dcd9e51faec8792acb0c11b4c700640d9104b17c868ea167e3 cc11eef804c11d3e93cf8c488c10d97b8cec9ee2b38e6666ff07749c2911aa06ce310edc926a4d2f50a588e9c15afcc20e935a0f188aa7caa764a62058dec80d
```
> *NOTE: You must run the command outputed in **your** daemon and not the command shown above.*

Copy the whole line of text in your daemon and paste it into your notepad as we will need to run this command in our `loki-wallet-cli`.

You have 2 weeks from the moment of registering the Service Node to run the `register_service_node` command, however it is advised to do it as soon as possible.

Before we leave the daemon run the following command to get our `<Service Node Public Key>` and save it in your notepad:

`print_sn_key`

Run through step 5 once more to open our Loki wallet. Once we are in our wallet run the command the daemon outputted for us when we prepared our Service Node. The wallet will prompt us to confirm our password, then the amount of Loki to stake. Confirm this by typing `y` and clicking enter.

Alternatively, the operator can also include the `auto` command, when staking this will create a wallet which runs as a background process and automatically signs a register transaction each 30 days, so the contributor need not sign a new transaction manually each registration period.

`register_service_node auto args.....`

> If you run the `auto` command the wallet will close pushing the process into the background. See additional information at the end of this guide to learn how to stop the auto command.

We must now send the `<Service Node Public Key>` to our contributors with the amount of Loki they are required to stake.

At this point the we will need to wait until all contributors have staked before rewards will be received.

---
##### 6.2.2 - Pool Contributor

The pool contributor must first receive the Service Node Pubkey and the requirements (amount of loki to send) from the Service Node Operator.

**If you are staking please do not use Subaddresses. They are currently unsupported by the Loki wallet** 

The pool contributor must have downloaded the necessary binaries, is running a daemon or is connected to a remote node, has generated a wallet through the `loki-wallet-cli`, and has enough Loki to stake. They can then run the following command in their `loki-wallet-cli` .

`stake <Service Node Pubkey> <address> <contribution amount>`

Where the `<Service Node Pubkey>` is the Pubkey provided from the Service Node operator, the `<address>` the service node operator will likely reserve an address for which they want you to stake for, this will usually be the same address as the wallet you are planning to stake from, in the case of an open pool this will always be the address you will you stake from and you will also receive rewards here too. `<contribution amount>` is the amount of Loki they are going to stake which they agreed to with the Service Node Operator.

The Pool Contributor can also include the `auto` command, when staking this will create a wallet which runs as a background process and automatically signs a register transaction each 30 days, so the contributor need not sign a new transaction manually each registration period.

`stake auto <Service Node Pubkey> <address> <contribution amount>`

> If you run the `auto` command the wallet will close pushing the process into the background. See additional information at the end of this guide to learn how to stop autostaking.

> The `auto` command does not work with a multsig wallet as there is a requirement for the party who is staking to have the transaction signed by another signer. Thus is it advised if you are using a multisig wallet to maintain the staking once a month when the funds are unlocked.

At this stage you will need to wait for the other contributors to provide their collateral. Once everyone has staked you can refer to **“Step 7 - Service Node Check”** to see where your Service Node Operator’s node is in the list.

Congratulations, you are now staking.

### Step 7 - Service Node Check

After we have locked your collateral we will need to check if our Service Node Pubkey is sitting in the list with the other Service Node’s on the network. This will prove our Service Node is running, recognised and will receive a reward if it keeps running.

Let’s go into our daemon screen by typing `screen -x <port number>`. To find the port number use `screen -ls` and your daemon should be sitting at the bottom of the list.

Once we are in the daemon again we can run the following command to see our Service Node Public Key:

`print_sn_key`

The Service Node Public Key is used to identify our Service Node within the list of Service Nodes currently on the network. 

You can jump onto https://lokiblocks.com/ to see if your Service Node is in the list or we can continue in the terminal to output the same information.

>If you are running your Service Node on testnet go to https://lokitestnet.com/ instead.

We will want to know the current block height, type `status` into the daemon and it will output this information. Once we have the block height we can then check the current Service Nodes on the network at our specified block height.

Run the command `print_quorum_state <block height>` replacing `<block height>` with the number minus 1 that was outputted when running `status` command. 

If your `<Service Node Pubkey>` is sitting in the list you know you are now staking.

## Additional Functions
### Autostaking - Checking/stopping autostake command
To check the processes running in the background, run the command:

`top -u <username>`

Under the `COMMAND` column we should see a process called `loki-wallet-cli`. If you do not see this process you are either looking at the wrong `<username>` or your autostake command is not running. 

If you want to stop the autostake then run the following command while logged on to the specific `<username>` which has `loki-wallet-cli` running in the background:

 `pkill loki-wallet-cli`


 
 ### Running Autostake on startup
 
If the host machine your VPS is running on shuts down or restarts unexpectedly then so to will your your autostaking wallet, you can use the following command to start the autostaking wallet again, you can also include these commands in your startup scripts, ensuring if your node goes down it automatically restarts the wallet process.

`loki-wallet-cli --testnet --wallet-file <PATH TO WALLET FILE> --password <WALLET PASSWORD> set ask-password 0`

`register_service_node auto ...`

Running this command if you have already staked will not stake over the top of an already staked node 


## Express Setup Guide

This section is for power users who are more familiar with servers and the CLI interface. There's a couple of things your going to want to do before you commence.

 **1. Get a Server that meets requirements**
 **2. Run the Daemon on a server from a non-root user account, then stake from a local wallet (or a wallet on a separate server).**


> where `<VERSION>` is mentioned replace with the [latest version](https://github.com/loki-project/loki/releases/latest), example `1.0.3`

**3. Connect via SSH to your server**
**4. add new user**

`sudo adduser snode`

`<enter>`

`Y`

`exit`


**5. login to your new user account via SSH** 

`snode@<ipaddress>`

**6. Update necessary security patches and system utilities**

`sudo apt-get update`

`sudo apt-get upgrade`


**7. Download & unzip Loki**

`wget https://github.com/loki-project/loki/releases/download/v<VERSION>/loki-linux-x64-<VERSION>.zip`

`sudo apt-get install unzip`

`unzip loki-linux-x64-<VERSION>.zip`


**8. Run Loki in a screen and Detach**

`Screen  <enter>`

`cd loki-linux-x64-<VERSION>`

`./lokid --service-node`

`Ctrl +AD`

Wait for the Loki Daemon sync the blockchain (1 - 8 Hours depending on internet speed)

**9. Open a Wallet**

This wallet can be in a screen on the Service Node machine, or a wallet on your local computer (assuming you have downloaded the binaries).

`cd loki-linux-x64-<VERSION>`

Linux/MAC - `./loki-wallet-cli`
Windows - `loki-wallet-cli`

Enter Name: Name your wallet

Enter password 

Language: `1` (for English)

Securely store:
1. Address
2. Seed Phrase 
3. Pass-phrase

Send enough Loki to fund a node, wait for Balance to be unlocked (20 mins, 10 confirmations)

**10. Register your Service Node**

On your Service Node reattach to the screen which has the Service Node running.  

`screen -r`

`prepare_registration`

Contribute entire Stake: `Y/N`

Enter Loki Address

Enable Restaking: `Y/N`

Confirm: `Y`

Copy green registration message

`Ctrl +AD`

**11. Reattach to Service Node or local wallet**

Paste in registration message `<enter>`

**12 Attach Back to Service Node Daemon**

`screen -r`

`print_sn_key`

Copy service node key, and search for it on:
https://lokiblocks.com/service_nodes

`CTRL +AD`

ctrl +ad detaches screen and runs your Loki Service Node  in background this is critical


## Conclusion

Well done! You will receive a block reward when your Service Node has been active for some time and the network chooses you within the list.

**Bonus** Add the community-run telegram bot `@lokiSNBot` to receive on-the-fly updates about your service node. Props to @jagerman42 for building this. 

**Bonus 2** View jagerman.com/sn/ for more details on Loki Service Node staking requirements. 

This guide will be regularly updated when new features are added to Snodes. [Join the discord for more discussion.](https://discord.gg/FkwRPSA)

If you can improve this guide, please submit a pull request. 
