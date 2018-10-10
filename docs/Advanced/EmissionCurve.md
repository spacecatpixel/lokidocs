#Emission Curve

Loki is a Blockchain network oriented toward the provision of privacy-preserving services over a network of Service Nodes. The salient cryptoeconomic problem is how to incentivise actors in the Loki network to operate Service Nodes in a manner compatible with the objectives of the Loki network, in particular decentralisation and privacy.

To solve this problem the Loki Project team commissioned two Economic papers:

1. [Cryptoeconomics of the Loki Network](https://loki.network/wp-content/uploads/2018/08/CryptoEconomicsOfTheLokiNetworkHistoric.pdf)
2. [Loki Cryptoeconomics](https://loki.network/wp-content/uploads/2018/08/LokiCryptoeconomicHistoric.pdf)

## Block Reward

As a result of this study, on the 30th of July, 2018, at block 64324, the Loki block reward went from being calculated in terms of the circulating supply with an emission speed factor of 20(link to Monero stuff), to be derived from the block height. The formula used to calculate the block reward `BR` where `h` is the block height is:

<img src="https://latex.codecogs.com/svg.latex?\Large&space;BR = 28 + \frac{100}{2^{(\frac{h}{64800})}}" title="\Large BR = 28 + \frac{100}{2^{\frac{*h*}{64800}}}" />

## Block Reward Split

As Service Node's went live on 20th of September, 2018, at block 101250, the addition of a Block Reward split was required to financially incentive the Service Node Operators to maintain and run a Service Node. During the fork on the 30th of July, 2018, the Block Reward was hard coded to split the reward as follows:

|Party|Percent of Reward|
|------|-------|
|Service Nodes|50%|
|Miners|45%|
|Governance|5%|

