# Storage Server Testnet Guide

## Overview

This guide will tell you how to set up a staked node on testnet that handles lokid and storage-server functions.

## Step 1 - Server Preparation
### 1.1 Add new User

```
adduser <username>
```

Replacing `<username>` with a name you will log-in with. For this user-guide we will use `snode` as our username.

```
adduser snode
```

Once that’s done, run the following two commands to give our new account admin privileges and to change to such account.

```
usermod -aG sudo snode
```

```
sudo su - snode
```
### 1.2 Update and Upgrade Server
Run the two following commands to update and upgrade your server.
```
sudo apt update
```
```
sudo apt upgrade
```

## Step 2 - Loki Launcher
### 2.1 - Install NodeJS and Loki Launcher
In order to use the Loki Launcher we first need to install NodeJS.

Run the following command:
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
```
then run:

```
sudo apt-get install -y nodejs
```

Next we need to install the launcher with the following command:
```
sudo npm install -g loki-launcher
```

### 2.2 - Setting up your loki-launcher for Service Node
We now need to prequalify our server to be ready to run as a service node.

To do so run the following command:
```
loki-launcher prequal
```

### 2.2 - Configuring Launcher.ini
Next let's set our config file to enable the storage server and to set our network to testnet.

Create a folder for our launcher.ini file:
```
sudo mkdir /etc/loki-launcher
```

Next create the launcher.ini file:
```
sudo nano /etc/loki-launcher/launcher.ini
```

Paste the following into the launcher.ini file and save.
```
[blockchain]
network=test

[storage]
enabled=true
```

### 2.3 - Download Lokid binaries
We will download the Loki binaries by running the following command:
```
sudo loki-launcher download-binaries
```

### 2.4 - Start the Loki Launcher
To start the loki launcher run the following command:
```
sudo loki-launcher start
```
At this moment the launcher will output a table showing if everything is working properly:
```
┌────────────────┬──────────────────────────────────────────┐
│    (index)     │                  Values                  │
├────────────────┼──────────────────────────────────────────┤
│    launcher    │            'running as 16196'            │
│   blockchain   │            'running as 16207'            │
│    lokiKey     │ 'found at /home/snode/.loki/testnet/key' │
│ storageServer  │            'running as 16208'            │
│     socket     │   'running at /opt/loki-launcher/var'    │
│ blockchain_rpc │               'waiting...'               │
└────────────────┴──────────────────────────────────────────┘
```

Now the Loki-launcher is running we can access the launcher by running the following command:

```
sudo loki-launcher client
```

To exit out of the client click `CTRL + C`.

> Note: Loki-launcher will run in the background now and continue to sync with the blockchain. The only problem is if the system reboots we will need to relaunch the loki-launcher software. We can fix this by configuring the Launcher as a system service which makes it automatically start up if the server reboots, and restarts it if the software crashes for some reason.

## Step 3 - Loki-Launcher as a System Service
### 3.1 User permissions
We are going to need to fix our user "snode"s permissions with the loki-launcher.

> To do: Skip for people running as root

To do this we need to swap back to root:
```
su - root
```

Next run the following command: 
```
loki-launcher fix-perms <USER>
```
Replacing `<USER>` with `snode` or the username that you created.

The terminal should show the following:
```
setting permissions to snode
user snode uid is 1000
```
Once the permissions have been set let's change back to our other user `snode` by running the following command:
```
su - snode
```
### 3.2 Creating the Service File

To create our lokid.service file run the following command:
```
sudo nano /etc/systemd/system/lokid.service
```

Next copy the text below and paste it into your new file.
> To paste in putty you can right mouse click the terminal screen.

```
[Unit]
Description=lokilauncher
After=network-online.target

[Service]
Type=simple
User=snode
ExecStart=/usr/lib/node_modules/loki-launcher/index.js systemd-start
Restart=always
RestartSec=30s

[Install]
WantedBy=multi-user.target
```
If you chose a username other than snode then change snode in the `User=` line to the alternative username.

### 3.3 Enabling the Service File
Reload systemd manager configuration (to make it re-read the new service file):
```
sudo systemctl daemon-reload
```
Enable lokid.service so that it starts automatically upon boot:
```
sudo systemctl enable lokid.service
```
Start lokid.service:
```
sudo systemctl start lokid.service
```
and reboot your system to check if the service file is working correctly.
```
sudo reboot
```
Log back into your server and run the following command:
```
loki-launcher status
```
The terminal should output something similar to:
```
┌────────────────┬─────────────────────────────────────┐
│    (index)     │               Values                │
├────────────────┼─────────────────────────────────────┤
│    launcher    │          'running as 1118'          │
│   blockchain   │          'running as 1129'          │
│    lokiKey     │              'offline'              │
│ storageServer  │          'running as 1130'          │
│     socket     │ 'running at /opt/loki-launcher/var' │
│ blockchain_rpc │    'running on 127.0.0.1:38157'     │
└────────────────┴─────────────────────────────────────┘
```

> Note: There is a known bug that lokiKey shows as `offline`. Do not worry about this as you can run `loki-launcher config-view` to see where your lokid_key is stored.

Well done! You're loki-launcher is now setup. 

## Step 4 - Service Node Registration

### 4.1 - Staking

Log in (if not already connected) as the `snode` user on the VPS running the service node, then connect to the loki-launcher client:

```
loki-launcher client
```

Start the registration process by running the following interactive command:
```
prepare_registration
```
The daemon will output the current staking requirement and prompt you with an input to clarify whether you are an individual staker or you will be running a pool. Type `y` and click enter as we will be the sole staker.

The daemon will now prompt us for the Loki address of the operator. 

The daemon will now ask for a final confirmation, if you agree to the information provided type `y` and click enter.

The daemon will output a command for us to run looking similar to:

```
register_service_node 4294967292 T6TCCyDgjjbddtzwNGryRJ5HntgGYvqZTagBb2mtHhn7WWz7i5JDeqhFiHqu7ret56411ZJS7Thfeis718bVteBZ2UA6Y7G2d 4294967292 100.000000000 1535677391 ec3895ea70a4a91b5ec4b5e1df96a45e07046f1fb0123c754d98fb2d70f4529d 5bb35d7b8ab1acb943bc47913ada8f9d2e6d6e22264e57484a04c1bbfd461f0ee2e5435454cd9b7059b221eb506ce9ea4537ddd9faf1f1757e0ef611a41c0609
```

> *NOTE: You must run the command outputed by **your** daemon and not the command shown above.*

Copy the whole line of text and paste it into your notepad as we will need to run this command in our `loki-wallet-cli`.

Congratulations, You are now running a Service Node that handles both lokid and storage server functions.