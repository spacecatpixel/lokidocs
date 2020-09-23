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

## 3. Install nginx

Install a proper web server:

```
sudo apt install nginx
```

Configure to run nginx only on the lokinet interface, in `/etc/nginx/sites-enabled/default` change any `listen` directives to use the lokinet ip and remove any ipv6 `listen` directives.

By default you can drop files into `/var/www/html` to serve them. make sure they are accessable via the `www-data` user or whatever user `nginx` runs as.

TIP: You can make nginx generate a directory listing by puting `autoindex on;` into the `location` block in the nginx config file.


## 4. Security

Make sure no services bind to all interfaces.

suggested firewall settings when using nginx:

```
# change me to the range used by lokinet
LOKINET_RANGE=10.0.0.0/16

# drop all from lokinet
ufw deny from $LOKINET_RANGE

# allow tcp 80 from lokinet
ufw allow 80/tcp from $LOKINET_RANGE

```


Jump onto the lokinet irc and see if others can access your SNApp.

## 5. Configuring SRV Records

It is possible to configure your SNApp so that others can get service information when looking it up.  For example, you may want to tell the user you are hosting an xmpp server at a specific port, or even at a different .loki address, or perhaps even load-balance a service across multiple .loki addresses.

To start, begin editing your ini file as in step 1.2.

Under the section heading `[network]` add one or more entries with the following format:

```
srv=_service._protocol priority weight port [target]
```

An example:  
```
srv=_xmpp._tcp 10 10 1234 mylokiaddress.loki
```  
will be an entry for the XMPP protocol pointing to `mylokiaddress.loki` at port 1234.

Another example:
```
srv=_mumble._tcp 10 10 64738
```
will be an entry for Mumble pointing to the SNApp you are configuring at port 64738

The target in this entry MUST be one of the following:  
- empty, which means "just use the .loki for this SNApp"
- a single dot (`.`), which means "this SNApp does NOT have that service available
- any valid name in the .loki or .snode TLD.

For more information on SRV records and what you can do with them, visit [the Wikipedia article](https://en.wikipedia.org/wiki/SRV_record).

### Finish

Well done, you have finished the guide. Jump back into the [Lokinet Public Testing Guide here](../PublicTestingGuide/).
