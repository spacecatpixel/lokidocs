title: Loki Documentation | Lokinet Windows Install Guide | Onion Routing
description: This guide walks you through the steps to get Lokinet, a new onion router with sybil resistance properties, working on Windows.

# Lokinet install guide - Windows 10

## 1. Download the latest Lokinet Windows Installer

Head to [lokinet.org](https://lokinet.org/), download the latest Windows Lokinet. 

## 2. Run the installer

Run Lokinet-win32.exe installer and allow permission as prompted. Please make note to set an exclusion or turn off Windows Defender/ Antivirus for this step.

![lokinet-launcher-install](../../assets/Lokinet_launcher_install1.PNG)

![Lokinet-launcher-install2](../../assets/Lokinet-launcher-install2.PNG)

## 3. Click install

After reading through the dialogue boxes, hit install.

![Lokinet-launcher-install3](../../assets/lokinet-launcher-install3.PNG)

## 4. Click 'Finish' and start the launcher 

![Lokinet-launcher-install4](../../assets/lokinet-launcher-install4.PNG)

## 5. Hit the 'connect' button on the LokiNet Launcher 

![Lokinet-launcher1](../../assets/lokinet-launcher-1.PNG)

## 6. You're done!

You should now be connected. 

![Lokinet-launcher2](../../assets/lokinet-launcher2.PNG)

---

## Troubleshooting

### Re-bootstrap

If you are getting a bootstrap error code then go into `Settings` > `Bootstrap Client from Web...` > and then paste in the following url:

```
https://seed.lokinet.org/bootstrap.signed
```

![Bootstrap](../../assets/bootstrap.jpg)

Click `OK` and then reconnect to Lokinet.