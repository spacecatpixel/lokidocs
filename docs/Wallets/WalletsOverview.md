# Wallets
The Loki wallets are a gateway into private decentralised transactions and communications. They allow you to hold private keys, secure or mine Loki, and trade peer-to-peer. 

Loki wallets store a collection of public and private keys which can be used to receive, view, or spend Loki. 

The wallet uses the private keys through a daemon which synchronises with the Loki Network to scan for incoming transactions and to send outgoing transactions.

## Graphical User Interface Wallet (GUI)
The Gui Wallets are the easiest wallets to use. It has a graphical user friendly interface which is perfect for beginners. 

Loki has two GUI wallets:

- The Loki Electron wallet: [Download here](https://github.com/loki-project/loki-electron-gui-wallet/releases).

- The Loki GUI wallet: [Download here](https://github.com/loki-project/loki-gui/releases)


### GUI Guides
| Guide                                                	| Description                                          	|
|------------------------------------------------------	|------------------------------------------------------	|
| [GUI Setup](../Wallets/GuiWallet/loki-gui-guide.md)  	| How to set up the GUI wallet for the first time.     	|
| [GUI Staking](../ServiceNodes/GUIStakingGuide.md) 	| How to stake to a Service Node from your GUI Wallet. 	|

## Command Line Interface Wallet (CLI)
The Cli Wallet is for more advanced users and offers the most tools when interacting with the Loki Blockchain.

- [Download Loki CLI Wallet](https://github.com/loki-project/loki/releases)

- [Github Link](https://github.com/loki-project/loki/)

### CLI Guides

| Guide                                                                     	| Description                                                                                                                                                                                    	|
|---------------------------------------------------------------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| [Restore CLI Wallet from Keys](../Wallets/CliWallet/WalletRestoreKeys.md) 	| How to restore your wallet with spend and view keys.                                                                                                                                           	|
| [Restore CLI Wallet from Seed](../Wallets/CliWallet/WalletRestoreSeed.md) 	| How to restore your wallet with a seed phrase (25 word mnemonic seed).                                                                                                                         	|
| [CLI Commands](../Wallets/CliWallet/WalletCommands.md)                    	| Details on different commands within the `loki-wallet-cli`.                                                                                                                                    	|
| [2 of 2 - Multisignature Setup](../Wallets/CliWallet/2of2Multisig.md)     	| [Multisig](../Wallets/Multisignature.md) feature allows you to sign a transaction with more than one private key. Funds protected with multisig can only be spent by signing with 2-of-2 keys. 	|
| [2 of 3 - Multisignature Setup](../Wallets/CliWallet/2of3Multisig.md)     	| [Multisig](../Wallets/Multisignature.md) feature allows you to sign a transaction with more than one private key. Funds protected with multisig can only be spent by signing with 2-of-3 keys. 	|
| [M of N - Multisignature Setup](../Wallets/CliWallet/MofNMultisig.md)     	| [Multisig](../Wallets/Multisignature.md) feature allows you to sign a transaction with more than one private key. Funds protected with multisig can only be spent by signing with M-of-N keys. 	|
| [CLI Setup - Mac](../Wallets/CliWallet/loki-wallet-cliMacSetup.md)        	| How to setup the `loki-wallet-cli` for the first time on Mac OS.                                                                                                                               	|