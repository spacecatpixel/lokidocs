# Introduction

This is a list of the lokid daemon RPC calls, their inputs and outputs, and examples of each.

Many RPC calls use the daemon's JSON RPC interface while others use their own interfaces, as demonstrated below.

Note: "atomic units" refer to the smallest fraction of 1 LOKI according to the lokid implementation. 1 LOKI = 1e12 atomic units.

## RPC Methods

 - [COMMAND_RPC_GET_HEIGHT](#command_rpc_get_height)
 - [COMMAND_RPC_GET_BLOCKS_FAST](#command_rpc_get_blocks_fast)
 - [COMMAND_RPC_GET_BLOCKS_BY_HEIGHT](#command_rpc_get_blocks_by_height)
 - [COMMAND_RPC_GET_ALT_BLOCKS_HASHES](#command_rpc_get_alt_blocks_hashes)
 - [COMMAND_RPC_GET_HASHES_FAST](#command_rpc_get_hashes_fast)
 - [COMMAND_RPC_GET_TRANSACTIONS](#command_rpc_get_transactions)
 - [COMMAND_RPC_IS_KEY_IMAGE_SPENT](#command_rpc_is_key_image_spent)
 - [COMMAND_RPC_GET_TX_GLOBAL_OUTPUTS_INDEXES](#command_rpc_get_tx_global_outputs_indexes)
 - [COMMAND_RPC_GET_OUTPUTS_BIN](#command_rpc_get_outputs_bin)
 - [COMMAND_RPC_GET_OUTPUTS](#command_rpc_get_outputs)
 - [COMMAND_RPC_SEND_RAW_TX](#command_rpc_send_raw_tx)
 - [COMMAND_RPC_START_MINING](#command_rpc_start_mining)
 - [COMMAND_RPC_GET_INFO](#command_rpc_get_info)
 - [COMMAND_RPC_GET_ALL_SERVICE_NODES_KEYS](#command_rpc_get_all_service_nodes_keys)
 - [COMMAND_RPC_STOP_MINING](#command_rpc_stop_mining)
 - [COMMAND_RPC_MINING_STATUS](#command_rpc_mining_status)
 - [COMMAND_RPC_SAVE_BC](#command_rpc_save_bc)
 - [COMMAND_RPC_GETBLOCKCOUNT](#command_rpc_getblockcount)
 - [COMMAND_RPC_GETBLOCKHASH](#command_rpc_getblockhash)
 - [COMMAND_RPC_GETBLOCKTEMPLATE](#command_rpc_getblocktemplate)
 - [COMMAND_RPC_SUBMITBLOCK](#command_rpc_submitblock)
 - [COMMAND_RPC_GENERATEBLOCKS](#command_rpc_generateblocks)
 - [COMMAND_RPC_GET_LAST_BLOCK_HEADER](#command_rpc_get_last_block_header)
 - [COMMAND_RPC_GET_BLOCK_HEADER_BY_HASH](#command_rpc_get_block_header_by_hash)
 - [COMMAND_RPC_GET_BLOCK_HEADER_BY_HEIGHT](#command_rpc_get_block_header_by_height)
 - [COMMAND_RPC_GET_BLOCK](#command_rpc_get_block)
 - [COMMAND_RPC_SET_LOG_HASH_RATE](#command_rpc_set_log_hash_rate)
 - [COMMAND_RPC_SET_LOG_LEVEL](#command_rpc_set_log_level)
 - [COMMAND_RPC_SET_LOG_CATEGORIES](#command_rpc_set_log_categories)
 - [COMMAND_RPC_GET_TRANSACTION_POOL](#command_rpc_get_transaction_pool)
 - [COMMAND_RPC_GET_TRANSACTION_POOL_HASHES_BIN](#command_rpc_get_transaction_pool_hashes_bin)
 - [COMMAND_RPC_GET_TRANSACTION_POOL_HASHES](#command_rpc_get_transaction_pool_hashes)
 - [COMMAND_RPC_GET_TRANSACTION_POOL_BACKLOG](#command_rpc_get_transaction_pool_backlog)
 - [COMMAND_RPC_GET_CONNECTIONS](#command_rpc_get_connections)
 - [COMMAND_RPC_GET_BLOCK_HEADERS_RANGE](#command_rpc_get_block_headers_range)
 - [COMMAND_RPC_STOP_DAEMON](#command_rpc_stop_daemon)
 - [COMMAND_RPC_GET_LIMIT](#command_rpc_get_limit)
 - [COMMAND_RPC_SET_LIMIT](#command_rpc_set_limit)
 - [COMMAND_RPC_OUT_PEERS](#command_rpc_out_peers)
 - [COMMAND_RPC_IN_PEERS](#command_rpc_in_peers)
 - [COMMAND_RPC_START_SAVE_GRAPH](#command_rpc_start_save_graph)
 - [COMMAND_RPC_STOP_SAVE_GRAPH](#command_rpc_stop_save_graph)
 - [COMMAND_RPC_HARD_FORK_INFO](#command_rpc_hard_fork_info)
 - [COMMAND_RPC_GETBANS](#command_rpc_getbans)
 - [COMMAND_RPC_SETBANS](#command_rpc_setbans)
 - [COMMAND_RPC_FLUSH_TRANSACTION_POOL](#command_rpc_flush_transaction_pool)
 - [COMMAND_RPC_GET_OUTPUT_HISTOGRAM](#command_rpc_get_output_histogram)
 - [COMMAND_RPC_GET_VERSION](#command_rpc_get_version)
 - [COMMAND_RPC_GET_COINBASE_TX_SUM](#command_rpc_get_coinbase_tx_sum)
 - [COMMAND_RPC_GET_BASE_FEE_ESTIMATE](#command_rpc_get_base_fee_estimate)
 - [COMMAND_RPC_GET_ALTERNATE_CHAINS](#command_rpc_get_alternate_chains)
 - [COMMAND_RPC_UPDATE](#command_rpc_update)
 - [COMMAND_RPC_RELAY_TX](#command_rpc_relay_tx)
 - [COMMAND_RPC_SYNC_INFO](#command_rpc_sync_info)
 - [COMMAND_RPC_GET_OUTPUT_DISTRIBUTION](#command_rpc_get_output_distribution)
 - [COMMAND_RPC_POP_BLOCKS](#command_rpc_pop_blocks)
 - [COMMAND_RPC_PRUNE_BLOCKCHAIN](#command_rpc_prune_blockchain)
 - [COMMAND_RPC_GET_QUORUM_STATE](#command_rpc_get_quorum_state)
 - [COMMAND_RPC_GET_QUORUM_STATE_BATCHED](#command_rpc_get_quorum_state_batched)
 - [COMMAND_RPC_GET_SERVICE_NODE_REGISTRATION_CMD_RAW](#command_rpc_get_service_node_registration_cmd_raw)
 - [COMMAND_RPC_GET_SERVICE_NODE_REGISTRATION_CMD](#command_rpc_get_service_node_registration_cmd)
 - [COMMAND_RPC_GET_SERVICE_NODE_KEY](#command_rpc_get_service_node_key)
 - [COMMAND_RPC_GET_SERVICE_NODES](#command_rpc_get_service_nodes)
 - [COMMAND_RPC_GET_STAKING_REQUIREMENT](#command_rpc_get_staking_requirement)
 - [COMMAND_RPC_GET_SERVICE_NODE_BLACKLISTED_KEY_IMAGES](#command_rpc_get_service_node_blacklisted_key_images)
 - [COMMAND_RPC_GET_OUTPUT_BLACKLIST](#command_rpc_get_output_blacklist)


--- 

### COMMAND_RPC_GET_HEIGHT


Get the node's current height.

**Inputs:**


**Outputs:**

 * `height - uint64`: The current blockchain height according to the queried daemon.
 * `status - string`: Generic RPC error code. "OK" is the success value.
 * `untrusted - bool`: If the result is obtained using bootstrap mode, and therefore not trusted `true`, or otherwise `false`.


--- 

### COMMAND_RPC_GET_BLOCKS_FAST


Get all blocks info. Binary request.

**Inputs:**

 * `block_ids - string[64][]`: First 10 blocks id goes sequential, next goes in pow(2,n) offset, like 2, 4, 8, 16, 32, 64 and so on, and the last one is always genesis block
 * `start_height - uint64`: The starting block's height.
 * `prune - bool`: Prunes the blockchain, drops off 7/8 off the block iirc.
 * `no_miner_tx - bool`: Optional (false by default).

**Outputs:**

 * `blocks - block_complete_entry[]`: Array of block complete entries
 * `start_height - uint64`: The starting block's height.
 * `current_height - uint64`: The current block height.
 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `output_indices - block_output_indices[]`: Array of indices.
     * `indices - tx_output_indices[]`: Array of TX output indices:
         * `indices - uint64[]`: Array of unsigned int.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_BLOCKS_BY_HEIGHT


Get blocks by height. Binary request.

**Inputs:**

 * `heights - uint64[]`: List of block heights

**Outputs:**

 * `blocks - block_complete_entry[]`: Array of block complete entries
 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_ALT_BLOCKS_HASHES


Get the known blocks hashes which are not on the main chain.

**Inputs:**


**Outputs:**

 * `blks_hashes - string[]`: List of alternative blocks hashes to main chain.
 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_HASHES_FAST


Get hashes. Binary request.

**Inputs:**

 * `block_ids - string[64][]`: First 10 blocks id goes sequential, next goes in pow(2,n) offset, like 2, 4, 8, 16, 32, 64 and so on, and the last one is always genesis block */
 * `start_height - uint64`: The starting block's height.

**Outputs:**

 * `m_block_ids - string[64][]`: Binary array of hashes, See block_ids above.
 * `start_height - uint64`: The starting block's height.
 * `current_height - uint64`: The current block height.
 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_TRANSACTIONS


Look up one or more transactions by hash.

**Inputs:**

 * `txs_hashes - string[]`: List of transaction hashes to look up.
 * `decode_as_json - bool`: Optional (`false` by default). If set true, the returned transaction information will be decoded rather than binary.
 * `prune - bool`: Prunes the blockchain, drops off 7/8 off the block iirc. Optional (`False` by default).
 * `split - bool`: Optional (`false` by default).

**Outputs:**

 * `txs_as_hex - string[]`: Full transaction information as a hex string (old compatibility parameter)
 * `txs_as_json - string[]`: Transactions decoded as json (old compat)
 * `missed_tx - string[]`: (Optional - returned if not empty) Transaction hashes that could not be found.
 * `txs - entry[]`: Array of structure entry as follows:
     * `tx_hash - string`: Transaction hash.
     * `as_hex - string`: Full transaction information as a hex string.
     * `pruned_as_hex - string`
     * `prunable_as_hex - string`
     * `prunable_hash - string`
     * `as_json - string`: List of transaction info.
     * `in_pool - bool`: States if the transaction is in pool (`true`) or included in a block (`false`).
     * `double_spend_seen - bool`: States if the transaction is a double-spend (`true`) or not (`false`).
     * `block_height - uint64`: Block height including the transaction.
     * `block_timestamp - uint64`: Unix time at chich the block has been added to the blockchain.
     * `output_indices - uint64[]`: List of transaction indexes.
 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_IS_KEY_IMAGE_SPENT


Check if outputs have been spent using the key image associated with the output.

**Inputs:**

 * `key_images - string[]`: List of key image hex strings to check.

**Outputs:**

 * `spent_status - int[]`: List of statuses for each image checked. Statuses are follows: 0 = unspent, 1 = spent in blockchain, 2 = spent in transaction pool
 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_TX_GLOBAL_OUTPUTS_INDEXES


Get global outputs of transactions. Binary request.

**Inputs:**

 * `txid - string[64]`: Binary txid.

**Outputs:**

 * `o_indexes - uint64[]`: List of output indexes
 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_OUTPUTS_BIN


Get outputs. Binary request.

**Inputs:**

 * `outputs - get_outputs_out[]`: Array of structure `get_outputs_out`.
     * `amount - uint64`: Amount of Loki in TXID.
     * `index - uint64`
 * `get_txid - bool`: TXID

**Outputs:**

 * `outs - outkey[]`: List of outkey information.
     * `key - crypto::public_key`: The public key of the output.
     * `mask - rct::key`
     * `unlocked - bool`: States if output is locked (`false`) or not (`true`).
     * `height - uint64`: Block height of the output.
     * `txid - string[64]`: Transaction id.
 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_OUTPUTS

**Inputs:**

 * `outputs - get_outputs_out[]`: Array of structure `get_outputs_out`.
     * `amount - uint64`: Amount of Loki in TXID.
     * `index - uint64`

**Outputs:**

 * `outs - outkey[]`: List of outkey information.
     * `key - string`: The public key of the output.
     * `mask - string`
     * `unlocked - bool`: States if output is locked (`false`) or not (`true`).
     * `height - uint64`: Block height of the output.
     * `txid - string`: Transaction id.
 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_SEND_RAW_TX


Broadcast a raw transaction to the network.

**Inputs:**

 * `tx_as_hex - string`: Full transaction information as hexidecimal string.
 * `do_not_relay - bool`: Stop relaying transaction to other nodes (default is `false`).

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.
 * `reason - string`: Additional information. Currently empty or "Not relayed" if transaction was accepted but not relayed.
 * `not_relayed - bool`: Transaction was not relayed (true) or relayed (false).
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).
 * `tvc - tx_verification_context`


--- 

### COMMAND_RPC_START_MINING


Start mining on the daemon.

**Inputs:**

 * `miner_address - string`: Account address to mine to.
 * `threads_count - uint64`: Number of mining thread to run.
 * `do_background_mining - bool`: States if the mining should run in background (`true`) or foreground (`false`).
 * `ignore_battery - bool`: States if battery state (on laptop) should be ignored (`true`) or not (`false`).

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.


--- 

### COMMAND_RPC_GET_INFO


Retrieve general information about the state of your node and the network.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `height - uint64`: Current length of longest chain known to daemon.
 * `target_height - uint64`: The height of the next block in the chain.
 * `difficulty - uint64`: Network difficulty (analogous to the strength of the network).
 * `target - uint64`: Current target for next proof of work.
 * `tx_count - uint64`: Total number of non-coinbase transaction in the chain.
 * `tx_pool_size - uint64`: Number of transactions that have been broadcast but not included in a block.
 * `alt_blocks_count - uint64`: Number of alternative blocks to main chain.
 * `outgoing_connections_count - uint64`: Number of peers that you are connected to and getting information from.
 * `incoming_connections_count - uint64`: Number of peers connected to and pulling from your node.
 * `rpc_connections_count - uint64`: Number of RPC client connected to the daemon (Including this RPC request).
 * `white_peerlist_size - uint64`: White Peerlist Size
 * `grey_peerlist_size - uint64`: Grey Peerlist Size
 * `mainnet - bool`: States if the node is on the mainnet (`true`) or not (`false`).
 * `testnet - bool`: States if the node is on the testnet (`true`) or not (`false`).
 * `stagenet - bool`: States if the node is on the stagenet (`true`) or not (`false`).
 * `nettype - string`: Nettype value used.
 * `top_block_hash - string`: Hash of the highest block in the chain.
 * `cumulative_difficulty - uint64`: Cumulative difficulty of all blocks in the blockchain.
 * `block_size_limit - uint64`: Maximum allowed block size.
 * `block_weight_limit - uint64`: Maximum allowed block weight.
 * `block_size_median - uint64`: Median block size of latest 100 blocks.
 * `block_weight_median - uint64`: Median block weight of latest 100 blocks.
 * `start_time - uint64`: Start time of the daemon, as UNIX time.
 * `free_space - uint64`: Available disk space on the node.
 * `offline - bool`: States if the node is offline (`true`) or online (`false`).
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).
 * `bootstrap_daemon_address - string`: Bootstrap node to give immediate usability to wallets while syncing by proxying RPC to it. (Note: the replies may be untrustworthy).
 * `height_without_bootstrap - uint64`: Current length of the local chain of the daemon.
 * `was_bootstrap_ever_used - bool`: States if a bootstrap node has ever been used since the daemon started.
 * `database_size - uint64`: Current size of Blockchain data.
 * `update_available - bool`: States if a update is available ('true') and if one is not available ('false').
 * `version - string`: Current version of software running.


--- 

### COMMAND_RPC_GET_ALL_SERVICE_NODES_KEYS


Retrieve all Service Node Keys.

**Inputs:**

 * `fully_funded_nodes_only - bool`: Return keys for service nodes if they are funded and working on the network

**Outputs:**

 * `keys - string[]`: Returns as base32z of the hex key, for Lokinet internal usage


--- 

### COMMAND_RPC_STOP_MINING


Stop mining on the daemon.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.


--- 

### COMMAND_RPC_MINING_STATUS


Get the mining status of the daemon.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.
 * `active - bool`: States if mining is enabled (`true`) or disabled (`false`).
 * `speed - uint64`: Mining power in hashes per seconds.
 * `threads_count - uint32`: Number of running mining threads.
 * `address - string`: Account address daemon is mining to. Empty if not mining.
 * `is_background_mining_enabled - bool`: States if the mining is running in background (`true`) or foreground (`false`).


--- 

### COMMAND_RPC_SAVE_BC


Save the blockchain. The blockchain does not need saving and is always saved when modified, 
however it does a sync to flush the filesystem cache onto the disk for safety purposes against Operating System or Hardware crashes.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.


--- 

### COMMAND_RPC_GETBLOCKCOUNT


Look up how many blocks are in the longest chain known to the node.

**Inputs:**

 * `request - string[]`

**Outputs:**

 * `count - uint64`: Number of blocks in longest chain seen by the node.
 * `status - string`: General RPC error code. "OK" means everything looks good.


--- 

### COMMAND_RPC_GETBLOCKHASH


Look up a block's hash by its height.

**Inputs:**

 * `request - uint64[]`: Block height (int array of length 1).

**Outputs:**

 * `response - string`: Block hash (string).


--- 

### COMMAND_RPC_GETBLOCKTEMPLATE


Get a block template on which mining a new block.

**Inputs:**

 * `reserve_size - uint64`: Max 255 bytes
 * `wallet_address - string`: Address of wallet to receive coinbase transactions if block is successfully mined.

**Outputs:**

 * `difficulty - uint64`: Difficulty of next block.
 * `height - uint64`: Height on which to mine.
 * `reserved_offset - uint64`: Reserved offset.
 * `expected_reward - uint64`: Coinbase reward expected to be received if block is successfully mined.
 * `prev_hash - string`: Hash of the most recent block on which to mine the next block.
 * `blocktemplate_blob - string`: Blob on which to try to mine a new block.
 * `blockhashing_blob - string`: Blob on which to try to find a valid nonce.
 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_SUBMITBLOCK


Submit a mined block to the network.

**Inputs:**

 * `request - string[]`: Block blob data - array of strings; list of block blobs which have been mined. See get_block_template to get a blob on which to mine.

**Outputs:**

 * `status - string`: Block submit status.


--- 

### COMMAND_RPC_GENERATEBLOCKS


Developer only.

**Inputs:**

 * `amount_of_blocks - uint64`
 * `wallet_address - string`

**Outputs:**

 * `height - uint64`
 * `status - string`: General RPC error code. "OK" means everything looks good.


--- 

### COMMAND_RPC_GET_LAST_BLOCK_HEADER


Block header information for the most recent block is easily retrieved with this method. No inputs are needed.

**Inputs:**

 * `fill_pow_hash - bool`: Tell the daemon if it should fill out pow_hash field.

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `block_header - block_header_response`: A structure containing block header information.
     * `major_version - uint8`: The major version of the loki protocol at this block height.
     * `minor_version - uint8`: The minor version of the loki protocol at this block height.
     * `timestamp - uint64`: The unix time at which the block was recorded into the blockchain.
     * `prev_hash - string`: The hash of the block immediately preceding this block in the chain.
     * `nonce - uint32`: A cryptographic random one-time number used in mining a Loki block.
     * `orphan_status - bool`: Usually `false`. If `true`, this block is not part of the longest chain.
     * `height - uint64`: The number of blocks preceding this block on the blockchain.
     * `depth - uint64`: The number of blocks succeeding this block on the blockchain. A larger number means an older block.
     * `hash - string`: The hash of this block.
     * `difficulty - uint64`: The strength of the Loki network based on mining power.
     * `cumulative_difficulty - uint64`: The cumulative strength of the Loki network based on mining power.
     * `reward - uint64`: The amount of new generated in this block and rewarded to the miner, foundation and service Nodes. Note: 1 LOKI = 1e12 atomic units.
     * `miner_reward - uint64`: The amount of new generated in this block and rewarded to the miner. Note: 1 LOKI = 1e12 atomic units. 
     * `block_size - uint64`: The block size in bytes.
     * `block_weight - uint64`: The block weight in bytes.
     * `num_txes - uint64`: Number of transactions in the block, not counting the coinbase tx.
     * `pow_hash - string`: The hash of the block's proof of work.
     * `long_term_weight - uint64`: Long term weight of the block.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_BLOCK_HEADER_BY_HASH


Block header information can be retrieved using either a block's hash or height. This method includes a block's hash as an input parameter to retrieve basic information about the block.

**Inputs:**

 * `hash - string`: The block's SHA256 hash.
 * `fill_pow_hash - bool`: Tell the daemon if it should fill out pow_hash field.

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `block_header - block_header_response`: A structure containing block header information.
     * `major_version - uint8`: The major version of the loki protocol at this block height.
     * `minor_version - uint8`: The minor version of the loki protocol at this block height.
     * `timestamp - uint64`: The unix time at which the block was recorded into the blockchain.
     * `prev_hash - string`: The hash of the block immediately preceding this block in the chain.
     * `nonce - uint32`: A cryptographic random one-time number used in mining a Loki block.
     * `orphan_status - bool`: Usually `false`. If `true`, this block is not part of the longest chain.
     * `height - uint64`: The number of blocks preceding this block on the blockchain.
     * `depth - uint64`: The number of blocks succeeding this block on the blockchain. A larger number means an older block.
     * `hash - string`: The hash of this block.
     * `difficulty - uint64`: The strength of the Loki network based on mining power.
     * `cumulative_difficulty - uint64`: The cumulative strength of the Loki network based on mining power.
     * `reward - uint64`: The amount of new generated in this block and rewarded to the miner, foundation and service Nodes. Note: 1 LOKI = 1e12 atomic units.
     * `miner_reward - uint64`: The amount of new generated in this block and rewarded to the miner. Note: 1 LOKI = 1e12 atomic units. 
     * `block_size - uint64`: The block size in bytes.
     * `block_weight - uint64`: The block weight in bytes.
     * `num_txes - uint64`: Number of transactions in the block, not counting the coinbase tx.
     * `pow_hash - string`: The hash of the block's proof of work.
     * `long_term_weight - uint64`: Long term weight of the block.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_BLOCK_HEADER_BY_HEIGHT


Similar to get_block_header_by_hash above, this method includes a block's height as an input parameter to retrieve basic information about the block.

**Inputs:**

 * `height - uint64`: The block's height.
 * `fill_pow_hash - bool`: Tell the daemon if it should fill out pow_hash field.

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `block_header - block_header_response`: A structure containing block header information.
     * `major_version - uint8`: The major version of the loki protocol at this block height.
     * `minor_version - uint8`: The minor version of the loki protocol at this block height.
     * `timestamp - uint64`: The unix time at which the block was recorded into the blockchain.
     * `prev_hash - string`: The hash of the block immediately preceding this block in the chain.
     * `nonce - uint32`: A cryptographic random one-time number used in mining a Loki block.
     * `orphan_status - bool`: Usually `false`. If `true`, this block is not part of the longest chain.
     * `height - uint64`: The number of blocks preceding this block on the blockchain.
     * `depth - uint64`: The number of blocks succeeding this block on the blockchain. A larger number means an older block.
     * `hash - string`: The hash of this block.
     * `difficulty - uint64`: The strength of the Loki network based on mining power.
     * `cumulative_difficulty - uint64`: The cumulative strength of the Loki network based on mining power.
     * `reward - uint64`: The amount of new generated in this block and rewarded to the miner, foundation and service Nodes. Note: 1 LOKI = 1e12 atomic units.
     * `miner_reward - uint64`: The amount of new generated in this block and rewarded to the miner. Note: 1 LOKI = 1e12 atomic units. 
     * `block_size - uint64`: The block size in bytes.
     * `block_weight - uint64`: The block weight in bytes.
     * `num_txes - uint64`: Number of transactions in the block, not counting the coinbase tx.
     * `pow_hash - string`: The hash of the block's proof of work.
     * `long_term_weight - uint64`: Long term weight of the block.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_BLOCK


Full block information can be retrieved by either block height or hash, like with the above block header calls. 
For full block information, both lookups use the same method, but with different input parameters.

**Inputs:**

 * `hash - string`: The block's hash.
 * `height - uint64`: The block's height.
 * `fill_pow_hash - bool`: Tell the daemon if it should fill out pow_hash field.

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `block_header - block_header_response`: A structure containing block header information. See get_last_block_header.
     * `major_version - uint8`: The major version of the loki protocol at this block height.
     * `minor_version - uint8`: The minor version of the loki protocol at this block height.
     * `timestamp - uint64`: The unix time at which the block was recorded into the blockchain.
     * `prev_hash - string`: The hash of the block immediately preceding this block in the chain.
     * `nonce - uint32`: A cryptographic random one-time number used in mining a Loki block.
     * `orphan_status - bool`: Usually `false`. If `true`, this block is not part of the longest chain.
     * `height - uint64`: The number of blocks preceding this block on the blockchain.
     * `depth - uint64`: The number of blocks succeeding this block on the blockchain. A larger number means an older block.
     * `hash - string`: The hash of this block.
     * `difficulty - uint64`: The strength of the Loki network based on mining power.
     * `cumulative_difficulty - uint64`: The cumulative strength of the Loki network based on mining power.
     * `reward - uint64`: The amount of new generated in this block and rewarded to the miner, foundation and service Nodes. Note: 1 LOKI = 1e12 atomic units.
     * `miner_reward - uint64`: The amount of new generated in this block and rewarded to the miner. Note: 1 LOKI = 1e12 atomic units. 
     * `block_size - uint64`: The block size in bytes.
     * `block_weight - uint64`: The block weight in bytes.
     * `num_txes - uint64`: Number of transactions in the block, not counting the coinbase tx.
     * `pow_hash - string`: The hash of the block's proof of work.
     * `long_term_weight - uint64`: Long term weight of the block.
 * `miner_tx_hash - string`: Miner transaction information
 * `tx_hashes - string[]`: List of hashes of non-coinbase transactions in the block. If there are no other transactions, this will be an empty list.
 * `blob - string`: Hexadecimal blob of block information.
 * `json - string`: JSON formatted block details.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_SET_LOG_HASH_RATE


Set the log hash rate display mode.

**Inputs:**

 * `visible - bool`: States if hash rate logs should be visible (true) or hidden (false)

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.


--- 

### COMMAND_RPC_SET_LOG_LEVEL


Set the daemon log level. By default, log level is set to `0`.

**Inputs:**

 * `level - int8_t`: Daemon log level to set from `0` (less verbose) to `4` (most verbose)

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.


--- 

### COMMAND_RPC_SET_LOG_CATEGORIES


Set the daemon log categories. Categories are represented as a comma separated list of `<Category>:<level>` (similarly to syslog standard `<Facility>:<Severity-level>`), where:
Category is one of the following: * (all facilities), default, net, net.http, net.p2p, logging, net.trottle, blockchain.db, blockchain.db.lmdb, bcutil, checkpoints, net.dns, net.dl,
i18n, perf,stacktrace, updates, account, cn ,difficulty, hardfork, miner, blockchain, txpool, cn.block_queue, net.cn, daemon, debugtools.deserialize, debugtools.objectsizes, device.ledger, 
wallet.gen_multisig, multisig, bulletproofs, ringct, daemon.rpc, wallet.simplewallet, WalletAPI, wallet.ringdb, wallet.wallet2, wallet.rpc, tests.core.
Level is one of the following: FATAL - higher level, ERROR, WARNING, INFO, DEBUG, TRACE.
Lower level A level automatically includes higher level. By default, categories are set to:
`*:WARNING,net:FATAL,net.p2p:FATAL,net.cn:FATAL,global:INFO,verify:FATAL,stacktrace:INFO,logging:INFO,msgwriter:INFO`
Setting the categories to "" prevent any logs to be outputed.

**Inputs:**

 * `categories - string`: Optional, daemon log categories to enable

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.
 * `categories - string`: Daemon log enabled categories


--- 

### COMMAND_RPC_GET_TRANSACTION_POOL


Show information about valid transactions seen by the node but not yet mined into a block, 
as well as spent key image information for the txpool in the node's memory.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `transactions - tx_info[]`: List of transactions in the mempool are not in a block on the main chain at the moment:
     * `id_hash - string`: The transaction ID hash.
     * `tx_json - string`: JSON structure of all information in the transaction
     * `blob_size - uint64`: The size of the full transaction blob.
     * `weight - uint64`: The weight of the transaction.
     * `fee - uint64`: The amount of the mining fee included in the transaction, in atomic units.
     * `max_used_block_id_hash - string`: Tells the hash of the most recent block with an output used in this transaction.
     * `max_used_block_height - uint64`: Tells the height of the most recent block with an output used in this transaction.
     * `kept_by_block - bool`: States if the tx was included in a block at least once (`true`) or not (`false`).
     * `last_failed_height - uint64`: If the transaction validation has previously failed, this tells at what height that occured.
     * `last_failed_id_hash - string`: Like the previous, this tells the previous transaction ID hash.
     * `receive_time - uint64`: The Unix time that the transaction was first seen on the network by the node.
     * `relayed - bool`: States if this transaction has been relayed
     * `last_relayed_time - uint64`: Last unix time at which the transaction has been relayed.
     * `do_not_relay - bool`: States if this transaction should not be relayed.
     * `double_spend_seen - bool`: States if this transaction has been seen as double spend.
     * `tx_blob - string`: Hexadecimal blob represnting the transaction.
 * `spent_key_images - spent_key_image_info[]`: List of spent output key images:
     * `id_hash - string`: Key image.
     * `txs_hashes - string[]`: List of tx hashes of the txes (usually one) spending that key image.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_TRANSACTION_POOL_HASHES_BIN


Get hashes from transaction pool. Binary request.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `tx_hashes - string[64][]`: List of transaction hashes,
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_TRANSACTION_POOL_HASHES


Get hashes from transaction pool.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `tx_hashes - string[]`: List of transaction hashes,
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_TRANSACTION_POOL_BACKLOG


Get all transaction pool backlog.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `backlog - tx_backlog_entry[]`: Array of structures tx_backlog_entry (in binary form):
     * `weight - uint64`
     * `fee - uint64`: Fee in Loki measured in atomic units.
     * `time_in_pool - uint64`
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_CONNECTIONS


Retrieve information about incoming and outgoing connections to your node.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `connections - connection_info[]`: List of all connections and their info:


--- 

### COMMAND_RPC_GET_BLOCK_HEADERS_RANGE


Similar to get_block_header_by_height above, but for a range of blocks. 
This method includes a starting block height and an ending block height as 
parameters to retrieve basic information about the range of blocks.

**Inputs:**

 * `start_height - uint64`: The starting block's height.
 * `end_height - uint64`: The ending block's height.
 * `fill_pow_hash - bool`: Tell the daemon if it should fill out pow_hash field.

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `headers - block_header_response[]`: Array of block_header (a structure containing block header information. See get_last_block_header).
     * `major_version - uint8`: The major version of the loki protocol at this block height.
     * `minor_version - uint8`: The minor version of the loki protocol at this block height.
     * `timestamp - uint64`: The unix time at which the block was recorded into the blockchain.
     * `prev_hash - string`: The hash of the block immediately preceding this block in the chain.
     * `nonce - uint32`: A cryptographic random one-time number used in mining a Loki block.
     * `orphan_status - bool`: Usually `false`. If `true`, this block is not part of the longest chain.
     * `height - uint64`: The number of blocks preceding this block on the blockchain.
     * `depth - uint64`: The number of blocks succeeding this block on the blockchain. A larger number means an older block.
     * `hash - string`: The hash of this block.
     * `difficulty - uint64`: The strength of the Loki network based on mining power.
     * `cumulative_difficulty - uint64`: The cumulative strength of the Loki network based on mining power.
     * `reward - uint64`: The amount of new generated in this block and rewarded to the miner, foundation and service Nodes. Note: 1 LOKI = 1e12 atomic units.
     * `miner_reward - uint64`: The amount of new generated in this block and rewarded to the miner. Note: 1 LOKI = 1e12 atomic units. 
     * `block_size - uint64`: The block size in bytes.
     * `block_weight - uint64`: The block weight in bytes.
     * `num_txes - uint64`: Number of transactions in the block, not counting the coinbase tx.
     * `pow_hash - string`: The hash of the block's proof of work.
     * `long_term_weight - uint64`: Long term weight of the block.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_STOP_DAEMON


Send a command to the daemon to safely disconnect and shut down.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.


--- 

### COMMAND_RPC_GET_LIMIT


Get daemon bandwidth limits.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `limit_up - uint64`: Upload limit in kBytes per second.
 * `limit_down - uint64`: Download limit in kBytes per second.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_SET_LIMIT


Set daemon bandwidth limits.

**Inputs:**

 * `limit_down - int64`: Download limit in kBytes per second (-1 reset to default, 0 don't change the current limit)
 * `limit_up - int64`: Upload limit in kBytes per second (-1 reset to default, 0 don't change the current limit)

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `limit_up - int64`: Upload limit in kBytes per second.
 * `limit_down - int64`: Download limit in kBytes per second.


--- 

### COMMAND_RPC_OUT_PEERS


Limit number of Outgoing peers.

**Inputs:**

 * `out_peers - uint64`: Max number of outgoing peers

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.


--- 

### COMMAND_RPC_IN_PEERS


Limit number of Incoming peers.

**Inputs:**

 * `in_peers - uint64`

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.


--- 

### COMMAND_RPC_START_SAVE_GRAPH


Obsolete. Conserved here for reference.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.


--- 

### COMMAND_RPC_STOP_SAVE_GRAPH


Obsolete. Conserved here for reference.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.


--- 

### COMMAND_RPC_HARD_FORK_INFO


Look up information regarding hard fork voting and readiness.

**Inputs:**

 * `version - uint8`: The major block version for the fork.

**Outputs:**

 * `version - uint8`: The major block version for the fork.
 * `enabled - bool`: Tells if hard fork is enforced.
 * `window - uint32`: Number of blocks over which current votes are cast. Default is 10080 blocks.
 * `votes - uint32`: Number of votes towards hard fork.
 * `threshold - uint32`: Minimum percent of votes to trigger hard fork. Default is 80.
 * `voting - uint8`: Hard fork voting status.
 * `state - uint32`: Current hard fork state: 0 (There is likely a hard fork), 1 (An update is needed to fork properly), or 2 (Everything looks good).
 * `earliest_height - uint64`: Block height at which hard fork would be enabled if voted in.
 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GETBANS


Get list of banned IPs.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `bans - ban[]`: List of banned nodes:
     * `host - string`: Banned host (IP in A.B.C.D form).
     * `ip - uint32`: Banned IP address, in Int format.
     * `seconds - uint32`: Local Unix time that IP is banned until.


--- 

### COMMAND_RPC_SETBANS


Ban another node by IP.

**Inputs:**

 * `bans - ban[]`: List of nodes to ban.
     * `host - string`: Host to ban (IP in A.B.C.D form - will support I2P address in the future).
     * `ip - uint32`: IP address to ban, in Int format.
     * `ban - bool`: Set true to ban.
     * `seconds - uint32`: Number of seconds to ban node.

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.


--- 

### COMMAND_RPC_FLUSH_TRANSACTION_POOL


Flush tx ids from transaction pool..

**Inputs:**

 * `txids - string[]`: Optional, list of transactions IDs to flush from pool (all tx ids flushed if empty).

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.


--- 

### COMMAND_RPC_GET_OUTPUT_HISTOGRAM


Get a histogram of output amounts. For all amounts (possibly filtered by parameters), 
gives the number of outputs on the chain for that amount. RingCT outputs counts as 0 amount.

**Inputs:**

 * `amounts - uint64[]`: list of amounts in Atomic Units.
 * `min_count - uint64`: The minimum amounts you are requesting.
 * `max_count - uint64`: The maximum amounts you are requesting.
 * `unlocked - bool`: Look for locked only.
 * `recent_cutoff - uint64`

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `histogram - entry[]`: List of histogram entries:
     * `amount - uint64`: Output amount in atomic units.
     * `total_instances - uint64`
     * `unlocked_instances - uint64`
     * `recent_instances - uint64`
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_VERSION


Get node current version.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `version - uint32`: Node current version.
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_COINBASE_TX_SUM


Get the coinbase ammount and the fees ammount for n last blocks starting at particular height.

**Inputs:**

 * `height - uint64`: Block height from which getting the amounts.
 * `count - uint64`: Number of blocks to include in the sum.

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `emission_amount - uint64`: Amount of coinbase reward in atomic units.
 * `fee_amount - uint64`: Amount of fees in atomic units.


--- 

### COMMAND_RPC_GET_BASE_FEE_ESTIMATE


Gives an estimation on fees per kB.

**Inputs:**

 * `grace_blocks - uint64`: Optional

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `fee - uint64`: Amount of fees estimated per kB in atomic units
 * `quantization_mask - uint64`
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_GET_ALTERNATE_CHAINS


Display alternative chains seen by the node.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `chains - chain_info[]`: Array of Chains.
     * `block_hash - string`: The block hash of the first diverging block of this alternative chain.
     * `height - uint64`: The block height of the first diverging block of this alternative chain.
     * `length - uint64`: The length in blocks of this alternative chain, after divergence.
     * `difficulty - uint64`: The cumulative difficulty of all blocks in the alternative chain.
     * `block_hashes - string[]`
     * `main_chain_parent_block - string`


--- 

### COMMAND_RPC_UPDATE


Update daemon.

**Inputs:**

 * `command - string`: Command to use, either check or download.
 * `path - string`: Optional, path where to download the update.

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `update - bool`: States if an update is available to download (`true`) or not (`false`).
 * `version - string`: Version available for download.
 * `user_uri - string`
 * `auto_uri - string`
 * `hash - string`
 * `path - string`: Path to download the update.


--- 

### COMMAND_RPC_RELAY_TX


Relay a list of transaction IDs.

**Inputs:**

 * `txids - string[]`: Optional, list of transactions IDs to flush from pool (all tx ids flushed if empty).

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.


--- 

### COMMAND_RPC_SYNC_INFO


Get synchronisation information.

**Inputs:**


**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good. Any other value means that something went wrong.
 * `height - uint64`: Block height.
 * `target_height - uint64`: Target height the node is syncing from (optional, absent if node is fully synced).
 * `next_needed_pruning_seed - uint32`
 * `peers - peer[]`: Array of Peer structure
     * `id - uint64`: Peer id.
     * `host - string`: IP address in string format.
     * `ip - uint32`: IP address in integer format.
     * `port - uint16`: TCP port the peer is using to connect to loki network.
     * `last_seen - uint64`: Unix time at which the peer has been seen for the last time
     * `pruning_seed - uint32`
 * `spans - span[]`: Array of Span Structure.
     * `start_block_height - uint64`: Block height of the first block in that span.
     * `nblocks - uint64`: Number of blocks in that span.
     * `connection_id - string`: Id of connection.
     * `rate - uint32`: Connection rate.
     * `speed - uint32`: Connection speed.
     * `size - uint64`: Total number of bytes in that span's blocks (including txes).
     * `remote_address - string`: Peer address the node is downloading (or has downloaded) than span from.
 * `overview - string`


--- 

### COMMAND_RPC_GET_OUTPUT_DISTRIBUTION

**Inputs:**

 * `amounts - uint64[]`: Amounts to look for in atomic units.
 * `from_height - uint64`: (optional, default is 0) starting height to check from.
 * `to_height - uint64`: (optional, default is 0) ending height to check up to.
 * `cumulative - bool`: (optional, default is false) States if the result should be cumulative (true) or not (false).
 * `binary - bool`
 * `compress - bool`

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `distributions - distribution[]`
     * `data - rpc::output_distribution_data`
     * `amount - uint64`
     * `compressed_data - string`
     * `binary - bool`
     * `compress - bool`
 * `untrusted - bool`: States if the result is obtained using the bootstrap mode, and is therefore not trusted (`true`), or when the daemon is fully synced (`false`).


--- 

### COMMAND_RPC_POP_BLOCKS

**Inputs:**

 * `nblocks - uint64`: Number of blocks in that span.

**Outputs:**

 * `status - string`: General RPC error code. "OK" means everything looks good.
 * `height - uint64`


--- 

### COMMAND_RPC_PRUNE_BLOCKCHAIN

**Inputs:**

 * `check - bool`

**Outputs:**

 * `pruning_seed - uint32`
 * `status - string`


--- 

### COMMAND_RPC_GET_QUORUM_STATE


Get the quorum state which is the list of public keys of the nodes 
who are voting, and the list of public keys of the nodes who are being tested.

**Inputs:**

 * `height - uint64`: The height to query the quorum state for.

**Outputs:**

 * `status - string`: Generic RPC error code. "OK" is the success value.
 * `quorum_nodes - string[]`: Array of public keys identifying service nodes which are being tested for the queried height.
 * `nodes_to_test - string[]`: Array of public keys identifying service nodes which are responsible for voting on the queried height.
 * `untrusted - bool`: If the result is obtained using bootstrap mode, and therefore not trusted `true`, or otherwise `false`.


--- 

### COMMAND_RPC_GET_QUORUM_STATE_BATCHED


Get the quorum state which is the list of public keys of the nodes 
who are voting, and the list of public keys of the nodes who are being tested.

**Inputs:**

 * `height_begin - uint64`: The starting height (inclusive) to query the quorum state for.
 * `height_end - uint64`: The ending height (inclusive) to query the quorum state for.

**Outputs:**

 * `status - string`: Generic RPC error code. "OK" is the success value.
 * `quorum_entries - response_entry[]`: Array of quorums that was requested.
     * `height - uint64`: The height of this quorum state that was queried.
     * `quorum_nodes - string[]`: Array of public keys identifying service nodes which are being tested for the queried height.
     * `nodes_to_test - string[]`: Array of public keys identifying service nodes which are responsible for voting on the queried height.
 * `untrusted - bool`: If the result is obtained using bootstrap mode, and therefore not trusted `true`, or otherwise `false`.


--- 

### COMMAND_RPC_GET_SERVICE_NODE_REGISTRATION_CMD_RAW

**Inputs:**

 * `args - string[]`: (Developer) The arguments used in raw registration, i.e. portions
 * `make_friendly - bool`: Provide information about how to use the command in the result.
 * `staking_requirement - uint64`: The staking requirement to become a Service Node the registration command will be generated upon

**Outputs:**

 * `status - string`: Generic RPC error code. "OK" is the success value.
 * `registration_cmd - string`: The command to execute in the wallet CLI to register the queried daemon as a Service Node.


--- 

### COMMAND_RPC_GET_SERVICE_NODE_REGISTRATION_CMD

**Inputs:**

 * `operator_cut - string`: The percentage of cut per reward the operator receives expressed as a string, i.e. "1.1%"
 * `contributions - contribution_t[]`: Array of contributors for this Service Node
     * `address - string`: The wallet address for the contributor
     * `amount - uint64`: The amount that the contributor will reserve in Loki atomic units towards the staking requirement
 * `staking_requirement - uint64`: The staking requirement to become a Service Node the registration command will be generated upon

**Outputs:**

 * `status - string`: Generic RPC error code. "OK" is the success value.
 * `registration_cmd - string`: The command to execute in the wallet CLI to register the queried daemon as a Service Node.


--- 

### COMMAND_RPC_GET_SERVICE_NODE_KEY


Get the service node public key of the queried daemon. 
The daemon must be started in --service-node mode otherwise this RPC command will fail.

**Inputs:**


**Outputs:**

 * `service_node_pubkey - string`: The queried daemon's service node key.
 * `status - string`: Generic RPC error code. "OK" is the success value.


--- 

### COMMAND_RPC_GET_SERVICE_NODES


Get information on Service Nodes.

**Inputs:**

 * `service_node_pubkeys - string[]`: Array of public keys of active Service Nodes to get information about. Pass the empty array to query all Service Nodes.
 * `include_json - bool`: When set, the response's as_json member is filled out.

**Outputs:**

 * `service_node_states - entry[]`: Array of service node registration information
 * `status - string`: Generic RPC error code. "OK" is the success value.
 * `as_json - string`: If `include_json` is set in the request, this contains the json representation of the `entry` data structure


--- 

### COMMAND_RPC_GET_STAKING_REQUIREMENT


Get the required amount of Loki to become a Service Node at the queried height. 
For stagenet and testnet values, ensure the daemon is started with the 
`--stagenet` or `--testnet` flags respectively.

**Inputs:**

 * `height - uint64`: The height to query the staking requirement for.

**Outputs:**

 * `staking_requirement - uint64`: The staking requirement in Loki, in atomic units.
 * `status - string`: Generic RPC error code. "OK" is the success value.


--- 

### COMMAND_RPC_GET_SERVICE_NODE_BLACKLISTED_KEY_IMAGES


Get information on blacklisted Service Node key images.

**Inputs:**


**Outputs:**

 * `blacklist - entry[]`: Array of blacklisted key images, i.e. unspendable transactions
     * `key_image - string`: The key image of the transaction that is blacklisted on the network.
     * `unlock_height - uint64`: The height at which the key image is removed from the blacklist and becomes spendable.
 * `status - string`: Generic RPC error code. "OK" is the success value.


--- 

### COMMAND_RPC_GET_OUTPUT_BLACKLIST


Get information on output blacklist.

**Inputs:**


**Outputs:**

 * `blacklist - uint64[]`: (Developer): Array of indexes from the global output list, corresponding to blacklisted key images.
 * `status - string`: Generic RPC error code. "OK" is the success value.
 * `untrusted - bool`: If the result is obtained using bootstrap mode, and therefore not trusted `true`, or otherwise `false`.



