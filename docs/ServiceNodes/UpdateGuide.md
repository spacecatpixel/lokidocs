title: Loki Documentation | Service Node upgrade from Legacy to Launcher
description: This document is for Service Node Operators who have used the previous Service Node Full Guide and wish to update to the Loki-launcher.

# Update Guide
This document is for Service Node Operators who have used the previous Service Node Full Guide and wish to update to the Loki-launcher.

> Note: This Guide is to help update a running lokid 3.0.6 Service Node to the loki-launcher.

> If you are using any screen's you will need kill the screens and go back to the Service Node Full Guide and follow it once more.

## Step 1: Load and Update your VPS.

If you are updating your Service Node you would by now have a good understanding of how to log in to your server. If you don't check out how you prepared your server in this guide [here](../SNFullGuide/#step-2-prepare-your-server).

Once we have logged in to our VPS we should update our package lists, the below command downloads the package lists from the repositories and "updates" them to get information on the newest versions of packages and their dependencies. It will do this for all repositories and PPAs.

```
sudo apt update
```

You will notice a bunch of package lists were downloaded, once this is complete run the below command to fetch new versions of any packages we currently have installed on the system.

```
sudo apt upgrade
```

You will be prompted to authorise the use of disk space, type `y` and enter to authorise.

If you are prompted during the upgrade that a new version of any file is available then click the up and down arrows until you are hovering over `install the package maintainer’s version` and click enter.

<center>![Terminal window](../assets/snode2.JPG)</center>

Alright, good to go. Our server is now up to date. On to the fun part!

## Step 2: Install Node JS

In order to use the Loki Launcher we first need to install NodeJS.

Run the following command:
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
```
then
```
sudo apt-get install -y nodejs
```
## Step 3: Loki Launcher
### 3.1 Install
Run the following command to install loki-launcher
```
sudo npm install -g loki-launcher
```
### 3.2 Download lokid binaries

Now loki-launcher is installed we should download the lokid binary:
```
sudo loki-launcher download-binaries
```

### 3.3 Fix loki-launcher permissions
Let's change to root to make these changes:
```
su - root
```

Now while in root let's give our user `snode` the required permissions to run the loki-launcher.

```
sudo loki-launcher fix-perms snode
```

Now let's change back to user snode.

```
su - snode
```

## Step 4: lokid.service file
Next we're going to have to stop our lokid.service file and update it to launch the launcher instead of lokid.

### 4.1: Stop existing lokid.service file

Stop your existing service node:
```
sudo systemctl stop lokid.service
```
#### 4.2 - Setting up your loki-launcher for Service Node
We now need to prequalify our server to be ready to run as a service node.

To do so run the following command:
```
loki-launcher prequal
```

In most cases this will let us know we are good to deploy our Service Node. Troubleshooting will be required at this point if an error message pops up.

### 4.3: Check-systemd

Run the check-systemd to make systemd now launch the launcher instead of lokid:
```
sudo loki-launcher check-systemd
```

### 4.4 Update Service file

Make sure the service is up to date:
```
sudo systemctl daemon-reload
```

### 4.5 Start the new lokid.service file

```
sudo systemctl start lokid.service
```

At this point it is wise to restart your system with the following command:

```
sudo reboot
```

Once the system has restarted it will reboot the new version of `lokid.service`.

Log back in to your VPS and double check the new version of `lokid.service` is running smoothly by running the following command:
```
sudo journalctl -u lokid.service -af
```

You can now access your `lokid` daemon by running the following command:
```
loki-launcher client
```
This will allow you to parse commands into your daemon, for example: `print_sn_key` e.t.c.

> *NOTE: If you’re nervous about trusting the binaries or the download link, you should build it from source yourself. Instructions for that can be found in the README of [https://github.com/loki-project/loki](https://github.com/loki-project/loki)*

Excellent! You have now updated your Service Node.

## Additional Information

### Default Directories for Loki Files

|         Name         |            Directory            |
|:--------------------:|:-------------------------------:|
|    Blockchain Data   |       `/home/<user>/.loki/`       |
|    Lokid Binaries    |      `/opt/loki-launcher/bin`     |
| Launcher Config File | `/etc/loki-launcher/launcher.ini` |
| Lokid Logs           | `/home/<user>/.loki/`             |