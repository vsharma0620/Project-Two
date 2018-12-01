// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// ============================================================
var express = require("express");
var router = express.Router();

var db = require("../models");


// Routes
// ============================================================
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads homepage which routes to sign-up automatically
  router.get("/", function(req, res) {
    res.render("index");
  });

  //gets correct view based on user ID passed from local storage
  router.get("/:id", function(req, res) {
    db.Users.findOne({where: {id: req.params.id}})
    .then(function(result) {
      let status = result.status;
      //audience view/ waiting room
      if (status === 0) {
        res.render("WaitingRoom");
      } else if (status === 1) {
        res.render("OnDeck");
      } else if (status === 2) {
        res.render("Presenter");
      } else {
        res.render("404");
      }
    })
  });


  module.exports = router;
