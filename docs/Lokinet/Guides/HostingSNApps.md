title: Loki Documentation | Hosting a Hidden Service or SNApp on the Lokinet.
description: The function of SNApps is similar to so-called hidden services in Tor which have flourished. They provide users with a way to interact fully within the lokinet providing an even higher-degree of anonymity than can be achieved when accessing externally hosted content.

# Hosting a SNApp
## 1. Preparing your lokinet address

Depending on your desired outcome you may want to only run a one time SNApp or a SNApp that continues to persistently use the same .loki pubkey.

To create a temporary SNApp continue to [1.1 Temporary SNApp](#11-temporary-snapp), else if you want to run a persistent SNApp coninue to [1.2 Persistent SNApp](#12-persistent-snapp).

### 1.1 Temporary SNApp
When you run `./lokinet` your terminal will show a bunch of outputs. 

You are looking for the line with `lokitun0` in it. The line should look like the following:

```
[NFO] unnamed (868) Mon Dec 17 15:30:09 2018 AEDT llarp/handlers/tun.cpp:419    default:gtwemaxbfogy5absnjizmoafdngadknpagnoteoir7743ys4xbyo.loki set lokitun0 to have address 172.16.10.1:0
```

This loki address shown within this output will be the url to your SNApp and the local address to bind SNApps on. You can share the `.loki` address to individuals who you want to access your SNApp.

You can proceed to [2. Creating your SNApp](#2-creating-your-snapp).

### 1.2 Persistent SNApp
Open up your `lokinet.ini` file and add a path to where your SNApp key files will be stored.

```
sudo nano ~/.lokinet/lokinet.ini
```

Scroll down to your `[network]` section and add the following line:
```
keyfile=/home/<user>/.lokinet/snappkey.private
```

Replacing `<user>` with your computer username, alternatively you can set the filepath to wherever you want your SNApp private key to be stored.

Now when you run `lokinet` within a terminal it will generate your `snappkey.private` file in the directory you have set.

It will also output your SNApp pubkey which you can share to other individuals who you want accessing your SNApp. Look for the line for your SNApp pubkey:

```
[NFO] (762) Fri Jan 18 10:05:24 2019 AEDT llarp/handlers/tun.cpp:417    default:sxf7fx9eb4i3u5gyxpkka6wufzfsxyxsuep54c4kqk8axsfo17go.loki set lokitun0 to have address 172.16.10.1:0
```

In this circumstance your pubkey would be `sxf7fx9eb4i3u5gyxpkka6wufzfsxyxsuep54c4kqk8axsfo17go.loki`. 

This address will be your SNApp address until you change the path to your SNApps private key.

## 2. Creating your SNApp
Create a new directory within your home folder by running the following command in a terminal:

```
mkdir ~/snapp/
```
Create an index file within your new folder.

```
touch ~/snapp/index.html
```

This file will hold the content of what will be served on your SNApp. Run the following command to access your new index.html file.

```
vi ~/snapp/index.html
```

Click `a` to start adding text to your index.html file.

Type out `Hello Lokinet` and click the escape button.

Once the escape button is clicked it will allow for commands to be inputed again.

Now type `:w` and click enter to write to the file.

Then type `:q` and click enter to quit editing the file, this will take you back to the directory you were in before `~/snapp/`.

## 3. Serving your SNApp
Now we will serve our index.html file to the lokinet by running the following command within our snapp folder.
```
sudo python3 -m http.server --bind <ip> <port>
```

For this example our pubkey is set to `lokitun0` which has address `172.16.10.1`. The `<port>` number can be whatever we define it. Therefor the command we would run for this example would be:
```
sudo python3 -m http.server --bind 172.16.10.1 80
``` 
Now if you go to the .loki address you saved before your message “hello lokinet” will be displayed. 

Jump onto the lokinet irc and see if others can access your SNApp.

### Finish

Well done, you have finished the guide. Jump back into the [Lokinet Public Testing Guide here](../PublicTestingGuide/).