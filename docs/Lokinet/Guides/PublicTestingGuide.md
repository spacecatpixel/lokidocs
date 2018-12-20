# Lokinet Public Testing Guide

Thanks for your interest in the public testing phase of the Lokinet alpha. It’s taken many months to get to this point, but we’re grateful to everyone who wants to give this new type of mixnet a spin.

This guide will help you get Lokinet running on your machine, and give you some example tasks on things you can do to help put the software through its paces and help us find places where it needs to be fixed or can be improved. The more machines we get this running on, and the more traffic (and types of traffic) we can push through this alpha network, the better.

You can of course run the Loki software on any operating system that you can get it to build on, but for the purposes of this document, the instructions apply to running Lokinet on a remote Ubuntu 16.04 server. If that isn’t what you want to do, syntax and server set up will of course differ according to whatever OS you choose to run Lokinet from.

### Summary of Lokinet Requirements

This may change depending on new updates, so you should check here regularly, or follow our [telegram](https://t.me/LokiCommunity)/[discord](https://discord.gg/DN72VN) announcements channel. 

|Spec|Note|
|---|---|
|Latest Binary|[loki network](https://github.com/loki-project/loki-network/releases/latest)|
|Software| Ubuntu 16.04|
|Storage | 30-50gb|
|Ram | 2-4 gb|


## Table of Contents
- [Overview of Lokinet](#Overview)
- [Getting Help and Reporting Bugs Guidelines](#getting-help-and-reporting-bugs-guidelines)
	- [Getting Help](#getting-help)
	- [Reporting Bugs](#reporting-bugs)
- [User Guide](#user-guide)
	- Step 1 [Lokinet Installion](#1-lokinet-installion)
	- Step 2 [Accessing SNApps](#2-accessing-snapps)
	- Step 3 [Joining the lokinet IRC Chat](#3-joining-the-lokinet-irc-chat)
	- Step 4 [Hosting a SNApp](#4-hosting-a-snapp)

## Getting Help and Reporting Bugs Guidelines

The purpose of doing a public testing phase is to collect as much feedback as possible. To make this easier for both our testers and the Lokinet team, we ask that our testers stick to the following guidelines.

### Getting Help

If something in this guide isn’t making sense, or if you’re running into issues that you can’t identify on your own, the first place to go would be the #lokinet-help channel on [discord](https://discord.gg/67GXfD6). Alternatively, you can find help on our other communication channels such as [telegram](https://t.me/LokiCommunity), [twitter](https://twitter.com/loki_project), or [reddit](https://www.reddit.com/r/LokiProject/).


### Reporting Bugs

After you have sought out for help through our communication channels and have not come to any solutions we recommend opening up a issue ticket on the [Loki-network](https://github.com/loki-project/loki-network/issues) repository.

Please use the following Github Issue Template for any github issues created: [Github Issue Template Example](../../../Contributing/Issue_Template/).

## User Guide

We have laid out a set of guides which will take you through the installation of Lokinet to hosting your own SNApp.

We suggest going through each guide in the following order:

1. [Installation Guide](../../Lokinet/Guides/Install.md) - Initial setup for Linux.

2. [Accessing SNApps](../../Lokinet/Guides/AccessingSNApps.md) - Setting up your computer to access SNApps.

3. [Joining a lokinet IRC chat anonymously](../../../Lokinet/Guides/AccessingSNApps/#test-services) - Start chatting with the community on Lokinet.

4. [Hosting a SNApp](../../Lokinet/Guides/HostingSNApps.md) - How to host a SNApp on Lokinet.

### 1. Lokinet Installation

This guide will help prepare your computer to run Lokinet, to access the guide [click here](../Guides/Install.md).

The guide will cover:

- Setting up a non root user and giving this user admin access.

- Updating your Package lists and installing required updates.

- Installing build dependencies.

- Build the Lokinet software from the Github repository.

Follow the guide and report to the moderators with any issues on the #lokinet-help channel on [discord](https://discord.gg/67GXfD6). Dont forget to report any build issues if you find them, especially if you solved the issue.

### 2. Accessing SNApps

This guide will help you gain access to SNApps, to access the guide [click here](../Guides/AccessingSNApps.md).

The guide will cover:

- Adding the Lokinet DNS resolver.

- Initialising Lokinet for the first time.

- Running `./lokinet`.

- Accessing your first SNApp.

Follow the guide and report to the moderators with any issues on the #lokinet-help channel on [discord](https://discord.gg/67GXfD6). Dont forget to report your issues to the [Loki-network](https://github.com/loki-project/loki-network/issues) repository if you find them, especially if you solved the issue.

### 3. Joining the Lokinet IRC Chat

Once you can access a SNApp with a `.loki` suffix you can then join any IRC chat hosted on the Lokinet.

We suggest reading through the [#test-services](../../../Lokinet/Guides/AccessingSNApps/#test-services) section of the previous guide.

Alternatively, all you need to do is download your favourite IRC client, have `./lokinet` running and connect to a server with the following address `7okic5x5do3uh3usttnqz9ek3uuoemdrwzto1hciwim9f947or6y.loki` with port `6667` and join channel `#lokinet`. 

### 4. Hosting a SNApp

This guide will help you host your own SNApp, to access the guide [click here](../Guides/HostingSNApps.md).

The guide will cover:

- Finding your Lokinet pubkey.

- Creating a directory for your SNApp's code.

- Creating an `index.html` file with `Hello Lokinet` to display to the network.

- Serving your SNApp directory to the Lokinet and accessing it through your browser.

Follow the guide and report to the moderators with any issues on the #lokinet-help channel on [discord](https://discord.gg/67GXfD6). Dont forget to report your issues to the [Loki-network](https://github.com/loki-project/loki-network/issues) repository if you find them, especially if you solved the issue.

