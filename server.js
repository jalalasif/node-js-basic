// Declarations
const express = require("express");
const app = express();
const port = 3000;

app.get('/', function(req, res){
    res.send("<h1><center>Not an actual project, only a test server for NodeJS</center></h1>")
});

app.listen(port, function() {
    console.log('Server has started')
});