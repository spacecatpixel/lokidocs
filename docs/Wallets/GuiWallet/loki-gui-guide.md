# Setup Guide on the Loki GUI Wallet

This document will tell you exactly how to set up and operate the Loki GUI wallet.
The latest version of the wallet can be downloaded [here](https://github.com/loki-project/loki-electron-gui-wallet/releases).

##**Windows** 
> **Mac and Linux users skip to [step 1](#1-running-the-wallet-for-the-first-time).**

### Install Electron wallet and allow Defender permissions.

Open the executable file we downloaded from the Loki Github `Loki.Electron.Wallet.Setup.X.X.X-windows.exe` to start installion.

When installing the wallet the Windows Defender SmartScreen will prevent you from opening it unless you give the file permission. 

Click `Run anyway` to give the executable permission.

<center>![Defender](../../assets/images/Defender.JPG)</center>

Now run through the installion prompts and then click install.

Once the installation has finalised open the Loki Wallet by clicking your "Windows" key or the start menu and searching for `loki electron wallet`.

## 1: Running the Wallet for the first time.

Once the installation has finalised open the Loki Wallet by clicking your "Windows" key or the start menu and searching for `loki electron wallet`.

Once opened the wallet will need to be configured. 

### 1.1: Choose your language.

<center>![Language selection](../../assets/images/electron2.JPG)</center>

### 1.2: Configure your settings.

Default settings are fine to use. 

> This is not required but if you would like to run your own node and broadcast your own transactions check the `Local + Remote Daemon` or the `Local Daemon Only` option.

Click `Next` when ready.

<center>![Configure Settings](../../assets/images/electron3.JPG)</center>

## 2: Creating/importing Wallet.

Once your settings have been configured if you do not already have a wallet generated yet your screen will look like the following:

<center>![Create New Wallet](../../assets/images/electron4.JPG)</center>

### 2.1: Creating new Wallet.

To create a new wallet click the `Create new wallet` button.

Next fill in the input fields that are required. It is recommended but not required, however you should consider encrypting your key with an optional password. 

Once input boxes are filled in click `CREATE WALLET` button.

<center>![Create Wallet](../../assets/images/electron5.JPG)</center>

### 2.2: Importing Wallet from seed.

To import a wallet from seed click the `Restore wallet from seed` button.

Next fill in the following input fields:

- Wallet Name: Enter a name for your wallet.

- Mnemonic Seed: Enter the seed phrase that was generated when intially creating your wallet.

- Restore from Date: Enter the date or blockheight in which you want to restore your wallet from.

> It is quicker to restore from the date in which you generated the wallet.

- Password: Enter an optional password.

- Confirm Password: Enter the same password to confirm spelling.

Once input boxes are filled in click `RESTORE WALLET` button.

<center>![Restore from seed](../../assets/images/electron6.JPG)</center>