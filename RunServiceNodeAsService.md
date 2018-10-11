# How to configure the Loki daemon as a service

*IMPORTANT*: This guide is a work in progress that may be updated. It can contain errors.

**USE AT YOUR OWN RISK!** 

This guide will help you set up the Loki daemon (lokid) as a service. 
By doing this, the Loki daemon will automatically start after a crash or reboot, which helps your Service Node keep running without undesired interruptions.

This guide details the process of  managing the Loki daemon as a regular system process rather than in a *screen* session.

- This guide has been tested on Ubuntu Server 18.04
- Read the guide carefully. You must change file path of your Loki daemon and username wherever needed.
- It is also recommended that you do not run your Service Node as root user. Follow [Full Guide on Service Nodes - Set up Non-root User](https://github.com/loki-project/Meta/blob/master/SNFullGuide.md#optional---set-up-non-root-user) for directions on how to create a new user for this purpose.
- You can read [Jagerman's guide](https://jagerman.com/loki-systemd.txt) if you need a more in depth approach. 

## Table of Contents

- [Configuring the Loki daemon as a service for the first time](RunServiceNodeAsService.md#configuring-the-loki-daemon-as-a-service-for-the-first-time)
- [How to update Loki binaries when running daemon as a service](RunServiceNodeAsService.md#how-to-update-loki-binaries-when-running-daemon-as-a-service)
- [How to access Loki daemon in interactive mode when running daemon as a service](RunServiceNodeAsService.md#how-to-access-loki-daemon-in-interactive-mode-when-running-daemon-as-a-service)


## Configuring the Loki daemon as a service for the first time

### Copy & paste the following commands:

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
WorkingDirectory=/home/YOUR_USERNAME/YOUR_LOKI_FILES_FOLDER/
ExecStart=/home/YOUR_USERNAME/YOUR_LOKI_FILES_FOLDER/lokid --non-interactive --service-node
Restart=always

[Install]
WantedBy=multi-user.target
###########################################################################################
```

5. Modify YOUR_USERNAME and YOUR_LOKI_FILES_FOLDER for the text that is between #s.
You must change YOUR_USERNAME on two different places and YOUR_LOKI_FILES_FOLDER in one. 
If you are running your Service Node as root, `/home` must be removed from ExecStart path: `ExecStart=/root/YOUR_LOKI_FILES_FOLDER/lokid --non-interactive --service-node`
>     For Testnet, append the --testnet flag at the end of your modified ExecStart line. 

6. Once completed save and quit nano:
CTRL+X -> Y -> ENTER

7. Reload systemd manager configuration:
`sudo systemctl daemon-reload`

8. Stop the Loki daemon if it's running (see [NOTE](RunServiceNodeAsService.md#note)). Here you have to go to the *screen* session where you're running lokid and type:
`exit` + ENTER

9. Start lokid.service:
`sudo systemctl start lokid.service`

10. Enable lokid.service so that it starts automatically upon boot:
`sudo systemctl enable lokid.service`

Now, everything should be working. We will not have a Loki daemon interactive screen but we can use RPC to communicate with the service. The following commands should let us know if everything went fine:

- Test 1. Check lokid.service status:
`systemctl status lokid.service`

- Test 2. Check the Service Node status (remember to replace YOUR_USER and YOUR_LOKI_FILES_FOLDER with your own):
`/home/YOUR_USERNAME/YOUR_LOKI_FILES_FOLDER/./lokid print_sn_status`. If you are running your Service Node as root, `/home` must be removed from the command: `/root/YOUR_LOKI_FILES_FOLDER/./lokid print_sn_status`
>     For Testnet,  append the --testnet flag at the end of the command. 

Your Loki daemon should start as a service on every reboot.



## How to update Loki binaries when running daemon as a service

To update your Loki node the process is:

1. Find the latest binary version, for example `1.0.4`. Check [https://github.com/loki-project/loki/releases/latest](https://github.com/loki-project/loki/releases/latest).
2. Stop the Loki daemon service: `sudo service lokid stop`
3. Run an update on your machine (Linux based systems): `sudo apt-get update && sudo apt-get upgrade`
4. Download and unzip the latest binary: `wget https://github.com/loki-project/loki/releases/download/v<VERSION>/loki-linux-x64-<VERSION>.zip unzip loki-linux-x64-<VERSION>.zip` (replace `<VERSION>` with the one found on step 1, `1.0.4` in our example).
5. Re-run steps 3 and 5 described in the previous section in order to change YOUR_LOKI_FILES_FOLDER.
6. Re-run steps from 6 to 9 described in the previous section. You can skip step 8 as your Loki daemon should not be running at this point.

>If you update Loki binaries in a way that files path is not changed, you can just run `sudo service lokid stop` before overwriting the files and `sudo service lokid start` after. As long as lokid file path remains unchanged, there is no need to edit lokid.service file.



## How to access Loki daemon in interactive mode when running daemon as a service

Whenever you want to access lokid in interactive mode, for example to run Service Node registration command,
you have to: 

1. Stop the Loki daemon service: `sudo service lokid stop` (see [NOTE](RunServiceNodeAsService.md#note))
2. Start lokid from shell: `/home/YOUR_USERNAME/YOUR_LOKI_FILES_FOLDER/./lokid`. If you are running your Service Node as root, `/home` must be removed from the command: `/root/YOUR_LOKI_FILES_FOLDER/./lokid`
>     For Testnet,  append the --testnet flag at the end of the command.

3. Run the commands you need. For instance: `prepare_registration` if you are registering your Service Node.
4. Quit lokid by typing: `exit` + ENTER
5. Start the service again: `sudo service lokid start`



---------------------------------------------------------------

### NOTE: 
If you have not updated your Loki binary files to the latest version yet you are encouraged to, since 1.0.0 or 1.0.1 users can run into timing issues that lead to deregistration with multiple consecutive daemon restarts.

