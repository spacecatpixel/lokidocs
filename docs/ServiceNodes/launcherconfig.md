# Launcher config files

This guide shows the different config files and their associated sections, keys and values.

##Table of contents:

- [launcher.ini](#launcherini)
     - [[launcher]](#launcher)
     - [[blockchain]](#blockchain)
     - [[network]](#network)
     - [[storage]](#storage)

## launcher.ini

### [launcher]

|            Key | Default value | Type    | Required? | Auto-detectable? | Description         |
|----------------|---------------|---------|-----------|------------------|---------------------|
| `interactive` | false         | boolean | no        | no               | special debug mode  |
|      `docker` | false         | boolean | no        | no               | special docker mode |

### [blockchain]

|           Key | Default value     | Type      | Sample Value                     | Required? | Auto-detectable? |
|--------------:|-------------------|-----------|----------------------------------|-----------|------------------|
| `binary_path` | false             | file path | src/loki/build/release/bin/lokid | no        | no               |
|     `restart` | main              | boolean   | true                             | no        | no               |
|     `network` | 127.0.0.1         | string    | main, test, demo or staging      | no        | no               |
|      `rpc_ip` | 22023,38154,38157 | ip        | yes                              | no        |                  |
|    `rpc_port` | user              | port      | 0                                | no        | no               |
| `rpc_user`    | pass              | string    | yes                              | no        |                  |
| `rpc_pass`    | 22024,38154,38158 | string    | yes                              | no        |                  |
| `zmq_port`    | 22022,38153,38156 | port      | 0                                | no        | no               |
| `p2p_port`    | ~/.loki[/testnet] | port      | 0                                | no        | no               |
| `data_dir`    |                   | string    | loki_data                        | no        | no               |

### [network]

|                     Key | Sample Value                        | Type                       | Required? | Auto-detectable? |
|-------------------------|-------------------------------------|----------------------------|-----------|------------------|
|               `enabled` | false                               | boolean                    | no        | no               |
|           `binary_path` | src/loki-network/lokinet            | file path                  | yes       | no               |
|         `bootstrap_url` | http://206.81.100.174/n-st-1.signed | url                        | no        | no               |
|        `bootstrap_path` | ~/.lokinet/bootstrap.signed         | file path                  | no        | yes              |
|                `rpc_ip` | 127.0.0.1                           | ip                         | no        | no               |
| `rpc_port`              | 28082                               | port                       | no        | no               |
| `public_ip`             | 206.81.100.174                      | ip                         | no        | yes              |
| `public_port`           | 1090                                | port                       | no        | no               |
| `internal_port`         | 1090                                | port                       | no        | no               |
| `dns_ip`                | 127.0.0.1                           | ip                         | no        | yes              |
| `dns_port`              | 53                                  | port                       | no        | yes              |
| `ifname`                | lokinet0                            | string up to 16 characters | no        | yes              |
| `ifaddr`                | 10.0.0.1/8                          | network                    | no        | yes              |
| `netid`                 | service                             | string up to 8 characters  | no        | yes              |
| `nickname`              | ldl                                 | string                     | no        | no               |
| `verbose`               | true                                | boolean                    | no        | no               |
| `auto_config_test_host` | www.google.com                      | string                     | no        | no               |
| `auto_config_test_port` | 80                                  | port                       | no        | no               |
| `testnet`               | true                                | boolean                    | no        | yes              |
| `data_dir`              | /root/lokinet                       | path                       | no        | no               |
| `netdb`                 | /usr/src/app                        | path                       | no        | no               |

### [storage]

|             Key | Sample value                             | Type      | Required? | Auto-detectable? |
|-----------------|------------------------------------------|-----------|-----------|------------------|
| `enabled`       | false                                    | boolean   | no        | no               |
| `binary_path`   | src/loki-storage-server/build/httpserver | file path | yes       | no               |
| `port`          | 8080                                     | port      | no        | no               |
| `log_level`     | debug                                    | string    | no        | no               |
| `identity_path` | ./identity.private                       | file path | no        | no               |
| `output_log`    | logs                                     | path      | no        | no               |
| `db_location`   | .                                        | file path | no        | no               |