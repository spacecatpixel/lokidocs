
# Safely Receiving Loki

In v5.1.2, the Daemon and Wallet have new fields added to indicate if
a transaction is backed by a checkpoint. This means that the transaction has
atleast 2 consecutive Service Node checkpoints proceeding it, meaning,
effectively the transaction can not be reorganised and hence can not be double
spent - once checkpointed.

## Changes

For lokid in `get_info` we return a new field:
- `immutable_height - uint64`: The latest height in the blockchain that can not
  be reorganized from (backed by atleast 2 Service Node, or 1 hardcoded
  checkpoint, 0 if N/A).
```
{
  "status": "OK",
  "height": 234767,
  "target_height": 123,
  "immutable_height": 123,
  ...
}
```

For `loki-wallet-rpc` in `get_transfers` we return a new field:
- `checkpointed - uint64`: If transfer is backed by atleast 2 Service Node
  Checkpoints, 0 if it is not, see `immutable_height` in the daemon rpc call
  `get_info`

For example, if you were requesting for incoming payments- the `checkpointed`
field would look like below.
```
"in": [{
  "txid": "b605cab7e3b9fe1f6d322e3167cd26e1e61c764afa9d733233ef716787786123",
  "payment_id": "f378710e54eeeb8d",
  "height": 234767,
  "timestamp": 123,
  "amount": 123,
  "fee": 123,
  "note": "User assigned note describing something",
  "destinations": [{
    "address": "L8KJf3nRQ53NTX1YLjtHryjegFRa3ZCEGLKmRxUfvkBWK19UteEacVpYqpYscSJ2q8WRuHPFdk7Q5W8pQB7Py5kvUs8vKSk",
    "amount": 123
  }],
  "type": "in",
  "unlock_time": 123,
  "subaddr_index": {
    "major": 2130706433,
    "minor": 2130706433
  },
  "subaddr_indices": [{
    "major": 2130706433,
    "minor": 2130706433
  }],
  "address": "L8KJf3nRQ53NTX1YLjtHryjegFRa3ZCEGLKmRxUfvkBWK19UteEacVpYqpYscSJ2q8WRuHPFdk7Q5W8pQB7Py5kvUs8vKSk",
  "double_spend_seen": true,
  "confirmations": 123,
  "suggested_confirmations_threshold": 123,
  "checkpointed": 1
}],
```

### Command Line Interface

This new information is also exposed in the CLI wallet as well:

With `show_transfers`:
```
132272  miner   locked checkpointed 2019-10-02 07:34         23.533008373 67192cb1c75968511d2c888a1e9007a7b54da873eb6edfbb430b27559c6c3cb0 0000000000000000    0.000000000 - 0 -
132282  miner   locked           no 2019-10-02 07:52         23.531838962 7bc31379ba626ea73f105603689c0e2dc2d42934f2fca6f6277dc8296637bc41 0000000000000000    0.000000000 - 0 - 
```

With `show_transfer 67192cb1c75968511d2c888a1e9007a7b54da873eb6edfbb430b27559c6c3cb0`:
```
Incoming transaction found
txid: <67192cb1c75968511d2c888a1e9007a7b54da873eb6edfbb430b27559c6c3cb0>
Height: 132272
Timestamp: 2019-10-02 07:34:33
Amount: 23.533008373
Payment ID: 0000000000000000
Locked: 23 blocks to unlock
Checkpointed: Yes
Address index: 0
Note:
```

In `export_transfers`:
```
block,     type,    lock,  checkpointed,       timestamp,              amount,     running balance,                                                            hash,      payment ID,           fee,                                                                                         destination,              amount,index,note
    1,    miner,unlocked,  checkpointed,2019-03-07 09:14,       116.603178672,       116.603178672,f8c621b85c86fc4e1f3c0f93954cd28a941ebe1ae5998d0bf0198ccf504c47ab,0000000000000000,   0.000000000,                                                                                                   -,                    ,"0",
    2,    miner,unlocked,  checkpointed,2019-03-07 09:14,       121.597967646,       238.201146318,dd4dd84f255c457bcf937e4a146193043f9e1318dabe00cd1cde60d8929f493b,0000000000000000,   0.000000000,                                                                                                   -,                    ,"0",
```

The changes to RPC are formally documented in our Loki Documentation website (it
is currently being updated and will be shortly available).
- [WalletRPCBeta](https://docs.loki.network/Developer/WalletRPCBeta/)
- [DaemonRPCBeta](https://docs.loki.network/Developer/DaemonRPCBeta/)

The commit that introduced these changes, which also has some more ad-hoc
documentation (whilst Loki Documentation is being updated) is available here
[https://github.com/loki-project/loki/pull/866](https://github.com/loki-project/loki/pull/866)
