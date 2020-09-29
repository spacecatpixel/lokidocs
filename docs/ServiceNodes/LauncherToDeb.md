title: Loki Documentation | Loki Launcher to Debian Guide
description: This document is for Service Node Operators who have used the previous Service Node Full Guide and wish to update their loki-launcher setup to a Debian setup.

# Overview
This guide will tell you how to update a loki-launcher service node into a Debian Package Service Node.

## Requirments
- Service Node on linux with loki-launcher installed.
- curl
- jq

## Express Update
Run these three command:
```
curl -o loki-launcher-to-debs.sh https://raw.githubusercontent.com/loki-project/loki-core/dev/utils/loki-launcher-to-debs.sh

chmod a+x loki-launcher-to-debs.sh

sudo ./loki-launcher-to-debs.sh
```

## Step 1: Requirements
Make sure you have both `curl` and `jq` installed:
```
sudo apt install jq

sudo apt install curl
```

## Step 2: Download and run shell script
Run these 2 commands:
```
curl -o loki-launcher-to-debs.sh https://raw.githubusercontent.com/loki-project/loki-core/dev/utils/loki-launcher-to-debs.sh

chmod a+x loki-launcher-to-debs.sh

sudo ./loki-launcher-to-debs.sh <username>
```

## Step 3: Follow prompts in terminal.

Follow the prompts the shell script outputs and confirm the information for the migration to start.

Once the migration has finished the terminal should output 

```
Migration complete!
```