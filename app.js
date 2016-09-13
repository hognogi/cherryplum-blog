console.log('Starting app.js... ');


require('dotenv').config();

var config = require('./config.js');


var myapp = require('./server/server.js')(config);
myapp.init();
