# FAQ
## Hardfork Version 10: Bulletproofs
### Extracting Reward Amounts from Block Outputs
In the Bulletproofs hardfork, batching of Governance rewards was introduced and removes the governance output from most miner transactions. This means, for most blocks the outputs will only include the Miner reward and the Service Node reward.

The Governance reward is paid out every `GOVERNANCE_REWARD_INTERVAL` number of blocks, in code this is checked as `(block\_height % GOVERNANCE_REWARD_INTERVAL == 0)`.

```
Block Outputs
[  0] Miner Reward
[ ..] Service Node Reward
[  N]
[N+1] Governance Reward (Appears every N block intervals)
```

An example miner transaction JSON output with the Governance reward

```json
{
  "version": 3,
  "output_unlock_times": [ 49030, 49030, 49030, 49030, 49030 ],
  "is_deregister": "00",
  "unlock_time": 49030,
  "vin": [ { "gen": { "height": 49000 } } ],
  "vout": [ {
      "amount": 39242919169,
      "target": { "key": "1b318acc5674f71997c69710e2de96baa4d1776f19e5938381fa6f12d2d80eb8" }
    }, {
      "amount": 22237654195,
      "target": { "key": "4bb2511f0e46de56b07dfec51499feb027cb2f8ea6eff4ed93b176ef0d3de534" }
    }, {
      "amount": 10682794662,
      "target": { "key": "77446399029849e67ebd1df7728241920b7fa16c48c7794bf9dc15605b5d35f9" }
    }, {
      "amount": 10682794662,
      "target": { "key": "0fe5af8f07c09f07291d7e9b13ec45f35d2535a04e1ca710a1acad4c6f1a6665" }
    }, {
      "amount": 4376229747993,
      "target": { "key": "f1a6a802c4708a1c6eb083078290087d3974ce6ea72251821cd47c64325cf98f" }
    }
  ],
  "extra": [ 1, 51, 91, 83, 33, 151, 51, 186, 159, 157, 22, 207, 125, 106, 249, 180, 78, 209, 115, 87, 137, 148, 111, 194, 29, 183, 127, 195, 221, 207, 112, 147, 96, 1, 15, 153, 186, 200, 221, 217, 236, 119, 34, 82, 16, 3, 88, 68, 231, 87, 37, 85, 215, 211, 227, 140, 211, 75, 139, 67, 116, 190, 86, 79, 78, 243, 114, 163, 227, 143, 84, 151, 173, 48, 235, 64, 252, 86, 154, 104, 127, 82, 18, 101, 176, 99, 196, 186, 255, 191, 85, 34, 135, 248, 100, 29, 238, 82, 80 ],
  "rct_signatures": { "type": 0 }
}
```

An example miner transaction JSON output without the Governance reward

```json
{
  "version": 3,
  "output_unlock_times": [ 49029, 49029 ],
  "is_deregister": "00",
  "unlock_time": 49029,
  "vin": [ { "gen": { "height": 48999 } } ],
  "vout": [ {
      "amount": 39243204162,
      "target": { "key": "f57b08e200dc36a27b4cfe7ad4276103951c832153a46e3ba0fa613493dcd989" }
    }, {
      "amount": 43603560179,
      "target": { "key": "6d5e496c1171ca87345f43203ca14bbd09928368322372b621c9d56ee5c04816" }
    }
  ],
  "extra": [ 1, 111, 176, 48, 118, 238, 20, 185, 147, 73, 50, 237, 56, 244, 35, 100, 209, 18, 212, 20, 86, 198, 62, 67, 138, 81, 80, 191, 70, 208, 1, 245, 91, 1, 11, 40, 147, 97, 124, 226, 43, 104, 88, 49, 95, 19, 238, 240, 167, 62, 187, 128, 112, 79, 25, 145, 98, 176, 162, 207, 79, 7, 2, 59, 216, 8, 114, 86, 239, 115, 20, 49, 190, 232, 248, 253, 178, 163, 240, 56, 147, 237, 152, 185, 252, 116, 154, 225, 95, 58, 159, 122, 64, 249, 51, 183, 239, 255, 227 ],
  "rct_signatures": { "type": 0 }
}
```

## Hardfork Version 9: Service Nodes
### Extracting Reward Amounts from Block Outputs
This hardfork introduces Service Node rewards to the outputs of the miner transaction. Service Nodes can split the given reward with up to 4 participants. Then, at most the miner transaction can have a maximum of 6 outputs, 1 reserved for the miner, 1 for governance, up to 4 for service node participants.

```
Transaction Outputs
[  0] Miner Reward
[ ..] Service Node Reward
[  N]
[N+1] Governance Reward
```

An example miner transaction JSON output with 4 service node participants looks like

```json
{
  "version": 3,
  "output_unlock_times": [ 155552, 155552, 155552, 155552, 155552, 155552 ],
  "is_deregister": "00",
  "unlock_time": 155552,
  "vin": [ { "gen": { "height": 155522 } } ],
  "vout": [ {
      "amount": 21165158143,
      "target": { "key": "8e0870425ad7f7709d6a4125a7088f0dd284e5b0415248b4b8556678ad4f3a3d" }
    }, {
      "amount": 6221340556,
      "target": { "key": "03491d83a076a74df6c6d726aeffd2cc4c59ae56107c730a195ee329d838e088" }
    }, {
      "amount": 6607995571,
      "target": { "key": "a54619d6b0b68c8d824445336d5dd246338aa7482546118f48d32f5d92a3aad8" }
    }, {
      "amount": 6874654507,
      "target": { "key": "3941327ebcb42c3fa78fa450e0d7d1cf40b501832f0b4d9cc7a4654b4c1f685b" }
    }, {
      "amount": 3769035241,
      "target": { "key": "a8184d530cb7180590c04a19c38ba52c055d6ffcdfdad2fb62b8802477f11117" }
    }, {
      "amount": 2347302587,
      "target": { "key": "554f16bd4a06364b27edf898b5358b4e3f5c1218f3dc415d48eb2bff4707cf42" }
    }
  ],
  "extra": [ 1, 183, 139, 12, 51, 196, 162, 46, 137, 28, 148, 226, 122, 234, 40, 128, 33, 255, 251, 170, 208, 13, 80, 26, 17, 125, 130, 59, 48, 77, 47, 141, 124, 2, 48, 57, 48, 48, 49, 0, 5, 0, 0, 0, 35, 179, 201, 210, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 175, 103, 128, 158, 243, 146, 164, 73, 129, 26, 30, 121, 232, 11, 191, 215, 180, 172, 163, 109, 3, 24, 155, 215, 12, 91, 205, 228, 207, 230, 98, 195, 114, 42, 113, 8, 57, 98, 253, 18, 228, 209, 176, 148, 179, 127, 111, 216, 201, 220, 3, 125, 188, 119, 29, 34, 140, 51, 224, 211, 10, 53, 119, 58, 1 ],
  "rct_signatures": { "type": 0 }
}
```
