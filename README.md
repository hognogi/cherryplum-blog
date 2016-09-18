## Cherryplum Blog##

This is a blog developed with the [cherryplum framework.](https://github.com/hognogi/cherryplum)

It uses MongoDB to store data, React to render the public web, and DoT.js to render the simple backend and the private admin pages. 



To install:

Make sure you have a running mongodb somewhere. When you will run the setup for the blog you will be prompted for the mongo connection url, and it's expected to be up and running.

Follow the commands: 

    git clone https://github.com/hognogi/cherryplum-blog.git
    npm install 
    node setup.js #follow the prompt
    node app.js #alias: npm start.

note! The app should work fine on node.js v0.10 and above, but the gulp task which compiles the react front-end needs node.js v4.0 or above

You can see the blog in action at [http://www.hognogi.com/](http://www.hognogi.com/), which is hosted by Google cloud. 
	