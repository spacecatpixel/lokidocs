# Lokinet install guide - MacOS 

Use this video guide [https://www.youtube.com/watch?v=_ILAISdswLg](https://www.youtube.com/watch?v=_ILAISdswLg) for installation instructions.

#### 1. Download the latest release

Head to [lokinet.org](https://lokinet.org/), download the latest MacOS Lokinet release and run it. 

#### 2. Install lokinet software

![MacOS-install-lokinet](../../assets/images/MacOS-install-lokinet.png)

#### 3. Open terminal

Open the terminal and change directory to `usr/local/bin`:

```console
cd /usr/local.bin
```

![Lokinet-MacOS-Guide1](../../assets/images/MacOS-Lokinet1.png)

#### 4. Run the Lokinet bootstrap

Type into the terminal to run the Lokinet bootstrap:

```console
./lokinet-bootstrap
```

![Lokinet-MacOS-Guide2](../../assets/images/MacOS-Lokinet2.png)

#### 5. Generate configuration file

Enter into the terminal to generate the configuration file:

```console
./lokinet -g
```

![Lokinet-MacOS-Guide3](../../assets/images/MacOS-Lokinet3.png)

#### 6. Run the Lokinet MacOS Binary

Finally you're going to run Lokinet. To do that enter into the terminal:

```console
./lokinet -g
```


![Lokinet-MacOS-Guide4](../../assets/images/MacOS-Lokinet4.png)

#### 8. Configure DNS

If DNS is not configured automatically, you can do it manually. 
Go to `System Preferences -> Network -> Advanced -> DNS`

Click on `+` in DNS servers list. Enter `127.0.0.1` as a DNS address:

![MacOS-DNS](../../assets/images/MacOS-DNS.png)


#### 7. Done!

You should now be connected. Enter a .loki address into a browser and enjoy navigating lokinet!


