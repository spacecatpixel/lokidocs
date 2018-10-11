# Loki Docs

Repo for documentation


## Building from source

set up mkdocs if not already installed:

    $ mkdir -p $HOME/local/
    $ python3 -m venv $HOME/local/mkdocs/
    $ $HOME/local/mkdocs/bin/pip install mkdocs
    $ ln -s $HOME/local/mkdocs/bin/mkdocs $HOME/bin
    
clone repo and build the docs:
    
    $ git clone https://github.com/loki-project/loki-docs
    $ cd loki-docs
    $ mkdocs build
