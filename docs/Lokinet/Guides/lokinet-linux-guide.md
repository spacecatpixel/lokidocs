title: Loki Documentation | Lokinet Linux Install Guide | Onion Routing
description: This guide walks you through the steps to get Lokinet, a new onion router with sybil resistance properties, working on Linux.

# LokiNET install guide - Linux
Author: Jason (jagerman), Johnathan (SonOfOtis)

Source: [https://deb.imaginary.stream/](https://deb.imaginary.stream/)

## Initial Setup for Linux

### 1. Computer Preparation
We should update our package lists, the below command downloads the package lists from the repositories and "updates" them to get information on the newest versions of packages and their dependencies. It will do this for all repositories and PPAs.

Run the following command:

```
sudo apt-get update
```

You will notice a bunch of package lists were downloaded, once this is complete run the below command to fetch new versions of any packages we currently have installed on the system.

```
sudo apt-get upgrade
```

You will be prompted to authorise the use of disk space, type `y` and enter to authorise.

> Note: If you are prompted at any time that a version of any file is available then click the up and down arrows until you are hovering over install the package maintainer’s version and click enter.

If you do not have curl installed on your computer then let's install it as we will use it later:

```
sudo apt install curl
```

### 2. Installation

You only need to do this step the first time you want to set up the repository; when you've done it once, the repository will automatically update whenever you fetch new system updates.

To add the Loki `apt` repository run the following commands:

The following command installed Jagermans public key used to sign the Binaries.

```
curl -s https://deb.imaginary.stream/public.gpg | sudo apt-key add -
```

The next command tells `apt` where to find the packages:

```
echo "deb https://deb.imaginary.stream $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/imaginary.stream.list
```

> If your deb is not recognised then check out [troubleshooting](#troubleshooting).

Then resync your package repositories with:

```
sudo apt update
```
Now install lokinet:

```
sudo apt install lokinet
```

Congratulations, Lokinet is now installed and running in the background. 

Head over to the accessing SNApps guide [here](../PublicTestingGuide/#2-accessing-snapps) to access a SNApp.

Next steps will teach us how to stop and start lokinet manually.

--- 

## Starting and Stopping lokinet.

To start lokinet manually run the following command:

```
sudo systemctl start lokinet
```

and to stop lokinet manually run the following command:

```
sudo systemctl stop lokinet
```

---

## Troubleshooting

### Failed to decode boostrap RC

If you find your bootstrap has not configured properly run the following command:
```
sudo lokinet-bootstrap
```

and then restart your lokinet

```
sudo systemctl restart lokinet
```


### Linux Mint does not work with (lsb-release)

It has been reported that Linux Mint users can use the following command instead of the second command in [2. Installation](#2-installation):

```
echo "deb https://deb.imaginary.stream bionic main" | sudo tee /etc/apt/sources.list.d/imaginary.stream.list
```

### Setting your DNS 

If you are having issues with resolving .loki addresses then we need to edit your resolv.conf files and add your dns resolver.

#### Method 1

Run the following command:
```
apt install resolvconf
```

Then restart lokinet:

```
systemctl restart lokinet
```

#### Method 2
If Method 1 does not work we will need to add our nameserver manually.

Run the following command: 

```
sudo nano /etc/resolvconf/resolv.conf.d/head
```

Add the following at the bottom of this file:

```
nameserver 127.3.2.1
```

Once that line is added hold CTRL and click x. 
Click enter to confirm the file changes.

Next we need to update our /etc/resolv.conf file by running the command:

```
sudo resolvconf -u
```

Then restart lokinet:

```
systemctl restart lokinet
```

--- 

## Updating Lokinet


To update lokinet run the following command:

```
sudo apt update && sudo apt install lokinet && sudo lokinet-bootstrap && sudo systemctl restart lokinet
```

---


## Finish

Well done, you have finished the guide. Jump back into the [Lokinet Public Testing Guide here](../PublicTestingGuide/#2-accessing-snapps).



