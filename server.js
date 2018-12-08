// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Static directory
app.use(express.static("public"));


//############ HANDLEBARS ###################
app.use(express.urlencoded({extended:true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Routes
// =============================================================
var api = require("./routes/api-routes.js");
var html =require("./routes/html-routes"); 
app.use(api);
app.use(html);

//Controller
// =============================================================
var controller = require("./controlls/controller.js");
controller.run();

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
