// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models/user.js");
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function(req, res) {

  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get("/api/genre/:genre", function(req, res) {

  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get("/api/author/:author", function(req, res) {

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
  app.delete("/api/book/:id", function(req, res) {

  });

};
