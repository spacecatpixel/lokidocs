title: Loki Documentation | Service Node Deregistration Rules | Loki Coin
description: Loki deregistration rules are used to manage the network in a decentralised way by having Service Nodes enforce each other to perform adequately on the network. This document outlines the different Service Node states of the Loki Service Nodes and the quorum testing that they conduct.

# Deregistration Rules
Deregistration rules are used to manage the network in a decentralised way by having Service Nodes enforce each other to perform adequately on the network.

## Service Node States
Each Service Node is in a state which informs the other Service Nodes in the network if they are awaiting, active, decommissioned or deregistered.

A Service Node will be in 1 of 4 different states:

| **State**                   | **Description**                                                                                                        |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Awaiting**                | Service Node is awaiting the [staking requirement](../StakingRequirement).                                             |
| **Active**                  | Service Node is staked, performing tasks as required and [receiving rewards](../../Advanced/Cryptoeconomics/#service-node-reward).|
| **Decommissioned**          | Service Node is not performing required tasks and is put into an inactive state where it does not receive rewards.     |
| **Deregistered**            | Service Node has been inactive for too long and has been deregistered.                                                 |

### Decommission and Credits
As a Service Node stays active they earn "credits" which are used during potential outages to stop a deregistration from occuring. A new Service Node starts out with `INITIAL_CREDIT`, and then builds up `CREDIT_PER_DAY` for each day the Service Node remains active up to a maximum of `DECOMMISSION_MAX_CREDIT`.

| **Variable**             | **Value**                                                              |
|--------------------------|------------------------------------------------------------------------|
| `INITIAL_CREDIT`         | 60 blocks (~2 hours) of decommission time.                             |
| `CREDIT_PER_DAY`         | 24 blocks (~0.8 hours) of decommission time.                           |
| `DECOMMISSION_MAX_CREDIT`| 720 blocks (~24 hours) of decommssion time.                            |
| `MINIMUM`                | 60 blocks(~2 hours) of decomission time.|

**Example**:

If a Service Node stops sending uptime proofs, a quorum will consider whether the Service Node has built up enough credits (at least `MINIMUM`): if so, instead of submitting a deregistration, it instead submits a decommission.  This removes the Service Node from the list of active Service Nodes both for rewards and for any active network duties.  

If the Service Node comes back online (i.e. starts sending the required performance proofs again) before the credits run out then a quorum will reinstate the Service Node using a recommission transaction, which adds the Service Node back to the bottom of the service node reward list, and resets its accumulated credits to 0. If it does not come back online within the required number of blocks (i.e. the accumulated credit at the point of decommissioning) then a quorum will send a permanent deregistration transaction to the network, locking that nodes stake for 30-days. 

## Testing Quorum

The testing quorum is a random set of 10 Service Nodes that are required to test a portion of the network for uptime proofs and Service Node IP changes. At each block a new quorum is formed  and they are required to test 50 Service Nodes or 1% of the network. 

If 7 of the 10 Service Nodes vote that a Service Node is malicious or not meeting the minimum requirements then they will create a [State_Change transaction](#state-change-transactions) to decommission, deregister or drop a Service Node to the bottom of the rewards list.

| **Name**          | **Details**                                                            |
|-------------------|------------------------------------------------------------------------|
| **Quorum Size**   | 10 Service Nodes.                                                      |
| **Supermajority** | 7 Service Nodes.                                                       |
| **Tested**        | 50 Service Nodes or 1% of the network.                                 |

### Quorum Tasks

| **Task**          | **Description**     |
|-------------------|----------------------------|
| **Uptime Proofs** | The quorum will check to see if a Service Node has provided uptime proofs within the last 2 hours.<br><br> If a Service Node is found to have not provided an uptime proof it will be decommissioned if it has at least `MINIMUM` credits, deregistered directly otherwise.. |
| **IP Changes**    | The quorum looks to see if the SN has advertised more than one IP to the network in the last 24 hours.<br><br>If a Service Node IP has changed it will be forced to the bottom of the Service Node reward list.                                                              |
| **Checkpointing**    | The quorum will check that each Service Node within the quorum has provided a hash of a block for a specific block height.<br><br> If a Service Node within the quorum does not provide a hash it will be decommissioned if it has at least `MINIMUM` credits, deregistered directly otherwise.|

## State Change Transactions

A state change transaction changes the state of a Service Node. Typically, state change transactions are only created when the supermajority of the quorum come to a consensus about another Service Node activities or lack of activities.

The only state change transaction that can be created by anyone is the `Register` TX which changes the state of a Service Node from `awaiting` to `active`.

| **State_Change_Transaction**|**Description**|
|--------------------------|------------------|
| `Register TX`            | A transaction(lock transfer) created from the **client** registering the Service Node.<br> > Note this is not a quorum TX.<br><br> State Change: `Awaiting -> Active`                                                |
| `Decommission TX`        | The Service Node is temporarily deregistered; your Service Node remains in the Service Node list, but is removed from the rewards list and from any network duties.<br> <br>State Change: `Active -> Decommissioned` |
| `Recommission TX`        | The Service Node is added back to the service node list and put to the bottom of the rewards list.<br><br> Stage Change: `Decommissioned -> Active`                                                                                                             |
| `IP Change TX`           | The Service Node is put at the bottom of the Reward List as it has changed it's IP. <br><br>Stage Change: N/a                                                                                                      |
| `Deregister TX`          | The Service Node is deregistered.<br><br> State Change: `Active -> Deregistered` / `Decommissioned -> Deregistered`                                                                                                    |