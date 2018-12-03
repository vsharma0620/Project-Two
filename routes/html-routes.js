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

  router.get("/signup", function(req, res) {
    res.render("signup");
  });

  router.get("/WaitingRoom", function(req, res) {
    res.render("WaitingRoom");
  });

  router.get("/Presenter", function(req, res) {
    res.render("Presenter");
  });

  router.get("/OnDeck", function(req, res) {
    res.render("OnDeck");
  });

  //gets correct view based on user ID passed from local storage
  router.get("/user/:id", function(req, res) {
    db.Users.findOne({where: {id: req.params.id}})
    .then(function(result) {
      console.log(result);
      let status = result.status;
      //audience view/ waiting room
      if (status === 0) {
        res.render("OnDeck");
      } else if (status === 2) {
        res.render("Presenter");
      } else {
        res.render("404");
      }
    })
  });


  module.exports = router;
