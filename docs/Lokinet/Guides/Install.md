title: Loki Documentation | Lokinet Linux Install Guide
description: This guide describes building linux binaries from source. To download built binaries, head to lokinet.org for release files. 

# Initial Setup for Linux

Installing lokinet on linux is easy

## For debian based distros

add the debian repo:

```bash
sudo apt update 
sudo apt install curl 
curl -s https://deb.loki.network/public.gpg | sudo apt-key add -
echo "deb https://deb.loki.network $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/loki.list
apt update
```

... then install lokinet:

```bash
sudo apt install lokinet
```

You are now done, dns has been set up and you should be good to go.

## Linux Mint

Linux Mint is super easy for new users so they decided that special snowflake release names that require an extra step to use apt repos was a good idea. 

Check [this](https://linuxmint.com/download_all.php) lookup table and replace the linux mint release name with the ubuntu release name in `/etc/apt/sources.list.d/loki.list` .

## Other Distros

Build from source.

requirements:

* c++17 compiler
* cmake
* git
* pkg-config
* setcap
* sqlite3
* libunbound
* libuv 1.x
* zmq
* libsodium >= 1.0.18 

... then clone the repo and build it:


```bash
git clone --recursive https://github.com/loki-project/loki-network
mkdir loki-network/build
cd loki-network/build
cmake ..
make -j$(nproc)
sudo make install # this part is NOT optional
```

### Bootstraping Lokinet

To bootstrap lokinet run the following as normal user once:

```bash
lokinet -g
lokinet-bootstrap
```

then to run lokinet in the foreground as normal user:

```bash
lokinet
```

### Setting your DNS 

These steps are not needed when using the debian packages.

#### systemd-resolved

If you use `systemd-resolved` copy `contrib/systemd-resolved/lokinet.conf` to `/etc/systemd/resolve.d.conf/10-lokinet.conf` and restart systemd-resolved using `sudo systemctl restart systemd-resolved`

#### resolvconf

If you don't use systemd-resolved, use resolveconf.

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

---
### Finish

Well done, you have finished the guide. Jump back into the [Lokinet Public Testing Guide here](../PublicTestingGuide/#2-accessing-snapps).



