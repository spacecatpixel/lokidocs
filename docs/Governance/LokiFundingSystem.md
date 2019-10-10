title: Loki Documentation | Loki Funding System
description: The Loki Funding System will allow for a portion of the block reward to be acted on purely by a vote from the Service Nodes.

# Loki Funding System

> *Note: The loki Funding System has not been implemented at this current time. When implemented the Loki Funding System may be different to the below information.*

Although the [Loki Foundation](../Governance/TheLokiFoundation.md) is made from a diverse group of individuals who represent the Loki Project, the Foundation is subject to both its own governing constitution and the laws of Australia. This could prove to be a limiting factor in the range of decisions the Foundation can make. The Loki Funding System will allow for a portion of the [block reward](../Advanced/Cryptoeconomics.md) to be acted on purely by a vote from the [Service Nodes](../ServiceNodes/SNOverview.md). Service Nodes represent entities from all over the world and are not beholden to input from the Loki Project Team or Foundation, this allows them to reach a new level of autonomy in the decisions they can make. Service Nodes are the most [staked](../ServiceNodes/StakingRequirement.md) participants in the network and they are financially incentivised to make decisions that grow the value of Loki.

## Proposals
Every proposal that will be put before the [Service Nodes](../ServiceNodes/SNOverview.md) will be published on the Loki blockchain. If a given party wants to present a proposal to the Service Nodes, the party must construct a proposal transaction. Because the proposal transactions content must be readable and outputs must be burned, they forgo the privacy features of typical Loki transactions.

Funding blocks will be created every 43,000 blocks (approximately 60 Days). Proposal leaders can submit their proposals at any time during this period. However, it should be considered that the closer they submit to the beginning of each proposal phase, the more time they have to gain votes from each Service Node.

Attached to each transaction is an extra field which contains the information that each Service Node needs to understand  to vote on the proposal.This information includes; a 20 character proposal title, a URL linking to a detailed explanation of the proposal, the amount of Loki the proposal is seeking, a payment address, and an escrow agent if chosen.

Pending agreement from the [Loki Foundation](../Governance/TheLokiFoundation.md), users who make proposals can also elect for the Loki Foundation or any other third-party to act as an escrow agent, releasing funds as milestones are reached.  Additionally, to encourage a high-standard of proposals and prevent spamming of these transactions, each proposal transaction must burn a non-trivial amount of Loki.

## Voting

Each [Service Nodes](../ServiceNodes/SNOverview.md) will carry a specific key for voting. This key can be exported and utilized to vote on behalf of a Service Node without having to login to the server where it is hosted.

Voting will not occur on chain, rather, each Service Node signals their support, dissent, or abstinence for each active proposal on the blockchain.  Service Nodes can vote on proposals as soon as they are committed to the blockchain until the next bimonthly funding block. Shortly before the creation of the next funding block, a swarm is chosen to collect a tally of all of the votes that have been cast. This tally is then submitted into the nodes mempool and lives there until a miner reaches the funding block. This information is then used to construct the block which allocates a reward to the winning proposals.  Proposals are only passed when the result of the yes votes minus the no votes is equal to 15% of the node count on the Service Node network.

## Funds Distribution
All proceeds from the Loki Funding System will be paid through funding blocks. Funding block rewards operate similarly to traditional block rewards, as an entirely non-custodial way to distribute Loki.  Every 43,000 blocks (approximately 60 Days) a funding block is constructed by miners. This block contains 1.25% of the overall block reward for the entire funding block period.

To construct a valid funding block, miners must be able to assess proposals that have reached the required percentage of votes. This is done by using the information that the Service Nodes commit to the blockchain, which contains both the addresses to be paid and the state of all votes.  All Service Nodes will validate the miners funding block and discard any funding blocks which pay invalid addresses.

Often the sum of Loki required by approved proposals will either exceed or fall below the total amount built up in that 60 day period. Should the total sum of approved proposals exceed that which is available in the funding block, the miner will construct the funding block prioritising proposals that were committed to the blockchain earlier. Remaining approved proposals will remain committed to the blockchain until the next Funding block.