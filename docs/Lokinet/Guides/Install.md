# LokiNET install guide - Linux

To Compile Lokinet from the [lastest release](https://github.com/loki-project/loki-network/releases) for your platform.

There are no portable binary releases at this time.

If you encounter a compiler error, report it [here](https://github.com/loki-project/loki-network/issues) using the following template found [here](../../../Contributing/Issue_template/)

##Initial Setup for Linux

###1. Set up Non-root User

Best practice when running a public server is to not run your software as the root user. We will create a non-root user to our VPS by running the following command.

`sudo adduser <username>`

Replacing `<username>` with a name you will log-in with. For this user-guide we will use snode as our username.

`sudo adduser lokitestnet`

The terminal will prompt you for a new password for our newly created user. Use a different password to the root password.

Once the password has been set, the terminal will prompt for a few details about the individual running the user. You can hit enter through each of the inputs as the details are not important for the purposes of accessing Lokinet.

Once that’s done, run the following two commands to give our new account admin privileges and to change to such account.

```
sudo usermod -aG sudo lokitestnet
su - lokitestnet
```

###2. Computer Preparation
We should update our package lists, the below command downloads the package lists from the repositories and "updates" them to get information on the newest versions of packages and their dependencies. It will do this for all repositories and PPAs.

Run the following command:

`sudo apt-get update`

You will notice a bunch of package lists were downloaded, once this is complete run the below command to fetch new versions of any packages we currently have installed on the system.

`sudo apt-get upgrade`

You will be prompted to authorise the use of disk space, type `y` and enter to authorise.

> Note: If you are prompted at any time that a version of any file is available then click the up and down arrows until you are hovering over install the package maintainer’s version and click enter.

###3.  Dependencies
You will need to install some build dependencies:

`sudo apt install build-essential cmake rapidjson-dev libcap-dev wget git resolvconf`


Once you’ve installed the dependencies we will now clone the loki-network github:
```
git clone https://github.com/loki-project/loki-network
cd loki-network
```
###4. Build for normal operation
Compile as such for initialisation.

```
sudo make
sudo make install
```

### Optional: Building a debian package

If you want a debian package install the debian maintainer packages needed

    $ sudo apt install debuild

...and then build one like so:

    $ debuild -us -b





