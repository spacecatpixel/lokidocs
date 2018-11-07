#LokiNET install guide

To Compile Lokinet from the [lastest release](https://github.com/loki-project/loki-network/releases) for your platform.

There are no portable binary releases at this time.

If you encounter a compiler error, report it [here](https://github.com/loki-project/loki-network/issues).

## Dependencies 

You will need to install some build dependancies:

    $ sudo apt install build-essential cmake rapidjson-dev libcap-dev wget

Extract the contents of the release and run `make`, substitute `x.y.z` with the version number.

    $ tar -xzvf lokinet-x.y.z.tar.gz
    $ cd lokinet-x.y.z

## Build for normal operation

Compile as such if you are not a service node:

    $ make -j8 JSONRPC=OFF release-compile
    $ sudo make install

## Build for a service node build

If you are building for a service node compile as such:

    $ make -j8 JSONRPC=ON release-compile
    $ sudo make install

## Building a debian package

If you want a debian package install the debian maintainer packages needed

    $ sudo apt install debuild

...and then build one like so:

    $ debuild -us -b





