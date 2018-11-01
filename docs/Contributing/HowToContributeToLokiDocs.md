# How to Contribute to Loki-Docs
There is two ways to contribute to the Loki-Docs repository. 
* Editing the files on Github.
* Building the website and editing the content locally.

This guide will teach you how to build the website locally.
## Requirements: 
You will need the following software packages:
-   Python
-   Pip
-   Mkdocs
-   github

# Step 1: Installing Python and Pip
If you have and use a package manager (such as [apt-get](https://help.ubuntu.com/community/AptGet/Howto), [dnf](http://dnf.readthedocs.io/en/latest/index.html), [homebrew](https://brew.sh/), [yum](http://yum.baseurl.org/), [chocolatey](https://chocolatey.org/), etc.) to install packages on your system, then you may want to search for a "MkDocs" package and, if a recent version is available, install it with your package manager (check your system's documentation for details). That's it, you're done!

If your package manager does not have a recent "MkDocs" package, you can still use your package manager to install "Python" and "pip". Then you can use pip to [install MkDocs](https://www.mkdocs.org/#installing-mkdocs).

### Manual Installation

In order to manually install MkDocs you'll need [Python](https://www.python.org/) installed on your system, as well as the Python package manager, [pip](http://pip.readthedocs.io/en/stable/installing/). You can check if you have these already installed from the command line:

  
```
$ python --version  
Python 2.7.2  
$ pip --version  
pip 1.5.2
```
  
MkDocs supports Python versions 2.7, 3.4, 3.5, 3.6, 3.7 and pypy.

#### Installing Python

Install [Python](https://www.python.org/) by downloading an installer appropriate for your system from [python.org](https://www.python.org/downloads/) and running it.

  

***Note***: If you are installing Python on Windows, be sure to check the box to have Python added to your PATH if the installer offers such an option (it's normally off by default).

  
  

#### Installing pip

If you're using a recent version of Python, the Python package manager, [pip](http://pip.readthedocs.io/en/stable/installing/), is most likely installed by default. However, you may need to upgrade pip to the lasted version:

  

`pip install --upgrade pip`

  

If you need to install [pip](http://pip.readthedocs.io/en/stable/installing/) for the first time, download [get-pip.py](https://bootstrap.pypa.io/get-pip.py). Then run the following command to install it:

  

`python get-pip.py`

## Step 2: Installing MkDocs

Install the mkdocs package using pip:

  

`pip install mkdocs`

  
  

You should now have the mkdocs command installed on your system. Run mkdocs --version to check that everything worked okay.

  
```
$ mkdocs --version  
mkdocs, version 0.15.3
```
  

For a more permanent solution, you may need to edit your PATH environment variable to include the Scripts directory of your Python installation. Recent versions of Python include a script to do this for you. Navigate to your Python installation directory (for example C:\Python34\), open the Tools, then Scripts folder, and run the win_add2path.py file by double clicking on it. Alternatively, you can [download](https://svn.python.org/projects/python/trunk/Tools/scripts/win_add2path.py) the script and run it (python win_add2path.py).

## Step 3: Github and mkdocs

Now that we have mkdocs, python and pip we can download the repository to our local machine and start working on making changes.

  

We can download the files by typing in the terminal:

```git clone [https://github.com/loki-project/loki-docs](https://github.com/loki-project/loki-docs)```

You can now edit the text files locally and create pull requests when you make changes

## Step 4: Making changes to loki-docs

I would suggest downloading a txt editor called sublime. In sublime click open folder and open the loki-docs directory within the software.

  

You’re screen should look similar to the below.

![](https://lh3.googleusercontent.com/gqkkRml81JxMhAt-HzPrUXOuI_kCFavgyKDPFuUnIUVUYDcVsEpxV-4gSuS8X5AsIEii_zNDtFKxgtUmAjqOWGF3ABPJ30JMFfcYX2DKOyCalo1ZYq3oA7GA_zdXOpDym0ZoWGBf)

  

Go into the docs folder and open the desired .md file you want to edit. For the below example we are going to go into LokiNetwork.md which is in the introduction folder.

  

![](https://lh4.googleusercontent.com/Zol2dB0h9EhFugc9vjymoxkcOtbDS8hb-RJxM5ovrYalCH9D6R_pWPZHKCjDKPqP1Hx1Ic070gjb1DYPy9V-Htit1RWOaMwdstCE_HeiuRX1VIgOopHGoZygu3TclINfhdc_EKe_)

  

From here you can edit the file using markdown syntax. Any changes you make will automatically show up as a potential pull request.

  

If you have the Github gui for windows you will first need to identify the the local repo.

  

![](https://lh4.googleusercontent.com/UNs4hnkrLABy30PRiNc4p-mjonMR5rpWTB_zYramhe0R95WHT1tAImA2sK1bTHt3Ei00yoMi-zGLDl07LHjjXFKcLS5r8O_Atz9qsoCpKpBRXamo3asawhNZzgh-ZtNg5Bh9oURV)

  

And now if we make any changes the changes will show up within our gui to create a commit and pull request.

  

![](https://lh4.googleusercontent.com/CGWYQw3MDxtzro9ZLYfdykGYbuwabRvnEC9WKfcaVaB082f4gxqs8JOfCU0ZdTjICzgi_Z0-OpTeXPsXFGCZlOMkIo1_gdCPtvcXgIpcEd2BNn_5jR0j8TG9zsK3GUPIPBme4vTE)

  

Once you’ve made all your changes click commit to master.

## Step 5: Local testing

Once the files are downloaded change your directory to loki-docs.

  

`cd loki-docs`

  

From here we can type in the terminal:

  

`mkdocs serve`

  

Mkdocs will serve our files locally.

  

![](https://lh4.googleusercontent.com/gmyELGXW5juOP3JKRVIQde-EOySVxrQE4K5NPDrYUPhaTA3nsJROS4jFASzwwRcSYgc8oLsBFXOIwuq6Npqnt6_i4imz6jlWN2zOyh2D5cfzC4u-D6iZKACHRIkvVCJLIDHtV68V)

  

During your edit’s this mkdocs serve command will work in the background. So any saves you make will show up live at the IP and port it outputs.

Any issues such as links to websites or documentation that is not there or not working will show up when serving.

  

Go to [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in a chrome or firefox browser to view the changes you’ve made prior to committing them to the lokidocs github.

## Additional: Changing the filepaths on lokidocs.

The file in our loki-docs folder called mkdocs.yml is where we edit the left sidebar on the lokidocs website.

![](https://lh3.googleusercontent.com/-r1EexqvKe9TgiUnAy-xGx0ltRmDR9qDGMKOgdTKlPsvW-uYbofbSz4x-nypUHhK6edq7b8Ru2_1CbFj6p9HrFE2Jej1wRTNAp81Ev4H7v9Q98NyXyu9HasTSK2xzeJ43L6hIwKh)

If you create any new guides you will need to save the file as a .md file within a folder that is relevant. You must also then add it to the `mkdocs.yml` file similar to the below.

  

***Note***: moving files within your local folders should always be reflected within the `mkdocs.yml` file. If you move the file within your local files but do not reflect the changes the website will not be able to find the file.
