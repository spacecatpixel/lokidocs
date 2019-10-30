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

```
sudo nano ~/.lokinet/lokinet.ini
```

Scroll down to your `[network]` section and add the following line:

```
keyfile=/home/<user>/.lokinet/snappkey.private
```

Replacing `<user>` with your computer username, alternatively you can set the filepath to wherever you want your SNApp private key to be stored.

Now when you restart lokinet it will generate your `snappkey.private` file in the directory you have set.
```
sudo systemctl restart lokinet
```

## 2. Finding your SNApps lokinet address.

First we need to find the IP that our private tunnel adapter is connected to:

```
nslookup localhost.loki
```

We should have an output similar to the below:
```
Server:		127.0.0.53
Address:	127.0.0.53#53

Non-authoritative answer:
Name:	localhost.loki
Address: 10.0.0.1
```

We want to use the IP Address that is shown under `Name: localhost.loki` in the next command:

```
nslookup 10.0.0.1
```

Which will output our lokinet public key:

```
1.0.0.10.in-addr.arpa	name = jnzd4izeja5p7cf81bsy4t97szxpye5sewch88hontpwj6jdfqby.loki.
```

The public key is the url to your SNApp. Anyone running lokinet software will be able to access your hidden server using this public key.

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