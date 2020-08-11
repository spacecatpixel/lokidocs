title: Loki Documentation | Loki Service Node Staking Requirement 
description: A cryptocurrency stake involves holding a specific cryptocoin in a wallet for a particular period of time. The Loki staking requirement is the minimum amount of Loki that is required to stake. 

# Staking Requirement

A stake involves holding a specific cryptocoin in a wallet for a particular period of time. A staking requirement is the minimum amount of said cryptocoin that is required to stake.

## Service Node Staking Requirement

A Loki staking Requirement is the collateral requirement an operator stakes through a time-locked output, which can be unlocked as per the contributor's request. Upon a request to unlock the funds they will stay locked for an additional 15 days where the contributor will still receive rewards. In the extra field of the transaction, the Service Node operator includes the Loki address which may receive Service Node rewards. This address will also be used as the public key for Service Node operations such as [swarm](../Advanced/SwarmFlagging.md) voting.

Before each node joins the Service Node network, other nodes must individually validate that the said nodes collateral outlay matches the required amount, as per the decreasing collateralisation requirement. If the node is offline for a reasonable time, its uptime proof will not be sent to the other nodes resulting in a deregister of the node. Deregistered nodes will have their collateral requirement locked for 30 days.

The staking requirement started at 45,000 during Service Node launch (block height 101250), and was to descend non-linearly to ~10,000 by year 4 (block height 1036800). A change was made at block height 230704 to have the LSR descend non-linearly to ~15000. An aproximation of the formula is as follows:
<center>![LSR](../assets/LSR.svg)</center>

Where *LSR* is the Loki Staking Requirement and *h* is the block height.

To find out the [loki staking requirement click here](https://imaginary.stream/sn/).