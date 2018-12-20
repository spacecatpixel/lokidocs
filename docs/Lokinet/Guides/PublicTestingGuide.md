# Lokinet Public Testing Guide

Thanks for your interest in the public testing phase of the Lokinet alpha. It’s taken many months to get to this point, but we’re grateful to everyone who want to give this new type of mixnet a spin.

This guide will help you get Lokinet running on your machine, and give you some example tasks on things you can do to help put the software through its paces and help us find places where it needs to be fixed or can be improved. The more machines we get this running on, and the more traffic (and types of traffic) we can push through this alpha network, the better.

You can of course run the Loki software on any operating system that you can get it to build on, but for the purposes of this document, the instructions apply to running Lokinet on a remote Ubuntu 16.04 server. If that isn’t what you want to do, syntax and server set up will of course differ according to whatever OS you choose to run the Lokinet from.

### Summary of Loki Service Node Requirements

Full summary of Loki Service Node Requirements. This may change depending on new updates, so you should check here regularly, or follow our [telegram](https://t.me/LokiCommunity)/[discord](https://discord.gg/DN72VN) announcements channel. 

|Spec|Note|
|---|---|
|Latest Binary|[loki network](https://github.com/loki-project/loki-network/releases/latest)|
|Software| Ubuntu 16.04|
|Storage | 30-50gb|
|Ram | 2-4 gb|


## Table of Contents
- [Overview of Lokinet](#Overview)
- [Getting Help and Reporting Bugs Guidelines](#getting-help-and-reporting-bugs-guidelines)
- [User Guide](#user-guide)
	- Step 1 [Lokinet Installion](#lokinet-installion)
	- Step 2 [Accessing SNApps](#accessing-snapps)
	- Step 3 [Joining the lokinet IRC Chat](#joining-the-lokinet-irc-chat)
	- Step 4 [Hosting a SNApp](#hosting-a-snapp)

## Getting Help and Reporting Bugs Guidelines
The entire purpose of doing a public testing phase is to collect as much feedback as possible. To make this easier for both our testers and the Lokinet team, we ask that our testers stick to the following guidelines.

### Getting Help
If something in this guide isn’t making sense, or if you’re running into issues that you can’t identify on your own, the first place to go would be the #lokinet-help channel on [discord](https://discord.gg/67GXfD6). Alternatively, you can find help on our other communication channels such as [telegram](https://t.me/LokiCommunity), [twitter](https://twitter.com/loki_project), or [reddit](https://www.reddit.com/r/LokiProject/).


### Reporting Bugs

After you have sought out for help through our communication channels and have not come to any solutions we recommend opening up a issue ticket on the [Loki-network](https://github.com/loki-project/loki-network/issues) repository.

Please use the following Github Issue Template for any github issues created: [Github Issue Template Example](../../../Contributing/Issue_Template/).

## User Guide

We have laid out a set of guides which will take you through the installion of Lokinet to hosting your own SNApp.

We suggest going through each guide in the following order:

1. [Installation Guide](../../Lokinet/Guides/Install.md) - Initial setup for Linux.

2. [Accessing SNApps](../../Lokinet/Guides/AccessingSNApps.md) - Setting up your computer to access SNApps.

3. [Joining a lokinet IRC chat anonymously](../../../Lokinet/Guides/AccessingSNApps/#test-services) - Start chatting with the community on lokinet.

4. [Hosting a SNApp](../../Lokinet/Guides/HostingSNApps.md) - How to host a SNApp on lokinet.

### 1. Lokinet Installion

This guide will help prepare your computer to run Lokinet, to access the guide [click here](../Guides/Install.md).

The guide will run you through:

- Setting up a non root user and giving this user admin access.

- Updating your Package lists and installing required updates.

- Install build dependencies.

- Build the Lokinet software from the repository.

Follow the guide and report to the moderators with any issues on the #lokinet-help channel on [discord](https://discord.gg/67GXfD6). Dont forget to report any build issues if you find them, especially if you solved the issue.

### 2. Accessing SNApps

This guide will help you gain access to SNApps, to access the guide [click here](../Guides/AccessingSNApps.md).

The guide will run you through:

- Adding our DNS resolver.

- Initialising Loki-network for the first time.

- Running `./lokinet`.

- Accessing your first SNApp.

Follow the guide and report to the moderators with any issues on the #lokinet-help channel on [discord](https://discord.gg/67GXfD6). Dont forget to report your issues to the [Loki-network](https://github.com/loki-project/loki-network/issues) repository if you find them, especially if you solved the issue.

### 3. Joining the Lokinet IRC Chat

Once you can access a SNApp with a `.loki` suffix you can then join any IRC chat hosted on the Lokinet.

We suggest reading through the [#test-services](../../../Lokinet/Guides/AccessingSNApps/#test-services) section of the previous finished guide.

Alternatively, all you need to do is download your favourite IRC client, connect to a server with the following address `7okic5x5do3uh3usttnqz9ek3uuoemdrwzto1hciwim9f947or6y.loki` with port `6667` and join channel `#lokinet`. 

### 4. Hosting a SNApp

This guide will help you host your own SNApp, to access the guide [click here](../Guides/HostingSNApps.md).

The guide will run you through:

- Finding your Lokinet pubkey.

- Creating a directory for your SNApp's code.

- Creating an `index.html` file with `Hello Lokinet` to display to the network.

- Serving your SNApp directory to the Lokinet and accessing it through your browser.

Follow the guide and report to the moderators with any issues on the #lokinet-help channel on [discord](https://discord.gg/67GXfD6). Dont forget to report your issues to the [Loki-network](https://github.com/loki-project/loki-network/issues) repository if you find them, especially if you solved the issue.