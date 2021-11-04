'use strict';

var developerNameDefault = "Arthur";
var developerCountryDefault = "USA";

var express = require('express');

var app = express();

//setting the port
app.set('port', process.env.PORT || 3000);



//getting the port on local host
app.listen(app.get('port'), function ()  {
    console.log('Express started on http://locahost:' + app.get('port'));
})
//route the port to display the game,

