title: Loki Documentation | Hosting a Hidden Service or SNApp on the Lokinet.
description: The function of SNApps is similar to so-called hidden services in Tor which have flourished. They provide users with a way to interact fully within the lokinet providing an even higher-degree of anonymity than can be achieved when accessing externally hosted content.

# Hosting a SNApp
## 1. Preparing your lokinet address

Depending on your desired outcome you may want to only run a one time SNApp or a SNApp that continues to persistently use the same .loki pubkey.

### 1.1 Temporary SNApp
A temporary SNApp is a hidden service on lokinet that does not have a permanent public key. 

This means that the public key we supply to others will not work once the server that is hosting the SNApp is restarted.

This SNapp will require no additional setup. You can continue to [step 2](#2-finding-your-snapps-lokinet-address) if you only want to host a temporary SNApp.

### 1.2 Persistent SNApp
Open up your `lokinet.ini` file and add a path to where your SNApp key files will be stored.

If you have built Lokinet from the Deb packages you will find your lokinet.ini file with the following command:
```
sudo nano /etc/loki/lokinet.ini
```
Otherwise, if you have built Lokinet from source your `lokinet.ini` file will be in the following folder:
```
~/.lokinet/lokinet.ini
```

Scroll down to your `[network]` section and add the following line:

```
keyfile=/var/lib/lokinet/snappkey.private 
```

Replacing `<user>` with your computer username, alternatively you can set the filepath to wherever you want your SNApp private key to be stored.

Now when you restart lokinet it will generate your `snappkey.private` file in the directory you have set.
```
sudo systemctl restart lokinet
```

## 2. Finding your SNApps lokinet address.

You can find your current snapp address using a host lookup tool:

```
nslookup -type=cname localhost.loki 127.0.0.1
```

on linux you can use `host`, the loki address to query is the same but the resolver uses the address `127.3.2.1` as to not conflict with other resolvers you may have installed.

```
host -t cname localhost.loki 127.3.2.1
```


## 3. Creating your SNApp
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

## 4. Serving your SNApp

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