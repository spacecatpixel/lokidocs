# Using LokiNET

// TODO: overview for lokinet cli guide

* `--no-igd` on the command line or `no-igd=1` in lokid.conf to disable IGD
  (UPnP port forwarding negotiation).
  
* `--p2p-bind-ifname=lokitun0` to bind to just the lokinet tun interface 


// TODO: note which version of lokid has `--p2p-bind-ifname` option
  
Example command line to start lokid for JUST lokinet traffic

    lokid --no-igd --p2p-bind-ifname=lokitun0
