//these are the installations 
const express = require('express'); //for routing
const bodyParser = require("body-parser"); //Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
const app = express(); //top level function exported by the express module
app.use(bodyParser.json());
const path = require('path'); //created the path module
const port = 8080;
//const db = require("./db"); //These 2 files are for the database portion. */
//const collection = "Antics"; 
app.get('/', (req, res) => res.sendFile(__dirname + '/Arthurs_Antics.html'));
app.listen(port, () => console.log('Example app listening at http://localhost:8080'));

app.get('/', function(req, res)    {
    res.sendFile(__dirname+ '/Antics.css');
});