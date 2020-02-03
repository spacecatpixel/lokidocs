title: Loki Documentation | Loki Proof of Stake | Pulse
description: The following Loki Improvement Proposal (LIP) will discuss this idea, with the view that a Proof of Stake (PoS) scheme should be adopted. This LIP will also outline how this could be achieved in Loki with a new PoS scheme called “Pulse”.
# Loki Proof of Stake Mechanism: Pulse

```
Metadata 
LIP Number: 5 
Title: Pulse [Foundation Vote] [Not Yet Voted]
Author/s: Kee Jefferys
Status: Final 
Type: Core
Created: date (2019-09-17) 
```

## Introduction

As Loki moves closer to enabling [Service Node](../ServiceNodes/SNOverview.md) checkpointing on the mainnet, the role miners play in the Loki ecosystem has come under question. Historically, Loki [miners](../Mining/MiningOverview.md) have secured the blockchain with Proof of Work (PoW), produced blocks, and organised transactions. However Service Node [checkpointing](../Advanced/CheckpointingLip3.md) will provide security to the blockchain, diminishing a miner’s role to that of only producing blocks and organising transactions. 

This naturally raises questions about whether miners can, or should be, removed in favour of a system where Service Nodes directly produce blocks, order transactions and secure the chain. 

The following Loki Improvement Proposal (LIP) will discuss this idea, with the view that a Proof of Stake (PoS) scheme should be adopted. This LIP will also outline how this could be achieved in Loki with a new PoS scheme called “Pulse”.

### The Case for PoS 

There are several clear arguments that can be made for the adoption of PoS for Loki which I will elaborate on. 

### Increases the Investment That Is Needed to Attack Loki

To double spend a transaction, an attacker needs to produce an alternate blockchain with more cumulative difficulty in secret, which reverses a previously spent transaction. Assuming the malicious miner is not using advanced strategies (selfish mining, cartels), this requires the miner obtain 51% of the hashing power. 

Using RandomXL, Loki’s current mining algorithm which is optimized for CPU performance, a Ryzen 1700 is able to produce about 4500 hashes per second. The total hashrate for Loki is currently about 17 Megahashes. Let's assume every miner is using a Ryzen 1700. This would equate to about 3,691 Ryzen 1700 chips on the Loki Network. If we estimate the hardware cost (including peripherals) of a malicious attacker, each of these miners could conservatively cost 400$ USD[1]. This means that for 51% of the hashrate to be obtained, an attacker would have to buy about 730,000$ USD worth of hardware to successfully attack the network. Keep in mind this uses very conservative estimates with consumer level pricing. It's likely that an attacker would be able to decrease their cost per unit well below 400$ USD, or the attacker could rent the equivalent hashing power, further reducing the cost of an attack.

Compromising Masternode PoS would require that the malicious party or consortium own or rent control over 51% of the staked supply. As of the time of writing,, Loki has 620 staked Service Nodes and each stake is approximately 22,000 Loki. This means the malicious operators would need to gain control of about 13.6 million Loki, and with the current cost of Loki at ~0.15$ USD, this equates to about 2 million USD. This scenario ignores the fact that attempting to obtain such a large amount of Loki from the open market would inevitably lead to an increase in price (as with lower supply, and fixed demand, price increases) which would further inflate the cost. 

### It Presents an Increased Sunken Cost for an Attacker    
RandomXL is designed to provide increased performance on hardware similar to general purpose CPUs, which means that hardware used in any attack is not a sunk cost as it can be recovered by selling or repurposing hardware used in the attack. In a Proof of Stake system where attackers have to buy into the network, performing an attack is likely to reduce users trust in the security of the network, making users likely to sell coins and devalue the attackers own stake. This makes it harder for the attacker to recoup their costs when selling their stake back to the network. 

### Reduced Environmental Impact 
Proof of Work by its nature requires thousands of miners compete against each other to solve computationally hard mathematical problems. Many people are concerned about the environmental impact of mining, as it uses a massive amount of electricity. Proof of Stake, as implemented in Pulse does not require these energy intensive calculations: instead, it relies on the cooperation of Loki Service Nodes — which use comparatively small amounts of electricity. 

## Pulse Overview

Every 120 seconds, a leader is chosen from the top of the Service Node list. This leader creates a candidate block which they send to 11 randomly chosen Service Node validators. The validators ensure the block is valid, then perform a group ceremony to create a random value. Once the ceremony is finished, each validator includes the final random value in the candidate block, which they sign and send to their validator peers. Once a candidate block has more than 7 signatures, it can be published to the network as a valid block. The process is then repeated to create the next block.

### Pulse Specifics 

#### Proposal Round

A single leader chosen sequentially from the Service Node list, plus a group of 11 validators chosen deterministically from the random value included in the last block.
The leader scans the transaction pool and collects valid transactions into a block. With this information, the leader creates a candidate block which contains a coinbase transaction. The leader is rewarded according to the Service Node coinbase formula, and receives any transaction tx fees included in the block.
The leader signs this candidate block and sends it to all of the validators, who each send it to 3 others until all validators successfully receive the candidate block.
Every validator should now wait {candidate_wait}.

#### Commit Round

After waiting {candidate_wait}, every validator now generates a 128 bit integer, and commits to that integer by sending the hash of that integer to all other validators.
Validators now wait {commit_wait}.

#### Reveal Round

After waiting {commit_wait}, validators may reveal the pre-image of the hash — which in this case is the random integer they committed to. They then send the pre-image of their committed hash to all validating peers.
Validators now wait {reveal_wait}.
After waiting {reveal_wait}, all validators should now have a subset of the revealed values, which they can combine locally to produce the final random value. Validators can add this to the candidate block and sign the resultant block. This signature is then sent to all other validators.  

#### Block Submission

All validators now wait {submit_wait}.
Once {submit_wait} has elapsed, validators check the validity of the other validator’s signatures, ensuring they are signing the same candidate block and signing the same final random integer.
Once signatures are validated, any validator in the quorum may submit a block to the network which includes at least 7 signatures from the group of validators.  

#### Proposed Times 

{candidate_wait} = 30 seconds
{commit wait} = 20 seconds
{reveal_wait} = 30 seconds
{submit_wait} = 40 seconds

### Properties of Pulse

* Partially synchronous with reasonable timeouts
* Produces an unpredictable value that cannot be significantly biased by members of the quorum
* The scheme tolerates failure of up to ~45% of Service Nodes assuming a quorum size of 11
* Targets a blocktime of 120 seconds


## Prerequisites and Presumptions
### Block Reward Restructure 

To implement Pulse, we assume miners have been completely removed from the network, and that mining rewards are either being reallocated to Service Nodes or not created at all. The current logic of sequentially rewarding each Service Node in a sorted list would be preserved, however for a Service Node to win this reward they must act honestly as a leader by producing a valid candidate block.

### Time Synchronicity

We assume that Service Nodes maintain relative synchronicity (within the boundary of the enforced timeouts), which means that when an event like a creation of a new block is triggered, all Service Nodes should react to this event within a reasonable amount of time. 

### Service Nodes 

We assume that a large and diverse network of staked Service Nodes exist; and that these Service Nodes will act as validators and leaders in the scheme. Because of their significant stake they may be punished by having their stake locked for a period of time (currently 30 days) using a deregistration transaction. 

## Fault Tolerance

### Failures

To make the first implementation of Pulse fairly straightforward, there will only ever be one way in which it can fail: a timeout. Initially this will sacrifice some speed — especially when recovering offline validators or leaders — however, this process can be sped up significantly once we have assessed the stability of the protocol in a live environment.

#### Timeouts and Swap Blocks

A timeout occurs when a valid block is not produced after max_timeout, which is the sum of all of the wait periods — effectively 120 seconds. As soon as the leader of the next quorum detects a timeout, they may immediately begin building and distributing a candidate block with a “swap” tag to their validators. If this block is signed by the validators, the swap tag will indicate that there was a quorum failure to newly syncing nodes, and nodes who have been offline. The next leader can always be calculated by XOR’ing the last randomly produced value by a counter which iterates every time a block isn’t created [2].

#### Demerits and Deregistrations

Validators in a quorum can submit intent to demerit messages at any stage for a leader (or any other validator in their quorum) if they feel they have not followed the protocol. For example, if a leader never publishes a candidate block, any validator in the quorum may send an intent to demerit message to their other peers. If this message is signed by the majority of other validators it may be submitted to the network as a demerit point message. This message is not a transaction, and simply propagates through the p2p layer. When obligation quorums are created, each node selected for that obligation quorum checks their local log for demerit points, and if more than a predefined amount of demerit points have been seen in a period of time then a deregistration or decommission transaction with the relevant signed demerit points can be submitted to the network.  

### Common Failure Cases

To get a better understanding of Pulse, it is worth discussing what happens in some common failure cases.

* A leader does not submit a candidate block
* Not enough validators participate in the commit or reveal rounds
* Validators sign two different blocks 
* Validators are unable to submit a block due to differences in revealed values 

#### Leader Does Not Submit a Candidate Block

If a leader fails to construct and send a candidate block, the validators will be triggered to submit an intent to demerit message. If this message is signed by a simple majority of the quorum, a demerit point can be applied to the leader. The next leader will trigger the creation of a new block when max_timeout has elapsed. 

#### Not Enough Validators Participate in the Commit or Reveal Rounds

Although all Service Nodes are incentivised to cooperate during the commit and reveal phases of the protocol to avoid demerit points, some participants may act maliciously or go offline during the process. The protocol should be able to tolerate the failure of 6 of 11 nodes during the commit reveal stage. 

As above, any validator that does not participate in a commit or reveal round, or reveals a different value from their commitment, can be flagged by other validators with an intent to demerit message. If this message is signed by a majority of nodes, this message can be submitted to the network as evidence of a node’s non-performance in a block creation quorum. 

If more than 6 of 11 nodes do not participate in the commit or reveal round, the quorum will not be able to create a block — which means the next quorum can take over block creation when max_timeout is reached. 

#### Validators Are Unable to Submit a Block Due to Differences in Revealed Values

There may be a number of cases where not all of the Service Nodes correctly receive all of the committed or revealed values. This will lead to the final random value that a validator calculates not matching the rest of the validators values. 

As with other errors the scheme will progress normally as long as the revealed values for 7 of the 11 validators match. Nodes with invalid revealed values can query the other validators in their quorum again to receive any values they missed during the two rounds.

If more than 7 nodes disagree on the final revealed value, then the scheme will fail after max_timeout and the next leader may begin the process of producing a new block.

#### Validator Signs Two Different Blocks

Any Service Node, including a validator or leader, may submit a deregistration transaction if they can produce signatures from any other Service Node that signs multiple blocks which compete for the same height, or signs a competing chain once more than two checkpoints have been applied.

This means that any node that signs blocks indiscriminately in block creation quorums will be immediately removed from the network with their funds locked. 

## Traditional PoS Attacks 

### Stake grind attacks

Stake grinding usually refers to a class of attacks where a validator or leader can iterate values to bias the selection of the next chosen validator. Since validators are chosen by using a collaboratively generated random integer in each block, it is possible to bias the results of the scheme. However the only way to do this effectively is for a validator to choose not to reveal a value that they previously committed. In the context of Service Node selection for the next quorum, this biasing is extremely weak, and the action of committing but failing to reveal a value leads to a demerit message being submitted for the validator who performs such an action, making this attack infeasible.

### Long Range Attacks 

Long range attacks are attacks where nodes that are syncing the chain, or that are offline for a period of time, can be convinced of an alternate state of the chain. This occurs because old Service Nodes can use previously held Service Node keys to resign blocks that appear as alternate chains.

#### Online Nodes

The Loki blockchain already provides a solution for online nodes with Service Node checkpointing. This prevents Service Nodes from altering blocks that have received more than 2 checkpoints[3]. However, tackling the problem of nodes that go offline and miss more than two checkpoints in a row or nodes who are syncing for the first time is more difficult.

#### Syncing Nodes or Partially Offline Nodes 

When a node has no previous state of the blockchain, or has been offline long enough to miss enough checkpoints that it is infeasible for it to validate the non alteration of blocks, it must use an external trusted source to correctly identify the main chain. This is usually referred to as weak subjectivity [4].

The easiest way to solve this issue is to allow syncing Service Nodes, and Service Nodes that have been offline to refer to the seed nodes to ascertain what is the true chain. This is already the case in Proof of Work blockchains, since seed nodes provide the initial list of peers to sync from. To implement weak subjectivity in Loki, seed nodes should additionally provide a list of the latest checkpoints, so that when a client is syncing they can ensure they are syncing to the correct chain — and not being segmented onto a network with valid but altered signatures.

### Nothing at Stake

The ‘nothing at stake’ problem references a validator’s tendency to sign or authorise multiple competing blocks in a Proof of Stake system. They are incentivised to do this because they can’t be sure which chain will become the true chain in the long term, thereby they should sign competing blocks to ensure they don't miss rewards. 

With Pulse, the ‘nothing at stake’ problem is prevented by allowing nodes in the network to submit evidence of double signed blocks. If this evidence can be validated, the offending node can be deregistered from the network, providing a punishment for nodes who do not effectively choose a single block to sign. 

### DDOS attacks 

All Service Nodes in the Loki network maintain a public IP address so they are reachable by other Service Nodes and Lokinet/Session users. These IP addresses are held in a distributed list that anyone can access. This opens the Service Node network and especially block producing quorums to DDoS attacks. For example, an attacker could wait for a block to be successfully published and immediately identify the members of the next quorum who will produce a block. With this information, they could launch a DDoS attack aimed to interrupt the communication between validators, or between the leader and validators. If successful, they would prevent a new block from being produced and could continue this attack on successive quorums. 

Although individual Service Nodes have incentives to prevent DDoS attacks (so they can earn rewards and avoid demerit points), there are some protections we can offer in the Loki software suite which can be deployed in the case that the previous block has failed to be produced. The most trivial protection is that after a failure in block creation, Service Nodes in the next selected quorum should ignore any connections from IP addresses which do not belong to another Service Node. This limits the scope of the attacker’s DDoS to only Service Nodes — which are costly to operate and far less numerous than a botnet-like DDoS attack. Service Node operators could also reasonably rate limit other Service Nodes on a per key basis, choosing not to respond to Service Nodes who put undue strain on their own networks. 

## Considerations 

### Safety of Commit Reveal schemes

Collaborative commit reveal schemes for generating random values are well studied, and limitations on such schemes are well known [5][6][7]. The primary downside to using this type of scheme is that although committed values cannot be changed after they have been committed, a contributor to the scheme may bias the results by not revealing their committed value at all.

For example, say a block creation quorum produces a value between 0 and 10 each block, and Alice wants to run an online casino which uses this random integer to flip a coin, with bets being placed on heads or tails. Alice’s casino algorithm reads the random integer from the blockchain and if the random value is between 0-4 then the coin is tails, and if it's between 5-10 it’s heads.

A possible attack on this application would be for a Service Node operator, let’s call her “Mallory”, to wait to become a validator in a quorum, act honestly, and commit to a random value. Once she has committed to the scheme, she waits for the other validators to reveal their original integers. She can now calculate the shared random result for those validators that have revealed. Let’s suppose their combined final value will be 3. Using this information and whatever deterministic algorithm that is used to combine each validators contribution, Mallory can now decide whether or not she wants to reveal her result and add her contribution to this data.

If Mallory bets on tails and realises revealing her commitment would change the overall result to heads, then she should not reveal her commitment. If her commitment (when combined with the other commitments) still selects a number under 3, then she can reveal her committed value. Of course, the cost of not revealing a commitment is demerit points being applied to Mallory’s Service Node which will lead to deregistration in the event that Mallory has not revealed her commitments consistently. However, as long as Mallory’s winnings are more than the cost of being deregistered from the Service Node network, her dishonest actions are financially incentivised.

It should be clear from this example that Service Nodes can significantly bias the results of decisions which have few available outcomes, like a coin toss.  So applications should not use the random integer we are creating for these type of use cases! The Loki blockchain, however, does not use the source of randomness in this way. We use the randomness to choose Service Nodes in a Service Node list, where biasing the results has an insignificant effect as the possible outcomes are far more numerous. With Pulse, the randomness seeds an algorithm that chooses a combination of 11 nodes out of currently about 620 nodes. Mallory, in this case, would be able to choose between two (and only two) different random samples of 11 nodes from the selection of 620, but this single extra choice is highly unlikely to provide a notable benefit in terms of opportunistic selection.

### Blocktimes 

In Loki, a block is created on average every 120 seconds, however block production is distributed on an exponential distribution, meaning blocks will often be created earlier or later than expected. This effect is exacerbated during large hashrate fluctuations, and this unpredictability can be frustrating for users waiting for transactions to confirm.

Blocktime in Pulse is controlled through mandatory wait periods that are added at each stage of block creation. Conservative estimates have been taken for the first implementation of the proposed scheme, allowing for nodes who maintain relative synchronicity to successfully participate in the scheme. It's likely that after testing we can reduce or eliminate some of these mandatory wait periods thereby reducing the blocktime. However, in the first implementation, we target a predictable block time of 120 seconds — excluding the rare case where block creation fails. In this case, a block would be created in the subsequent 120 seconds. This means that in a majority of cases users won't be left wondering when the next block is coming, since blocks will be predictability created every 120 seconds. 

## Conclusion 

Pulse is a robust yet simple scheme which provides a clear vision for the future of block creation and transaction ordering in the Loki Network. Pulse does this while also increasing security and decreasing the need to use energy intensive proof of work. Additionally, it better aligns existing incentive structures to reward those who do the most work to create order, and secure the network.

[1]"PC part picker Ryzen 1700 build" https://pcpartpicker.com/list/wGVPyX.

[2]"Exclusive or - Wikipedia." https://en.wikipedia.org/wiki/Exclusive_or.

[3]"loki-improvement-proposals/LIP-3.md at master · loki-project ... - GitHub." 
https://github.com/loki-project/loki-improvement-proposals/blob/master/LIPS/LIP-3.md.

[4]"Weak Subjectivity - Definition | Binance Academy." https://www.binance.vision/glossary/weak-subjectivity. 

[5]"RANDAO beacon exploitability analysis, round 2 - Casper - Ethereum ...." https://ethresear.ch/t/randao-beacon-exploitability-analysis-round-2/1980. 

[6] "RNG exploitability analysis assuming pure RANDAO-based main chain." https://ethresear.ch/t/rng-exploitability-analysis-assuming-pure-randao-based-main-chain/1825. 

[7] "Statistical Model Checking of RANDAO's ... - Semantic Scholar." https://pdfs.semanticscholar.org/c267/d8b8383c0dd9103f9920e1e7c448cb063376.pdf.

*Special thanks to Jason Rhinelander, for helping me proofread and refine some of the concepts in this LIP.*

