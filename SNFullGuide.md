# Full Guide on Service Nodes

This document will tell you exactly how to set up and operate a Service Node for the Loki Project. This document was written with non-developers in mind, so people new to linux or command line operations should be able to follow along without any trouble.

You can of course run the Loki software on any operating system that you can get it to build on, but for the purposes of this document, the instructions apply to running a Service Node on a remote Ubuntu 16.04 server. If that isn’t what you want to do, syntax and server set up will of course differ according to whatever OS you choose to run your Service Node from.

## How Service Nodes Work (Broadly Speaking)

To understand what a Service Node is, you can refer to the [whitepaper](https://loki.network/whitepaper) to get an in depth understanding. For now, all you need to know is that:

-   Service Nodes are full nodes on the Loki network
    
-   Full nodes become Service Nodes when the owner locks the required amount of Loki for 30 days and submits a registration transaction
    
-   Once accepted by the network, the Service Node is eligible to win block rewards
    
-   Multiple participants can be involved in one Service Node and can have the reward automatically distributed

It is also worth noting that Service Nodes are quite basic at the moment, and operators will need to stay up to date with new updates to keep in line with software and hardware requirements. Once all of the updates are out, Service Nodes will also:

-   Route end user’s internet traffic, either as an exit node or relay in a novel mixnet
    
-   Receive, store and forward encrypted user messages
    
-   Monitor other Service Nodes and vote on their performance
    
-   Be called into quorums which give them authority over instant transactions (Blink)
    
-   Act as remote nodes for users

Once these features come out, Service Node operation will require better servers, particularly when it comes to bandwidth. For the purposes of this guide, however, we will only consider the current requirements.

## Step 1 - Get a Server

Righto! Let’s get started. Choosing where to set up a Service Node is the biggest choice you will make when running a Service Node. There are a number of things to consider. Because you will be locking up funds for 30 days (2 days for testnet) at a time, you will want to ensure that your server has:

-   A stable, relatively fast connection to be able to respond to ping requests to avoid being booted off the network
    
-   We recommend 2GB of RAM to cope with running the software reliably (*Note: This requirement may be much greater once services are live*). 1GB is fine for testing.
    
-   A stable power supply. If your server goes down during the staking period, you may get kicked off the network, and not receive rewards while your funds are still locked for the remainder of the staking period.

For most users, we assume that your home internet connection is relatively slow (< 4MB/s down and up) and probably lacks support for external connections. If this is the case, you will probably not want to run a Service Node from your home in the long term, as this could cost you if and when you get booted off. Since we’re just testing at the moment, you could run it from home anyway, but for this guide we’ll avoid it.

Typically, the easiest and cheapest way to host a server outside of your home is to use a Virtual Private Server (VPS). There are thousands of options when it comes to VPS providers, but for now, just about any one will do. In the future, selection will be made more difficult because most providers will not allow exit node traffic, so we have compiled a list of exit node friendly providers to choose from if you want to stay with your provider for more than a few months.

|Hosting Provider| Product Name | Cost Per Month $USD | Bandwidth Provided | Exit Friendliness Rating |
|--------------------|-----------------|----------------------------|--------------------|-------|
|OVH|VPS SSD 2|7.61|10 - 15 MiB’s|10 / 10|
|Online.net|Start-2-S-SSD|13.99|15 - 17 MiB’s|9 / 10|
|Scaleway|START1-M|9.33|20 - 25 MiB’s|7 / 10
|Netcup|VPS 1000 G8|10.50|30 - 35 MiB’s|5 / 10
|Leaseweb|Virtual Server XL|34.45|30 - 35 MiB’s|7 / 10
|Digital Ocean|2 GB, 2 vCPUs|15|9 - 11 MiB’s|8 / 10
|Feral Hosting|Neon Capability|19.68|9 - 11 MiB’s|9 / 10
|Trabia|VDS-8G|38.54|9 - 11 MiB’s|9 / 10
|Hetzner|EX41-SSD (30 TB)|39.71|80 - 40 MiB’s|4 / 10

Try not to pick the first one off the list. Do some digging and see which one looks the best to you, what your budget is, and what the latency is like for you based on the server location that you choose.

When selecting your VPS’ operating system, choose Ubuntu 16.04 64 bit or Ubuntu 18.04 64 bit if you want to follow this guide. If you feel more confident or wish to run your server on another distribution or operating system, the Loki commands in this guide will still apply.

## Step 2 - Prepare your Server

Every provider has a slightly different way of issuing you access to your new VPS. Most will send an email with the IP address, root username, and a root password of the VPS.

To access your server, you will need a SSH client for your operating system. Because we’re on Windows today, we’ll download PuTTY, Mac users can also use PuTTY. If you’re a Linux user, you probably don’t want us telling you where to get a SSH client from.

To connect to our VPS we will need to paste the IP address into the SSH client’s “Host Name (or IP address)” input box and click the “Open” button. The Port number can usually just be left as `22`.

![](https://lh5.googleusercontent.com/_M0fVg6ubXaB-8xjFPCmpkeCza3nftmI7EH91iMIo6ILREiBJkFFvmj5KpRt3EP-pAHSArkOlAiAp3oyBTAXOqPYmGnYBidm5lpm-ZOXBgUtkeeW1uzQg43J_2Okg6paygjuwGhO)

A terminal window will now appear prompting for your log-in details, username(root) and password, which were provided by your VPS provider. When entering your password, nothing will visually appear in the terminal. This is normal. Hit enter when it’s typed or pasted, and you should be logged in to your VPS.

### Hot Tips for using the Console

Consoles don't work like the rest of your computer. Here are some basic tips for navigating your way around the command line!
  
-   Don't try copying something by using the usual Ctrl + C hotkey! If you want to copy something, do so by highlighting text and then right clicking it. Pasting works by right clicking a blank area in the console.
    
-   If you want to kill a process or stop something from running, press Ctrl + C. This is why you shouldn't try copying something with this hotkey ;)
    
-   You can always check the directory you are in and its contents by typing `ls`
    
-   You can always return to your home directory by typing `cd ~`
    
-   You can move into a given directory by typing `cd <name>` or move back up one level by typing `cd ..`
    
-   PuTTY allows you to easily duplicate or restart a session by right clicking the top of the window. Handy if you’re trying to do a few things at once.

Once we have logged in correctly to the VPS for the first time, the terminal may prompt us for a new password for our root account. The terminal will require you to enter the new password twice before we can start running commands.

### Optional - Set up Non-root User

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

### Server Preparation Continued

We should update our package lists, the below command downloads the package lists from the repositories and "updates" them to get information on the newest versions of packages and their dependencies. It will do this for all repositories and PPAs.

`sudo apt-get update`

You will notice a bunch of package lists were downloaded, once this is complete run the below command to fetch new versions of any packages we currently have installed on the system.

`sudo apt-get upgrade`

You will be prompted to authorise the use of disk space, type `y` and enter to authorise.

If you are prompted at any time that a version of any file is available then click the up and down arrows until you are hovering over `install the package maintainer’s version` and click enter.

![](https://lh3.googleusercontent.com/tekkpWFSL4V0LBe1iIHZERWVZ8YRLUlNjaxrOBTN234yWiL_LKF2ojKiYOth8tqrMb9ASIbCE_BNRRqnTozJPO6a0tQrQcUfVyqima73x3ZZnhZD-T1UZzfe7RLydVnZ8jL2nWOl)

Alright, good to go. Our server is now set up, up to date, and is not running in root. On to the fun part!

## Step 3 - Download the Loki Binaries

First download the Linux binaries by running the following command:

`wget https://github.com/loki-project/loki/releases/download/v0.3.1-beta/loki-linux-x64-0.3.1-beta.zip`

If `wget` is not installed you may need to run `sudo apt-get install wget`

*NOTE: In the off chance this guide is out of date, check [https://github.com/loki-project/loki/releases](https://github.com/loki-project/loki/releases) in your browser to see if this link is up to date with the latest release.*

To get to the binaries, we need to unzip them. Download and install unzip by running the following command.

`sudo apt-get install unzip`

To unzip the downloaded zip file run the following command:

`unzip loki-linux-x64-0.3.1-beta.zip`

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

If not, sometimes unzip will dump the binaries in a folder. In our case the folder would be called `loki-linux-x64-0.3.0-beta`, so to get into it we can type:

`cd loki-linux-x64-0.3.1-beta`

To check that they are in that folder, once again, type:

`ls`

Excellent! We now have all of the necessary files to get this show on the road!

*NOTE: If you’re nervous about trusting the binaries or the link, you should build it from source yourself. Instructions for that can be found in the README.md of [https://github.com/loki-project/loki](https://github.com/loki-project/loki)*

## Step 4 - Run the Service Node Daemon

Let’s start up the daemon so we can sync the blockchain and register our Service Node.

The problem with the terminal we currently have open is that once we close PuTTY the program running inside it will also shut down. We can run a program called `screen` which can keep our Service Node running for 30 days without having to look at it all the time.

The `screen` command is generally included in Ubuntu by default. If it isn’t, run `sudo apt install screen`. Running it opens up a terminal shell inside your session that will continue to run in the background once you detach it from the session. Type the following command:

`screen`

Enter through the information that the terminal shell is providing until we get back a blank screen awaiting an input.

To begin the Service Node Daemon we must launch lokid with two flags `--testnet` and `--service-node`.

`./lokid --testnet --service-node`

The Daemon will now start syncing. You won’t be able to do much if it hasn’t synced.

To have the daemon to continue to run in the background hold Ctrl and type ad. To test your screen is still running in the background run the command `screen -ls` and take note of the port number at the start of the screen. This number will help us re-enter the daemon at future times. Typing `screen -x <port number>` will reattach the session so we can see what’s going on inside. Hold CTRL and type "ad" again to detach the screen once more.

For now, we can just leave the session open to see the daemon messages while we set up the Service Node. Just don't forget to use CTRL + A + D to detach the session before you close PuTTY later on.

## Step 5 - Get/Open A Wallet

While we wait for the daemon to sync, we can now get a wallet going. It’ll probably save us time to open a second PuTTY session. You can do this by right clicking the window of the current PuTTY session and clicking “Duplicate Session.”

You could run the CLI wallet (Command Line Interface wallet) on your home computer to avoid leaving your wallet on the server, but for the purposes of this guide, we’re going to keep everything contained on the one machine.

Log in to your non-root user that we set up before, in our case snode, and once in we should open a new screen by typing `screen` and hitting return twice.

Change directory to where our binaries are saved:

`cd loki-linux-x64-0.3.1-beta`

Then to launch the wallet run the command:  
  
`./loki-wallet-cli --testnet`

When `loki-wallet-cli` first runs, it will request for you to specify a wallet name. Assuming we haven't created one yet, we will use the e.g. name `MyWallet`

Because this is the first time we have used the name `MyWallet` the client will prompt us to create a new wallet. Type `y` and click return to continue.

The `loki-wallet-cli` has generated us a wallet called `MyWallet` and is now prompting us for a password.

*Note:*

- *when typing the password, the characters will not appear. It will seem as if you are typing and no text is appearing however the terminal is logging every character you type including if it is capitalised or lowercase.*

- *Write down your wallet name and password on a piece of paper as this information will be required every time we want to enter our wallet.*

- *Use a password with uppercase letters, lowercase letters, numbers, symbols and make the password at least 9 characters long.*

Once we have chosen our password for the wallet we must choose our language. For the purposes of this user guide I suggest you use English by typing in `1` and clicking return.

The CLI will generate and spit out several lines of text. The first two lines of text show your wallet public address. This address can be shared, will be used to receive Loki to your wallet, and will be used during the preparation and registration of our Service Node. All Mainnet Loki public addresses start with an L and are followed with a string of characters, Testnet Public addresses start with a T. The public address shown will be your primary address, however multiple public addresses can be generated from this primary address.

Line 13 to 17 show your 25-word mnemonic (“new-monic”) seed. The seed is used to easily backup and restore your wallet without needing any other information. At this stage, grab a pen and paper, and write down your 25 words in order. Store the piece of paper in a safe and secure place, if your words are stored in a text file on your computer or stored online, you increase your risk of someone else getting control of your wallet.

It is at this point that we should get some Loki in the wallet. Copy your public address and ask someone to send you Loki, or you can run `start_mining` from inside the wallet to instruct the daemon to start mining to the wallet. This might take an hour or so on testnet to get 100 Loki for staking.

Once you have enough Loki in this wallet, just leave it open, we’ll come back to it in a minute.

## Step 6 - Service Node Registration

We have designed an interactive prompt for service node registration, all you need to do is run the loki daemon and type and follow.

`prepare_registration`

follow the steps provided, and when the interactive wizard finishes go back to your wallet and paste the command the wizard outputs 

## Service Node Check

After you have locked your collateral we will need to check if our Service Node Pubkey is sitting in the list with the other Service Node’s on the network. This will prove our Service Node is running, recognised and will receive a reward if it keeps running.

Let’s go into our daemon screen by typing `screen -x <port number>`. To find the port number use `screen -ls` and your daemon should be sitting at the bottom of the list.

Once we are in the daemon again we can run the command `print_quorum_state <block height>` where the block height should be 1 or two blocks after the block in which we locked our collateral.

If your `<Service Node Pubkey>` is sitting in the list you know you are now staking.

Well done! You will receive a block reward when your Service Node has been active for some time and the network chooses you within the list. 

## Service Node Registration - Pool

Service Nodes can be split between multiple parties. At a minimum, the operator must stake at least 25% of the total required amount. The operator can also reserve contribution slots for specific addresses to prevent random users from adding to the pool.

In any given pool, there will be at most 4 contributors including the operator. After the operator, each new participant must also contribute 25% of the minimum, except the last one. So for example, valid splits might be:

```
25 - 25 - 40 -10

90 - 10

65 - 25 - 10

99 - 1
```

 **For example:** 
If a Service Node operator wishes to run a pool with 3 other contributors and the operator wishes to receive 10% of the reward for running the Service Node, he must first have the 3 other contributors provide their public addresses. He must also have the information of the percentage of the stake they will provide as a fraction.

Each contributor must provide at least 25% of the stake, so with 4 even contributors each `<fraction>` will be 0.25. Although , it could also be 0.5, 0.4, and 0.1, for example.

The final number, `<contribution amount>`, is the amount the **OPERATOR** will contribute. For example, if the total staking requirement is 100, and the fraction for the operator is 0.25, this number will be set as 25.

Now the Service Node operator must provide to the other contributors the Service Node Pubkey, which was generated in the daemon, and the amount they need to stake.

At this point the Operator will need to wait until all contributors have send they’re collateral before rewards will be received.

### Pool Contributor

The pool contributor must first receive the Service Node Pubkey and the requirements(amount of loki to send) from the Service Node Operator.

The Pool Contributor must have downloaded the necessary binaries, is running a daemon or is connected to a remote node, has generated a wallet through the `loki-wallet-cli`, and has enough Loki to stake. They can then run the following command in their `loki-wallet-cli` (If you do not have the mentioned items you must run through this guide again skipping the Service Node registration section).

`stake <Service Node Pubkey> <address> <contribution amount>`

Where the `<Service Node Pubkey>` is the Pubkey provided from the Service Node operator, the `<address>` is the Pool contributors address in which they are sending from and receiving the reward to, and the `<contribution amount>` is the amount of $Loki they agreed to with the Service Node Operator.

At this stage you will need to wait for the other contributors to provide their collateral. Once everyone has staked you can refer to “Service Node Check” to see where your Service Node Operator’s node is in the list.

Congratulations, you are now staking.

This guide will be regularly updated when new features are added to Snodes. [Join the discord for more discussion.](https://discord.gg/FkwRPSA)
