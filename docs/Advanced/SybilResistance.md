#Sybil Resistance

One of the most important features of the Loki network is its built-in market-based Sybil resistance. We defined a successful Sybil attack as one where a single actor controls over 30% of the network’s nodes. At this level of dominance, an actor could conduct effective network wide temporal analysis. Forcing nodes to have a [stake](../ServiceNodes/StakingRequirement.md) in the network greatly increases the cost of performing a Sybil attack. ***Towler*** proved the effectiveness of this protection in his
[game theory model](https://loki.network/cryptoeconomics). However, this protection is not guaranteed.

##Brendan Towler's Game Theoretical Model
Using game theory, we were able to model the behaviour of rational economic actors, and built a picture of what the net state of all [Service Nodes](../ServiceNodes/SNOverview.md) at any given time should be, given a set of economic conditions. Using this, we were able to assess the potential difficulty and cost of executing a successful Sybil attack on the network under varying conditions.

In an economic scenario where only 5% of the [circulating supply](../EmissionCurve/#circulating-supply) is locked up in Service Nodes, an attacker would only have to purchase 2.15% of the circulating supply in order to begin conducting effective temporal analysis on the network. Although this attack would be costly, the attacker would be unlikely to experience any compounding effect of the attack cost as a result of their attack.

### True Market-based Sybil resistance
True market-based Sybil resistance only starts to materialise when a greater percentage of the [circulating supply](../EmissionCurve/#circulating-supply) is locked up in Service Nodes. In a scenario where 90% of the circulating supply is locked, actors would struggle to purchase enough Loki to perform an effective temporal analysis. However, a 90% lockup is unlikely to occur as Loki aimed to set its equilibrium Service Node lock up to 50% of the circulating supply. In this scenario, an attacker would have to purchase ~21.5% of the circulating supply to begin performing serious network wide temporal analysis. Purchasing ~21.5% of the circulating supply to accomplish this level of saturation will cause liquidity to rapidly decline in the markets, driving up the price of each coin as the accumulation continues. Thus, we would see a compounding effect on the cost of such an attack.

Of course, this accumulation can happen over time; depending on the patience of the attacker. Assuming they [stake](../ServiceNodes/StakingRequirement.md) the Loki as they accumulate it, this would dilute the [rewards that all Service Nodes receive](../EmissionCurve/#service-node-reward), including the attacker’s. [***Towler’s*** game theoretic model](https://loki.network/cryptoeconomics) showed that this would start to cause other [Service Nodes](../ServiceNodes/SNOverview.md) to drop off the network, but it would also come at an enormous opportunity cost to the attacker.  They would suffer a negative Return of Investment (ROI) in dollar terms for all of their nodes as long as the node count remains above the natural equilibrium point derived from a positive $ROI.

### The Cost of a Sybil Attack on Loki

The cost of this Sybil attack is based on the market price and liquidity of Loki over the course of the attack, but assuming low estimates of Loki’s price, this attack would easily run into the tens or hundreds of millions of dollars. If an attacker could sustain these costs, they would eventually achieve dominance over the Service Node network and hold at least 30% of the nodes on the network.  Other actors would be forced out, depending on their profitability tolerance, and the attacker could potentially start to return a net positive income from this attack. What happens next would then depend on the intentions of the attacker.

If the attacker chose to use their dominance to passively perform analysis on the network, the users of Loki may have not noticed that an attack is occurring until follow-on effects of that analysis arise, at which point the value of the network is likely to decline,  further hurting the attacker financially.

If the attacker where to start using their dominance to undermine the network entirely by manipulating [swarm tests](../Advanced/SwarmFlagging.md), they could initiate the complete collapse of the [Service Node](../ServiceNodes/SNOverview.md) network. This would likely have a catastrophic effect on the value of Loki as Service Nodes leave the network and operators attempt to sell their coins. While the network would have been destroyed, the attacker would now own a very large amount of worthless assets - a cost they cannot recover.

## High Lockup Ratio
Through this analysis we can see that the level of Sybil resistance is derived from the attack cost, which is not only affected by the price of Loki, but also by the fact that a higher lockup ratio of the [circulating supply](../EmissionCurve/#circulating-supply) has a compounding effect on the cost. Thus, we surmised that having an economic condition where a large percentage of the circulating supply becomes locked is desirable for the Loki Network’s Sybil resistance to remain effective. Although the  lockup  selection  is somewhat arbitrary, for the purposes of modelling, Loki placed this percentage target at 50%.

### Effective Dollar Return on Capital Input ($ROI)

A high lockup ratio (LR) is achieved when the dollar term return on capital input ($ROI) had attracted enough [Service Nodes](../ServiceNodes/SNOverview.md) to operate in favour of other forms of investment.

The LR was taken to be the midpoint in an equilibrium, where the number of nodes joining the network drove the rate of return down to the lowest tolerable $ROI compared to other forms of investment, and conversely, nodes leaving the network increased the $ROI for the remaining nodes up to the lowest tolerable $ROI.

$ROI is calculated by a combination of the following:  

- the dollar value of the Loki required to purchase the staking requirement ($SR)

- the expected return on that in terms of Loki (LROI)(as the block reward grants the operator Loki, not dollars)

- the real-world operating cost of running the Service Node (Operating Expenses, $OE) 

- the dollar value of the LROI.

From these variables we deduced the actual $ROI. The exact mathematics are discussed extensively in
Towler’s Paper: [Cryptoeconomics of The Loki Network](https://loki.network/cryptoeconomics).

The LROI is directly proportional to the number of [Service Nodes](../ServiceNodes/SNOverview.md) operating on the network, and the [emission curve](../Advanced/EmissionCurve.md) (the defined Loki inflation rate) embedded into the software. With the emission curve being the one variable we could hard-code, we ensured that it suited the remaining economic conditions we considered desirable.

### Operating Expenses ($OE)
The introduction of the $OE presented a new problem. The cost of operating the [Service Node](../ServiceNodes/SNOverview.md) can only be reflected in dollar terms, the dollar return rate of a Service Node directly affected the viability of the investment. The [staking requirement](../ServiceNodes/StakingRequirement.md) must be set high enough so that the $OE are reasonably negligible compared to the $ROI. That being said, it is also important for the scalability of the network that as many Service Nodes as possible are incentivised to operate within this model, which means the staking requirement had to be set at an amount that balances $ROI and the node count (#N). 

### Max Node Count
The relationship between [staking requirement](../ServiceNodes/StakingRequirement.md)(SR) and the [circulating supply](../EmissionCurve/#circulating-supply)(A) causes a hard limit on #N(Z). 

<img src="https://latex.codecogs.com/svg.latex?\Large&space;Z=\frac{A}{SR}" title="\Large Z=\frac{A}{SR}" />

For example:
If the circulating supply is 50,000,000 and the staking requirement is 50,000, only 1000 nodes can possibly operate. In reality, #N will be the circulating supply divided by the LR, which if we assume our target of 50%, would mean 500 nodes should operate in the right economic conditions.

## Desirable Economic Properties
To design the economic conditions to target a high LR, the $ROI needed to be consistently attractive overtime to raise the LR to our target of 50% or higher. Considering opportunity cost, rational actors would only deploy a [Service Node](../ServiceNodes/SNOverview.md) if the $ROI exceeds that of other forms of investment. Using the long running average of stock market performance, we assumed that an 8% per annum $ROI would be near to the lowest tolerable $ROI for rational actors. Of course, this is difficult to define accurately, as the price of Loki is likely to fluctuate, making any long-term assessment of this profitability near impossible without speculating.

However, something we could redefine was the emission curve, which directly influences LROI through time. LROI will be proportional to the LR, but as the same amount of Loki will be rewarded each block regardless of the LR, it is one variable we could analyse closely.

In summary, we aimed to design the [emission curve](../Advanced/EmissionCurve.md) so that at a target LR of 50%, the rate
of return did not fall below 8% $ROI for as long as possible to allow for a market-based Sybil Resistance.