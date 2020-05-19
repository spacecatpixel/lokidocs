title: Loki Documentation | Lokinet Public Testing Guide
description: This guide will help you get Lokinet running on your machine, and give you some example tasks on things you can do to help put the software through its paces and help us find places where it needs to be fixed or can be improved.

# Lokinet Public Testing Guide

Thanks for your interest in the public testing phase of the Lokinet alpha. It’s taken many months to get to this point, but we’re grateful to everyone who wants to give this new type of onion router a spin.

This guide will help you get Lokinet running on your machine, and give you some example tasks on things you can do to help put the software through its paces and help us find places where it needs to be fixed or can be improved. The more machines we get this running on, and the more traffic (and types of traffic) we can push through this alpha network, the better.

You can run the Loki software on any operating system. The binaries available for Linux (as .deb package), Windows 32 and 64-bit, OSX on [lokinet.org](https://lokinet.org/) website.

## Table of Contents
- [Overview of Lokinet](#Overview)
- [Getting Help and Reporting Bugs Guidelines](#getting-help-and-reporting-bugs-guidelines)
	- [Getting Help](#getting-help)
	- [Reporting Bugs](#reporting-bugs)
- [User Guide](#user-guide)
	- Step 1 [Lokinet Installation](#1-lokinet-installation)
	- Step 2 [Accessing SNApps](#2-accessing-snapps)
	- Step 3 [Joining the lokinet IRC Chat](#3-joining-a-lokinet-irc-chat)
	- Step 4 [Hosting a SNApp](#4-hosting-a-snapp)

## Getting Help and Reporting Bugs Guidelines

The purpose of doing a public testing phase is to collect as much feedback as possible. To make this easier for both our testers and the Lokinet team, we ask that our testers stick to the following guidelines.

### Getting Help

If something in this guide isn’t making sense, or if you’re running into issues that you can’t identify on your own, the first place to go would be the #lokinet-help channel on [discord](https://discord.gg/67GXfD6). Alternatively, you can find help on our other communication channels such as [telegram](https://t.me/LokiCommunity), [twitter](https://twitter.com/loki_project), or [reddit](https://www.reddit.com/r/LokiProject/).


### Reporting Bugs

After you have sought out for help through our communication channels and have not come to any solutions we recommend opening up a issue ticket on the [Loki-network](https://github.com/loki-project/loki-network/issues) repository.

Please use the following Github Issue Template for any github issues created: [Github Issue Template Example](../../../Contributing/Issue_Template/).

## User Guide

We have laid out a set of guides which will take you through the installation of Lokinet to hosting your own [SNApp](../../Lokinet/SNApps.md).

We suggest going through each guide in the following order:

### 1. Lokinet Installation

This guide will help prepare your computer to run Lokinet, depending on your system jump into the following guide:

##### Linux Installation

To access the guide [click here](../Guides/lokinet-linux-guide.md)

The guide will cover:

- Setting up a non root user and giving this user admin access.

- Updating your Package lists and installing required updates.

- Install Lokinet 

##### Windows Installation

To access the guide [click here](../Guides/lokinet-windows-guide.md).

This guide will cover:

- Setting up a non root user.

- Downloading the latest windows installer.

- Installing the Lokinet Launcher.

- Configuring DNS server.

Follow the guide and report to the moderators with any issues on the #lokinet-help channel on [discord](https://discord.gg/67GXfD6). Dont forget to report any build issues if you find them, especially if you solved the issue.

##### Mac OSX Installation

To access the guide [click here](../Guides/lokinet-mac-guide.md).

This guide will cover:

- Downloading the latest Mac OSX installer.

- Installing the Lokinet Launcher.

- Configuring DNS server.

Follow the guide and report to the moderators with any issues on the #lokinet-help channel on [discord](https://discord.gg/67GXfD6). Dont forget to report any build issues if you find them, especially if you solved the issue.


### 2. Accessing SNApps

This guide will help you gain access to SNApps, to access the guide [click here](../Guides/AccessingSNApps.md).

The guide will cover:

- Initialising Lokinet for the first time.

- Running `./lokinet`.

- Accessing your first SNApp.

Follow the guide and report to the moderators with any issues on the #lokinet-help channel on [discord](https://discord.gg/67GXfD6). Dont forget to report your issues to the [Loki-network](https://github.com/loki-project/loki-network/issues) repository if you find them, especially if you solved the issue.

### 3. Joining a Lokinet IRC Chat
This guide will help you gain access to lokinet IRC channels, to access the guide [click here](../Guides/LokinetIRC.md).

Alternatively, all you need to do is download your favourite IRC client, have `./lokinet` running and connect to a server with the following address `http://dw68y1xhptqbhcm5s8aaaip6dbopykagig5q5u1za4c7pzxto77y.loki ` with port `6667` and join channel `#lokinet`. 

### 4. Hosting a SNApp

This guide will help you host your own SNApp, to access the guide [click here](../Guides/HostingSNApps.md).

The guide will cover:

- Finding your Lokinet pubkey.

- Editing our `lokinet.ini` file to enable persistent SNApps.

- Creating a directory for your SNApp's code.

- Creating an `index.html` file with `Hello Lokinet` to display to the network.

- Serving your SNApp directory to the Lokinet and accessing it through your browser.

Follow the guide and report to the moderators with any issues on the #lokinet-help channel on [discord](https://discord.gg/67GXfD6). Dont forget to report your issues to the [Loki-network](https://github.com/loki-project/loki-network/issues) repository if you find them, especially if you solved the issue.
