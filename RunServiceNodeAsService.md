# How to configure the Loki daemon as a service

*IMPORTANT*: This guide is a work in progress that may be updated. It may contain errors.

**USE AT YOUR OWN RISK!** 

This guide will help you set up the Loki daemon (lokid) as a service. 
By doing this, the Loki daemon will automatically start after a crash or reboot, which helps your Service Node keep running without undesired interruptions.

This guide details the process of  managing the Loki daemon as a regular system process rather than in a *screen* session.

- This guide has been tested on Ubuntu Server 18.04
- Read the guide carefully. You must change file path of your Loki daemon and username wherever needed.
- It is also recommended that you avoid running your Service Node as root user. Follow [Full Guide on Service Nodes - Set up Non-root User](https://github.com/loki-project/Meta/blob/master/SNFullGuide.md#optional---set-up-non-root-user) for directions on how to create a new user for this purpose. Be careful if your server is already running as you will have to move your Loki binaries folder and .loki hidden folder, where your Service Node public key is stored, from root's home path to your new user's home path.
- You can read [Jagerman's guide](https://jagerman.com/loki-systemd.txt) if you need a more in depth approach. 

## Table of Contents

- [Configuring the Loki daemon as a service for the first time](RunServiceNodeAsService.md#configuring-the-loki-daemon-as-a-service-for-the-first-time)
- [How to update Loki binaries when running daemon as a service](RunServiceNodeAsService.md#how-to-update-loki-binaries-when-running-daemon-as-a-service)
- [How to access Loki daemon in interactive mode when running daemon as a service](RunServiceNodeAsService.md#how-to-access-loki-daemon-in-interactive-mode-when-running-daemon-as-a-service)


## Configuring the Loki daemon as a service for the first time

Connect to your server via SSH (as is explained at [Full Guide on Service Nodes - Step 2 - Prepare your Server](https://github.com/loki-project/Meta/blob/master/SNFullGuide.md#step-2---prepare-your-server)) and copy & paste the following commands into the terminal window:

1. Create the lokid.service file: `sudo touch /etc/systemd/system/lokid.service`

2. Change the file permissions:
`sudo chmod 664 /etc/systemd/system/lokid.service`

3. Start editing the created empty file: 
`sudo nano /etc/systemd/system/lokid.service`

4. Copy the text between the #s below and paste it into your empty file.

```
###########################################################################################
[Unit]
Description=lokid service
After=network-online.target

[Service]
Type=simple
User=YOUR_USERNAME
ExecStart=/home/YOUR_USERNAME/YOUR_LOKI_FILES_FOLDER/lokid --non-interactive --service-node
Restart=always
RestartSec=30s

[Install]
WantedBy=multi-user.target
###########################################################################################
```

5. Modify YOUR_USERNAME and YOUR_LOKI_FILES_FOLDER in the text that is between #s.
You must change YOUR_USERNAME on two different places and YOUR_LOKI_FILES_FOLDER in one. 
If you are running your Service Node as root, `/home` must be removed from ExecStart path: `ExecStart=/root/YOUR_LOKI_FILES_FOLDER/lokid --non-interactive --service-node`
>     For Testnet, append the --testnet flag at the end of your modified ExecStart line. 

6. Once completed save and quit nano:
CTRL+X -> Y -> ENTER

7. Reload systemd manager configuration:
`sudo systemctl daemon-reload`

8. Stop the Loki daemon if it's running (see [NOTE](RunServiceNodeAsService.md#note)). Here you have to go into the *screen* session where you are running lokid and type:
`exit` + ENTER

9. Start lokid.service:
`sudo systemctl start lokid.service`

10. Enable lokid.service so that it starts automatically upon boot:
`sudo systemctl enable lokid.service`


Now, everything should be working. We won't have a Loki daemon interactive screen but we can use RPC to communicate with the service. The following commands should let us know if everything went fine:

- Test 1. Check lokid.service status:
`systemctl status lokid.service`

- Test 2. Check the Service Node status (remember to replace YOUR_LOKI_FILES_FOLDER with your own):
`~/YOUR_LOKI_FILES_FOLDER/./lokid print_sn_status` (`~` character replaces user's home directory full path, do not skip it!).
>     For Testnet,  append the --testnet flag at the end of the command. 

Your Loki daemon should start as a service on every reboot.

## How to update Loki binaries when running daemon as a service

To update your Loki node, a process like the one found at [Full Guide on Service Nodes - Updating loki](https://github.com/loki-project/Meta/blob/master/SNFullGuide.md#updating-loki) can be followed. The main inconvenience of this method is that lokid.service file has to be edited on every update as the Loki daemon file path is changed. So we are forced to run several additional steps that are  otherwise unnecessary. Because of this, two Loki daemon updating methods are described below:
- [Method based on "Full Guide on Service Nodes - Updating loki"](RunServiceNodeAsService.md#method-based-on-full-guide-on-service-nodes-updating-loki)
- [Updating Loki binaries without editing lokid.service file method](RunServiceNodeAsService.md#updating-loki-binaries-without-editing-lokidservice-file-method)


### Method based on "Full Guide on Service Nodes - Updating loki" ###

Connect to your server via SSH and:

1. Find the latest binary version, for example `1.0.4`. Check [https://github.com/loki-project/loki/releases/latest](https://github.com/loki-project/loki/releases/latest).

2. Stop the Loki daemon service: `sudo systemctl stop lokid.service` (see [NOTE](RunServiceNodeAsService.md#note))

3. Run an update on your machine (Linux based systems): `sudo apt-get update && sudo apt-get upgrade`

4. Download and unzip the latest binary: `wget https://github.com/loki-project/loki/releases/download/v<VERSION>/loki-linux-x64-<VERSION>.zip` and `unzip loki-linux-x64-<VERSION>.zip` (replace `<VERSION>` with the one found on step 1, `1.0.4` in our example).

5. Re-run steps 3 and 5 described in the [previous section](RunServiceNodeAsService.md#configuring-the-loki-daemon-as-a-service-for-the-first-time) in order to change YOUR_LOKI_FILES_FOLDER to `loki-linux-x64-<VERSION>`(replace `<VERSION>` with the one found on step 1, `1.0.4` in our example).

6. Re-run steps from 6 to 9 described in the [previous section](RunServiceNodeAsService.md#configuring-the-loki-daemon-as-a-service-for-the-first-time). You can skip step 8 as your Loki daemon should not be running at this point.


The following commands should let us know if everything went fine:

- Test 1. Check lokid.service status: `systemctl status lokid.service`

- Test 2. Check the Service Node status:
`~/loki-linux-x64-<VERSION>/./lokid print_sn_status` (replace `<VERSION>` with the one found on step 1, `1.0.4` in our example)..
>     For Testnet,  append the --testnet flag at the end of the command.


### Updating Loki binaries without editing lokid.service file method ###

If you do not want to edit your lokid.service file on every update, connect to your server via SSH and follow these alternative steps:

1. Stop the Loki daemon service: `sudo systemctl stop lokid.service` (see [NOTE](RunServiceNodeAsService.md#note))

2. Run an update on your machine (Linux based systems): `sudo apt-get update && sudo apt-get upgrade`

3. If your Loki binaries' folder name still looks like `loki-linux-x64-<VERSION>` then:
    - Rename it to `loki` to prevent the need of creating a new folder on every update: `mv ~/loki-linux-x64-<VERSION> ~/loki` (remember to replace `loki-linux-x64-<VERSION>` with your Loki binaries' folder name).
    - Re-run steps 3 and 5 described in the [previous section](RunServiceNodeAsService.md#configuring-the-loki-daemon-as-a-service-for-the-first-time) in order to change YOUR_LOKI_FILES_FOLDER to `loki`.
    - Re-run steps 6 and 7 described in the [previous section](RunServiceNodeAsService.md#configuring-the-loki-daemon-as-a-service-for-the-first-time).
    
4. Find the latest binary version, for example `1.0.4`. Check [https://github.com/loki-project/loki/releases/latest](https://github.com/loki-project/loki/releases/latest).

5. Download the latest binary: `wget https://github.com/loki-project/loki/releases/download/v<VERSION>/loki-linux-x64-<VERSION>.zip` (replace `<VERSION>` with the one found on step 4, `1.0.4` in our example).

6. Unzip the latest binary in `~/loki` folder (replace `<VERSION>` with the one found on step 4, `1.0.4` in our example):
    - If you want to be asked for confirmation everytime a file is going to be overwritten: `unzip loki-linux-x64-<VERSION>.zip -d ~/loki`
    - If you do not want to be asked, force overwriting: `unzip -o loki-linux-x64-<VERSION>.zip -d ~/loki`
    
7. Start lokid.service: `sudo systemctl start lokid.service`


The following commands should let us know if everything went fine:

- Test 1. Check lokid.service status: `systemctl status lokid.service`

- Test 2. Check the Service Node status (remember to replace YOUR_LOKI_FILES_FOLDER with your own):
`~/loki/./lokid print_sn_status` (`~` character replaces user's home directory full path, do not skip it!).
>     For Testnet,  append the --testnet flag at the end of the command.

- Test 3. Check what Loki daemon version is running now that this information is not in its folder's name: `~/loki/./lokid version`.
>     For Testnet,  append the --testnet flag at the end of the command. 


Skip step 3 in future updates.



## How to access Loki daemon in interactive mode when running daemon as a service

Whenever you want to access lokid in interactive mode, for example to run Service Node registration command,
you have to connect to your server via SSH and:

1. Stop the Loki daemon service: `sudo systemctl stop lokid.service` (see [NOTE](RunServiceNodeAsService.md#note))

2. Start lokid from shell: `~/YOUR_LOKI_FILES_FOLDER/./lokid` (`~` character replaces user's home directory full path, do not skip it!).
>     For Testnet,  append the --testnet flag at the end of the command.

3. Run the commands you need. For instance: `prepare_registration` if you are registering your Service Node.

4. Quit lokid by typing: `exit` + ENTER

5. Start the service again: `sudo systemctl start lokid.service`



---------------------------------------------------------------

### NOTE: 
If you have not updated your Loki binary files to the latest version yet you are encouraged to, since 1.0.0 or 1.0.1 users can run into timing issues that lead to deregistration with multiple consecutive daemon restarts.

