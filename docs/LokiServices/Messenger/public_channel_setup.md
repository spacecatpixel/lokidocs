# Session Public Channel Setup

An express REST API for serving persistence history public chat rooms for Session. These channels are not limited in size as they are hosted by your own server. Please be aware these are PUBLIC channels and sensitive private information should not be shared in this group format.

It's run by 2 daemons, the platform servers providing an ADN standard REST API and another with Session specific behaviors (crypto-key registration and enhanced moderation functions).

## Requirements:
- VPS
- Domain Name
- Publiclly Routable IP
- Debian Distribution

## 1. Install Docker (Debian)
For non-debian-based installation instructions of Docker: 

- [https://docs.docker.com/v17.12/install/#server](https://docs.docker.com/v17.12/install/#server)

Use this guide for additional troubleshooting help: 

- [https://docs.docker.com/v17.12/install/linux/docker-ce/debian/#set-up-the-repository](https://docs.docker.com/v17.12/install/linux/docker-ce/debian/#set-up-the-repository)

- [https://docs.docker.com/v17.12/install/linux/docker-ce/ubuntu/](https://docs.docker.com/v17.12/install/linux/docker-ce/ubuntu/)

### Remove any possibly previously installed docker installations

```
sudo apt-get remove docker docker-engine docker.io
```

### Install official docker repo

```
sudo apt-get update
```

```
sudo apt-get install apt-transport-https ca-certificates curl gnupg2 software-properties-common
```

#### For Debian

```
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
```

```
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
```

#### For Ubuntu

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

```
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

### Install and test Docker

```
apt-get update
```

```
sudo apt-get install docker-ce
```

To check to make sure it's all working: 
```
docker run hello-world
```

## 2. Install docker-compose

### Create docker-compose script

```
curl -L "https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

### Make sure it's executable
```
chmod u+x /usr/local/bin/docker-compose
```

## 3. Install LMPCS

```
git clone https://github.com/neuroscr/loki-messenger-public-server.git
```

### Install LMPCS git submodules

```
cd loki-messenger-public-server
```

```
git submodule init
```

```
git submodule update
```

### Make sure permissions on acme.json is correct

```
chmod 600 docker/acme.json
```

### Set up config

```
cp loki_template.ini loki.ini
```

### Add first moderator

To add the first moderator replace PUBKEY with the desired moderators Session public key and run `echo "PUBKEY=true" >> loki.ini`.
> This initial step is required however you can add additional moderators through Session desktop interace.

### Start it

Replace `your@email.tld` with your email address and `yourssl.domain.tld` with your public facing hostname. These are required for getting an SSL certification from LetsEncrypt which we will attempt to automatically do for you.

```
EMAIL=your@email.tld DOMAIN=yourssl.domain.tld docker-compose up -d
```

## Upgrade instruction

Make sure you're in `loki-messenger-public-server` folder.

Run the following commands:

To stop the software running:
```
EMAIL=your@email.tld DOMAIN=yourssl.domain.tld docker-compose down
``` 

To grab the latest source and configs:
```
git pull
```

To update the local docker images:
```
EMAIL=your@email.tld DOMAIN=yourssl.domain.tld docker-compose build
```

To restart the server:
```
EMAIL=your@email.tld DOMAIN=yourssl.domain.tld docker-compose up -d
```

## Getting Help

If something in this guide isn’t making sense, or if you’re running into issues that you can’t identify on your own, the first place to go would be the #lokinet-help channel on [discord](https://discord.gg/67GXfD6). Alternatively, you can find help on our other communication channels such as [telegram](https://t.me/LokiCommunity), [twitter](https://twitter.com/loki_project), or [reddit](https://www.reddit.com/r/LokiProject/).

## Reporting Bugs

After you have sought out for help through our communication channels and have not come to any solutions we recommend opening up a issue ticket on the [Session public server](https://github.com/loki-project/loki-messenger-public-server/issues) repository.

Please use the following Github Issue Template for any github issues created: [Github Issue Template Example](../../../Contributing/Issue_Template/).