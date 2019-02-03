# How to configure the Loki daemon as a service

*IMPORTANT*: This guide is a work in progress that may be updated. It may contain errors.

**USE AT YOUR OWN RISK!** 

This guide will help you set up the Loki daemon (lokid) as a systemd service so it can be managed as a regular system process rather than in a *screen* session. By doing this, the Loki daemon will automatically start after a crash or reboot, which helps your Service Node keep running without undesired interruptions.

- Given commands have been tested on Ubuntu Server 18.04 LTS.
- This guide assumes you have already downloaded and unzipped Loki binaries on your server. If you haven't, please read the [Full Guide On Service Nodes](https://loki-project.github.io/loki-docs/ServiceNodes/SNFullGuide/) before proceeding.
- Read the guide carefully. You must change file path of your Loki daemon and username wherever needed.
- It is also recommended that you avoid running your Service Node as root user. Follow [Full Guide on Service Nodes - Set up Non-root User](https://loki-project.github.io/loki-docs/ServiceNodes/SNFullGuide/#optional-set-up-non-root-user) for directions on how to create a new user for this purpose. Be careful if your server is already running as you will have to move your Loki binaries folder and .loki hidden folder, where your Service Node key is stored, from root's home path to your new user's home path.
- You can read [Jagerman's guide](https://jagerman.com/loki-systemd.txt) if you need a more in depth approach. 

## Table of Contents

- [Configuring the Loki daemon as a service for the first time](#configuring-the-loki-daemon-as-a-service-for-the-first-time)
- [How to update Loki binaries when running daemon as a service](#how-to-update-loki-binaries-when-running-daemon-as-a-service)
- [How to access Loki daemon in interactive mode when running daemon as a service](#how-to-access-loki-daemon-in-interactive-mode-when-running-daemon-as-a-service)


## Configuring the Loki daemon as a service for the first time

Connect to your server via SSH (as is explained at [Full Guide on Service Nodes - Step 2 - Prepare your Server](https://loki-project.github.io/loki-docs/ServiceNodes/SNFullGuide/#step-2-prepare-your-server)) and copy & paste the following commands into the terminal window:

<ol>
<li>Create the lokid.service file: <code>sudo touch /etc/systemd/system/lokid.service</code></li>
<li>Change the file permissions: <code>sudo chmod 664 /etc/systemd/system/lokid.service</code></li>
<li>Start editing the created empty file: <code>sudo nano /etc/systemd/system/lokid.service</code></li>
<li>Copy the text below and paste it into your empty file.</li>
</ol>
<pre><code>[Unit]
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
</code></pre>
<ol start="5">
<li>Modify YOUR_USERNAME and YOUR_LOKI_FILES_FOLDER in the pasted text.</li>
</ol>
<p>You must change YOUR_USERNAME on two different places and YOUR_LOKI_FILES_FOLDER in one.
If you are running your Service Node as root, <code>/home</code> must be removed from ExecStart path: <code>ExecStart=/root/YOUR_LOKI_FILES_FOLDER/lokid --non-interactive --service-node</code></p>
<blockquote>
<pre><code>For Testnet, append the --testnet flag at the end of your modified ExecStart line. 
</code></pre>
</blockquote>
<ol start="6">
<li>
<p>Once completed, save the file and quit nano:
CTRL+X -&gt; Y -&gt; ENTER</p>
</li>
<li>
<p>Reload systemd manager configuration:
<code>sudo systemctl daemon-reload</code></p>
</li>
<li>
<p>Stop the Loki daemon if it's running. Here you have to go into the <em>screen</em> session where you are running lokid and type:
<code>exit</code> + ENTER</p>
</li>
<li>
<p>Start lokid.service:
<code>sudo systemctl start lokid.service</code></p>
</li>
<li>
<p>Enable lokid.service so that it starts automatically upon boot:
<code>sudo systemctl enable lokid.service</code></p>
</li>
</ol>


Now, everything should be working and your Loki daemon should start as a service on every reboot. We won't have a Loki daemon interactive screen but we can use RPC to communicate with the service. The following commands should let us know if everything went fine:

- Test 1. Check lokid.service status: `systemctl status lokid.service`. The output should show you that lokid.service is loaded and active:

```
● lokid.service - lokid service
   Loaded: loaded (/etc/systemd/system/lokid.service; enabled; vendor preset: enabled)
   Active: active (running) since Mon 2018-10-15 16:07:35 UTC; 15h ago
 Main PID: 1669 (lokid)
    Tasks: 22 (limit: 4648)
   CGroup: /system.slice/lokid.service
           └─1669 /home/snode/loki/lokid --non-interactive --service-node
```

- Test 2. Check the Service Node status (remember to replace YOUR_LOKI_FILES_FOLDER with your own):
`~/YOUR_LOKI_FILES_FOLDER/lokid print_sn_status` (`~` character replaces user's home directory full path, do not skip it!).
>     For Testnet,  append the --testnet flag at the end of the command. 


## How to update Loki binaries when running daemon as a service

To update your Loki node, a process like the one found at [Full Guide on Service Nodes - Updating loki](https://github.com/loki-project/Meta/blob/master/SNFullGuide.md#updating-loki) can be followed. The main inconvenience of this method is that lokid.service file has to be edited on every update as the Loki daemon file path is changed. So we are forced to run several additional steps that are  otherwise unnecessary. Because of this, two Loki daemon updating methods are described below:

- [Method based on "Full Guide on Service Nodes - Updating loki"](#method-based-on-full-guide-on-service-nodes-updating-loki).

- [Updating Loki binaries without editing lokid.service file method](#updating-loki-binaries-without-editing-lokidservice-file-method).


### Method based on "Full Guide on Service Nodes - Updating loki" ###

Connect to your server via SSH and:

1. Find the latest binary version, for example `2.0.3`. Check [https://github.com/loki-project/loki/releases/latest](https://github.com/loki-project/loki/releases/latest)

2. Stop the Loki daemon service: `sudo systemctl stop lokid.service`

3. Run an update on your machine (Linux based systems): `sudo apt-get update && sudo apt-get upgrade`

4. Download and unzip the latest binary: `wget https://github.com/loki-project/loki/releases/download/v<VERSION>/loki-linux-x64-<VERSION>.zip` and `unzip loki-linux-x64-<VERSION>.zip` (replace `<VERSION>` with the one found on step 1, `2.0.3` in our example).

5. Re-run steps 3 and 5 described in the [previous section](RunServiceNodeAsService.md#configuring-the-loki-daemon-as-a-service-for-the-first-time) in order to change YOUR_LOKI_FILES_FOLDER to `loki-linux-x64-<VERSION>`(replace `<VERSION>` with the one found on step 1, `2.0.3` in our example).

6. Re-run steps from 6 to 9 described in the [previous section](RunServiceNodeAsService.md#configuring-the-loki-daemon-as-a-service-for-the-first-time). You can skip step 8 as your Loki daemon should not be running at this point.


The following commands should let us know if everything went fine:

- Test 1. Check lokid.service status: `systemctl status lokid.service`. The output should show you that lokid.service is loaded and active.

- Test 2. Check the Service Node status:
`~/loki-linux-x64-<VERSION>/lokid print_sn_status` (replace `<VERSION>` with the one found on step 1, `2.0.3` in our example).
> For Testnet,  append the --testnet flag at the end of the command.


### Updating Loki binaries without editing lokid.service file method ###

If you do not want to edit your lokid.service file on every update, connect to your server via SSH and follow these alternative steps:

1. Stop the Loki daemon service: `sudo systemctl stop lokid.service`

2. Run an update on your machine (Linux based systems): `sudo apt-get update && sudo apt-get upgrade`

3. If your Loki binaries' folder name still looks like `loki-linux-x64-<VERSION>` then:
    - Rename it to `loki` to prevent the need of creating a new folder on every update: `mv ~/loki-linux-x64-<VERSION> ~/loki` (remember to replace `loki-linux-x64-<VERSION>` with your Loki binaries' folder name).
    - Re-run steps 3 and 5 described in the [previous section](#configuring-the-loki-daemon-as-a-service-for-the-first-time) in order to change YOUR_LOKI_FILES_FOLDER to `loki`.
    - Re-run steps 6 and 7 described in the [previous section](#configuring-the-loki-daemon-as-a-service-for-the-first-time).
    
4. Find the latest binary version, for example `2.0.3`. Check [https://github.com/loki-project/loki/releases/latest](https://github.com/loki-project/loki/releases/latest)

5. Download the latest binary: `wget https://github.com/loki-project/loki/releases/download/v<VERSION>/loki-linux-x64-<VERSION>.zip` (replace `<VERSION>` with the one found on step 4, `2.0.3` in our example).

6. Unzip the latest binary in `~/loki` folder (replace `<VERSION>` with the one found on step 4, `2.0.3` in our example):
    - If you want to be asked for confirmation everytime a file is going to be overwritten: `unzip -j loki-linux-x64-<VERSION>.zip 'loki-linux-x64-<VERSION>/*' -d ~/loki`
    - If you do not want to be asked, force overwriting: `unzip -j -o loki-linux-x64-<VERSION>.zip 'loki-linux-x64-<VERSION>/*' -d ~/loki`

7. Start lokid.service: `sudo systemctl start lokid.service`


The following commands should let us know if everything went fine:

- Test 1. Check lokid.service status: `systemctl status lokid.service`. The output should show you that lokid.service is loaded and active.

- Test 2. Check the Service Node status:
`~/loki/lokid print_sn_status` (`~` character replaces user's home directory full path, do not skip it!).
> For Testnet,  append the --testnet flag at the end of the command.

- Test 3. Check what Loki daemon version is running now that this information is not in its folder's name: `~/loki/lokid version`.
> For Testnet,  append the --testnet flag at the end of the command. 


Skip step 3 in future updates.



## How to prepare a service node registration command when running daemon as a service

When lokid runs as a service, you can interact with it by running a second `lokid CMD` to talk to
the running loki daemon, such as the `~/loki/lokid print_sn_status` command given above.  As of loki
2.0.3, this includes the `prepare_registration` command:

`~/loki/lokid prepare_registration`

which will ask you various questions (amount to stake, list of contributors, etc.) to generate a
registration command to copy and paste into your command-line wallet to submit the service node
registration.  It is not necessary to stop or restart the service node before or after using this
command.
