// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./app/models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));


//############ HANDLEBARS ###################
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());

// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({defaultLayout: "main"}));
// app.set("view engine", "handlebars");

// Routes
// =============================================================
var api = require("./app/routes/api-routes.js")
var html = require("./app/routes/html-routes");
app.use(api);
app.use(html);


// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
