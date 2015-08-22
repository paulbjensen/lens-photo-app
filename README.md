# lens-photo-app
<img src="https://raw.githubusercontent.com/paulbjensen/lens-photo-app/master/lens.png" width="128px" height="128px" />

A desktop photo app, created for a tutorial on Scotch.io

Installation
---

Make sure that you have Node.js installed, and the following global npm dependencies:

- nw
- nw-builder

You can install these globally with the following command:

    npm install -g nw nw-builder

Next, after checking out the repo, change directory into it, and run the following command:

    npm install
    
Next, run NW.js on it:

    nw
    
If you want to then build a binary version for your computer, run the following command:

    nwbuild -p win32,win64,osx32,osx64,linux32,linux64 PATH_TO_LENS_FOLDER
