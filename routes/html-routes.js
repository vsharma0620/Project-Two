// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var express = require("express");
var router = express.Router();


// Routes
// ============================================================
  // Each of the below routes just handles the HTML page that the user gets sent to.

  //home & signup handelbars
  router.get("/", function(req, res) {
    res.render("index")
  });

  router.get("/signup", function(req, res) {
    res.render("signup")
  });



  // add route loads the add.html page, where users can enter new books to the db

  router.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  // all route loads the all.html page, where all books in the db are displayed
  router.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/all.html"));
  });

  // short route loads the short.html page, where short books in the db are displayed
  router.get("/short", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/short.html"));
  });

  // long route loads the long.html page, where long books in the db are displayed
  router.get("/long", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/long.html"));
  });



  module.exports = router;
