#LokiNET SNApps/Hidden Service Setup Guide

// TODO: overview goes here

## Installing

To install lokinet, see the install guide [here](../../Lokinet/Guides/Install.md)

## Setup

**DO NOT RUN LOKINET AS ROOT**

For the first time setup, you need to generate a config and obtain bootstrap information.

    $ lokinet -g 
    $ lokinet-bootstrap

The default configuration for lokinet is `lokinet.ini` located at `~/.lokinet/lokinet.ini` (`%APPDATA%\.lokinet\lokinet.ini` on windows)

To enable a SNApps with a long term address, uncomment the line in the `[services]` section in `lokinet.ini` that starts with `example-snapp=`.

Please note that currently node long term SNApps are not currently recommended or supported on windows at this time.

Then run lokinet.

    $ lokinet

## DNS

Make sure your dns resolver is set to `127.0.0.1`, this conflicts with `systemd-resolved`, the current solution is to `systemctl stop systemd-resolved`

back up `/etc/resolv.conf` and put `nameserver 127.0.0.1` as the first line of that file

This step is required for resolving the `.loki` tld.

## Test services

you can join the lokinet irc network at `i4irznec3pkdh7gay6xsmkyyqag4q8643kut739by17cuiwdnxqo.loki` plaintext port `6667` with your irc client

Active channels:

* `#lokinet`




## Best Practices

// TODO: talk about binding to all interfaces being bad

// TODO: talk about networking namespaces options for linux

## Examples

// TODO: insert secure example here
