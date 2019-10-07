title: Loki Documentation | Open Port 22023 | Loki Service Node Troubleshooting
description: Having error codes showing port 22023 is not open. Follow this guide to open your ports and start staking to a Loki Service Node.

# Open port 22023

We need to open port `22023` for the loki-launcher to work properly.

Run the following command to open port `22023`.
```
sudo iptables -A INPUT -p tcp --dport 22023 -j ACCEPT & sudo iptables -A OUTPUT -p tcp --dport 22023 -j ACCEPT
```
Then run the following command to make this port remain open on reboot.
```
sudo apt-get install iptables-persistent
```