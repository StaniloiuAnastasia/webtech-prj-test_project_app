var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");


// init express application
var app = express();
app.use(bodyParser.json());
app.use(cors());

var nodeadmin = require("nodeadmin");
app.use(nodeadmin(app));

app.get('/Books.html', function(request, response) 
{ response.status(200).send(Books.html); });

app.listen(process.env.PORT);
