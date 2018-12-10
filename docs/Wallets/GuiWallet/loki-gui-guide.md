#Setup Guide on the Loki GUI Wallet

This document will tell you exactly how to set up and operate the Loki GUI wallet.
The latest version of the wallet can be downloaded (here)[https://github.com/loki-project/loki-gui/releases].

**Windows users:** (**Mac and Linux users skip to step 6**)

1) Make sure Windows Defender (or other anti-virus software) is not flagging it. Add 'loki-gui-win...'  folder (or saved name of download) to exclusions in Windows Defender

![windows-defender-guide1](http://u.cubeupload.com/dabeatisgood/AV1.png)

![windows-defender-guide2](http://u.cubeupload.com/dabeatisgood/AV2.png)

![windows-defender-guide3](http://u.cubeupload.com/dabeatisgood/AV3.png)

2) After exclusion is added, check if `lokid.exe` is still in the folder. If it's not, unzip archive file once again and put files in the previously created folder

![lokid-exe](http://u.cubeupload.com/meditations1/lokid.png)


3) Make sure that the path to your Loki folder doesn't contain non-latin characters.  

4) Right click `loki-wallet-gui.exe` and select 'run as administrator'

![loki-wallet-gui](http://u.cubeupload.com/meditations1/lokiwalletgui.png)
  
5) If it crashes after steps above are performed, run file named `start-low-graphics-mode.bat` in the loki folder

![low-graphics-mode](http://u.cubeupload.com/meditations1/lowgraphicsmode.png)

6) Select your language.

![language-select](http://u.cubeupload.com/meditations1/languageselect.png)

7) Select 'create a new wallet'

![create-new-wallet](http://u.cubeupload.com/meditations1/createnewwallet.png)

8) **This step is important! Please be careful to write down and save your seed exactly as you see on the screen and store it in a safe location.**

![wallet-seed](http://u.cubeupload.com/meditations1/walletsetupseed.png)

9) Enter a strong password.

![enter-pass](http://u.cubeupload.com/meditations1/enterpass.png)


10) If you have problems with syncing or connecting to the daemon, try to connect to a remote node (recommended):

Go to settings > go to node > select a remote node and click 'load preset' > scroll down and click 'connect'

![remote-node-pic](http://u.cubeupload.com/dabeatisgood/remotenode.png)