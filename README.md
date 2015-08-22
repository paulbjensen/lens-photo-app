# lens-photo-app
<img src="https://raw.githubusercontent.com/paulbjensen/lens-photo-app/master/lens.png" width="128px" height="128px" />

A desktop photo app, created for a tutorial on Scotch.io

<img src="https://raw.githubusercontent.com/paulbjensen/lens-photo-app/gh-pages/images/1st-screen.png" width="256px"/>
<img src="https://raw.githubusercontent.com/paulbjensen/lens-photo-app/gh-pages/images/mac.png" width="256px"/>
<img src="https://raw.githubusercontent.com/paulbjensen/lens-photo-app/gh-pages/images/photo-edit.png" width="256px"/>


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

About
---

My name is Paul Jensen. I'm the founder of [Anephenix](https://anephenix.com), the lead developer of the [SocketStream](https://socketstream.com) web framework, and the creator of [Dashku](https://dashku.com), an [open source realtime dashboard](https://github.com/dashku/dashku). I'm based in Amsterdam, and I'm currently writing a book on NW.js for Manning Publications - ["NW.js in Action"](http://manning.com/jensen):

<a href="http://manning.com/jensen"><img src="https://raw.githubusercontent.com/paulbjensen/lens-photo-app/gh-pages/images/nwjs-in-action.png" width="256px"/></a>
