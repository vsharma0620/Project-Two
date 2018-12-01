// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies

var path = require("path");
var db = require("../models");
var express = require('express');
var router = express.Router();


// Routes

// Add sequelize code to get all books and return them as JSON
router.get("/api/all", function(req, res) {

});

// Add sequelize code to create a book
router.post("/api/newUser", function(req, res) {
  console.log("Posted");
  db.Users.create({
    username: req.body.username,
    presenting: req.body.presenter,
    category: req.body.category
  })
    .then(function(dbPost) {
      console.log("Posted");
      res.sendFile(path.join(__dirname, "../public/view.html"));
    });
});

  // Add sequelize code to create a book
  app.post("/api/newUser", function(req, res) {
    console.log("route is hit")
    db.Users.create({
      username: req.body.username,
      presenting: req.body.presenter,
      category: req.body.category
    })
      .then(function(dbPost) {
        res.sendFile(path.join(__dirname, "/app/public/about.html"));
      });
  });
  
// Add sequelize code to delete a book
router.delete("/api/", function(req, res) {

});

module.exports = router;
