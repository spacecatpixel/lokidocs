title: Loki Documentation | Lokinet Router Guide | Linux
description: This guide walks you through the steps to run a Lokinet router. Lokinet is a new onion router with sybil resistance properties.

# Lokinet Router Guide
Author: Jason (jagerman), Johnathan (SonOfOtis)

Source: [https://deb.imaginary.stream/](https://deb.imaginary.stream/)

### Introduction

This document will tell you exactly how to set up and operate a Lokinet router. This document was written with non-developers in mind, so people new to linux or command line operations should be able to follow along without any trouble. 

If you feel confident around servers and the CLI, then skip to the [Express Setup Guide](#express-setup-guide)

You can of course run the Loki software on any operating system that you can get it to build on.

## Initial Setup for Linux

###1. Create a non-root User
Best practice when running a public server is to not run your software as the root user.  Although
it is possible to do everything as root, it is strongly recommended that you create a non-root user
on our VPS by running the following command:

```
adduser <username>
```

Replacing `<username>` with a name you will log-in with. For this user-guide we will use `lokinetRouter` as our username.

```
adduser lokinetRouter
```

The terminal will prompt you for a new password for our newly created user. Use a secure password that is different password from the root password.

Once the password has been set, the terminal will prompt for a few details about the individual running the user. You can just hit enter through each of the inputs as the details are not important for the purposes of running a Service Node.

Once that’s done, run the following two commands to give our new account admin privileges and to change to such account.

```
usermod -aG sudo lokinetRelay
```

```
sudo su - lokinetRelay
```

###2. Server Preparation

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

###3. Lokinet Router Installation

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

Then resync your package repositories with:

```
sudo apt update
```

Now install the lokinet router software:

```
sudo apt install lokinet-router
```

Congratulations, your server is running as a relay in the Lokinet!

## Express Setup Guide

```
adduser lokinetRouter
```

```
usermod -aG sudo lokinetRelay
```

```
sudo su - lokinetRelay
```

```
sudo apt install curl
```

```
curl -s https://deb.imaginary.stream/public.gpg | sudo apt-key add -
```

```
echo "deb https://deb.imaginary.stream $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/imaginary.stream.list
```

```
sudo apt update
```

```
sudo apt install lokinet-router
```