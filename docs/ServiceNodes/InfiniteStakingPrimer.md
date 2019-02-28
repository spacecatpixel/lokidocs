# Infinite Staking Primer

##Outline For Existing Service Node Participants and Operators

Infinite Staking is an incremental upgrade on the existing staking process that is currently available on the Loki network (currently active in Hardfork 10: Bulletproofs, introduced in Hardfork 9: Service Nodes). With Infinite Staking, Service Nodes do not expire and funds remained locked infinitely until a contributor or operator explicitly requests the Service Node to unlock the funds.

Since Infinite Staking is an incremental upgrade, most of the steps necessary to register and participate in a Service Node remains the same. A quick overview for the new staking process is summarised for quick grokking.

## Updated Staking Process and Commands

### Operators
Operators will still use the following commands when setting up a Service Node. The commands are as follows:

- `prepare_registration` in the daemon that is running in `--service-node` mode
    
- `register_service_node` with the command returned by the daemon. **Auto staking** is no longer an option.

### Contributors
Contributors will still use the following command when contributing to a Service Node:

- Stake `<service node key>` by contributors to contribute to the node. Auto staking is no longer an option.
 
### Operators & Contributors (When Service Node Active)
Two new commands have been added to stop your Service Node from staking, both the contributor and operator can execute these commands:

- **(Optional)** `print_locked_stakes` to preview all the current wallet’s transactions that are locked in a Service Node or blacklisted on the network.
    
- `request_stake_unlock <service node key>` to request to unlock the stake in 15 days (10800 blocks).


## Unlocking Stakes & Deregistration

Service Nodes will continually receive block rewards infinitely until a stake is unlocked or the Service Node becomes deregistered. Unlocking is available via the `request_stake_unlock <service node key>` in the command line wallet. Once the unlock is requested, when the request is included in a block in the blockchain, the stake will be unlocked and the Service Node is scheduled to expire in 15 days (10800 blocks).

In pooled nodes, any contributor that requests the stake to unlock will schedule the Service Node for expiration. All locked stakes in that Service Node will be unlocked in 15 days (10800 blocks). Once the unlock is requested, this process can not be undone or prolonged. Service Nodes participants will continue receiving rewards until expiration.

Under the new system, deregistrations can continue to be issued at any point in the active lifecycle of the Service Node. This is inclusive of the time period during which the Service Node is scheduled for expiry. Getting deregistered removes your Service Node from the network and your stakes are placed into a list of blacklisted transactions. Blacklisted transactions are locked and unspendable for 30 days (21600 blocks) from the block that the Service Node was deregistered.

Receiving a deregistration whilst participants have already requested the stake to unlock overrides the 15 day (10800 blocks) unlock time, and resets the unlock time to 30 days (21600 blocks).

## Minimum Contribution Rules

Infinite Staking introduces new limitations on the number of transactions that can be contributed to a Service Node, changing the minimum contribution rules for participating in the Service Node. 

Service Nodes accept at most 4 contributions, meaning the minimum contribution to a Service Node becomes:

<center>![Contribution](../assets/contribution.svg)</center>

In a pooled Service Node with reserved spots, the minimum contribution must be the maximum of the 2 values, their reserved amount, or the minimum contribution,

<center>![Min Contribution](../assets/mincontribution.svg)</center>

A simplistic example being, if the staking requirement is 24,000 Loki then if,

-   Operator contributes 50% of the requirement 12,000 Loki

-   The next contributor must contribute at least (⅓ * 12,000) Loki i.e. 4000 Loki to become a participant.

-   If this contributor had reserved a spot for more than 4000 Loki, their minimum contribution amount is that amount.
    
There are rules in the client software in place to stop users from irreversibly funding a Service Node into an invalid state.

## Staking Changes

Users are no longer allowed to stake on behalf of another participant in the Service Node. All contributions for a participant must come from the same wallet address as the one specified in the Service Node.

## Developer API Changes

### get_service_nodes

Updated/newly added fields:

| Field                     | Description                                                                  |
|---------------------------|------------------------------------------------------------------------------|
| `requested_unlock_height` | The height at which the stakes will unlock and the Service Node will expire. |
| `contributor`             | Shows the contributors.                                                      |
| `locked_contributions`    | An array of each contribution from the contributor that is locked.           |
| `key_image`               | A string representation of the locked key image (stake).                     |
| `key_image_pub_key`       | A string representation of the public key component of a key image.          |
| `amount`                  | The amount of Loki locked in this contribution.                              |

### get_service_node_blacklisted_key_images

Retrieve a list of blacklisted transactions from deregistered Service Nodes on the network.

| Field           | Description                                                               |
|-----------------|---------------------------------------------------------------------------|
| `key_image`     | A string representation of the locked key image (stake).                  |
| `blacklist`     | An array of each blacklisted transaction from deregistered Service Nodes. |
| `unlock_height` | The height at which the stake can be spent again.                         |