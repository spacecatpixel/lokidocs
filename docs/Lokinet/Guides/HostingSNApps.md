# Hosting a SNApp
## 1. Preparing your lokinet address
When you run `./lokinet` your terminal will show a bunch of outputs. 

You are looking for the line with `lokitun0` in it. The line should look like the following:

`
[NFO] unnamed (868) Mon Dec 17 15:30:09 2018 AEDT llarp/handlers/tun.cpp:419    default:gtwemaxbfogy5absnjizmoafdngadknpagnoteoir7743ys4xbyo.loki set lokitun0 to have address 172.16.10.1:0
`

This loki address shown within this output will be the url to your SNApp and the local address to bind SNApps on. You can share the `.loki` address to individuals who you want to access your SNApp.

## 2. Creating your SNApp
Create a new directory within your home folder by running the following command in a terminal:

`mkdir ~/snapp/`

Create an index file within your new folder.


`touch ~/snapp/index.html`


This file will hold the content of what will be served on your SNApp. Run the following command to access your new index.html file.

`vi ~/snapp/index.html`

Click `a` to start adding text to your index.html file.

Type out `Hello Lokinet` and click the escape button.

Once the escape button is clicked it will allow for commands to be inputed again.

Now type `:w` and click enter to write to the file.

Then type `:q` and click enter to quit editing the file, this will take you back to the directory you were in before `~/snapp/`.

## 3. Serving your SNApp
Now we will serve our index.html file to the lokinet by running the following command within our snapp folder.

`sudo python3 -m http.server --bind 172.16.10.1 80`

Now if you go to the .loki address you saved before your message “hello lokinet” will be displayed. 

Jump onto the lokinet irc and see if others can access your SNApp.

### Finish

Well done, you have finished the guide. Jump back into the [Lokinet Public Testing Guide here](../PublicTestingGuide/#5-route-through-an-exit-node).