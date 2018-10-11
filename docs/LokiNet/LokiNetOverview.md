#Lokinet Overview

## Terms

**LLARP Router**: a library that listens on UDP port 1090 and participates on the LLARP and as a forwarding agent (think relay)

**Tunnel Device**: A fake network card for interacting with the Lokinet. This will have a private IPv4 address (10.x.x.x, 172.16.x., or 192.168.x.x.)

**LLARP Client**: A library that connects to UDP port 1090 and participates on the LLARP, providing an end user tunnel access to the lokinet.

**LLARP DNS**: A library that listens on UDP 53 on localhost for DNS queries and relays to a real DNS server UNLESS it's asled about `.loki` TLD (top level domain)

**[Service Node](/LokiNet/ServiceNodes/SNOverview)**: Full nodes on the Loki Network

Service Node

**Hidden Service**: a daemon bound to an ip & port on the tunnel device.

**Paths**: How one LLARP HS talks to others (like a TOR circuit/I2P tunnel)

**Pathsets**: A collection of paths that one HS use (never fully shared)

**Intro**: How an HS (Hidden Service) says it’s available (like an I2P lease)

**Introset**: A collection of intros that you can use to talk to a HS with extra info (ephemeral NTRU pubkey)

**Router Contact**: is the general info include public key address of a SN (Service Node) (like an I2P router info)

