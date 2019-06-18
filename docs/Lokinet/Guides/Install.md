# LokiNET install guide - Linux

This guide describes building linux binaries from source. Do download built binaries, head to [lokinet.org](https://lokinet.org/) for release files. 

To Compile, download the [lastest release](https://github.com/loki-project/loki-network/releases) of Lokinet for your platform.

If you encounter a compiler error, report it [here](https://github.com/loki-project/loki-network/issues) using the following template found [here](../../../Contributing/Issue_template/)


##Initial Setup for Linux

###1. Set up Non-root User

Best practice when running a public server is to not run your software as the root user. We will create a non-root user to our server by running the following command.

`sudo adduser <username>`

Replacing `<username>` with a name you will log-in with. For this user-guide we will use `lokitestnet` as our username.

If you use the same username the command will look like:

`sudo adduser lokitestnet`

Once ran the terminal will prompt you for a new password for your newly created user. Use a different password to the root password.

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
You will need to install some build dependencies, run the following command to install all the build dependencies required for Lokinet:

`sudo apt install build-essential cmake libcap-dev wget git resolvconf curl libuv1-dev`


Once you’ve installed the dependencies we will now clone the loki-network repository:
```
git clone https://github.com/loki-project/loki-network
cd loki-network
```
###4. Build for normal operation
Run the following two commands to build for operation:

```
make
sudo make install
```
---

### Optional: Building a debian package

If you want a debian package install the debian maintainer packages needed

    $ sudo apt install debuild

...and then build one like so:

    $ debuild -us -b
---
### Finish

Well done, you have finished the guide. Jump back into the [Lokinet Public Testing Guide here](../PublicTestingGuide/#2-accessing-snapps).



