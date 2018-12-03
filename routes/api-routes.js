// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
var express = require('express');
var router = express.Router();


// Routes
// =============================================================

// Add sequelize code to get all books and return them as JSON
router.get("/api/all", function(req, res) {
  db.Users.findAll({})
  .then(function(results) {
    res.json(results);
  })
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
      console.log("Posted", dbPost);
      res.render("WaitingRoom");
    });
});


// Add sequelize code to delete user
router.delete("/api/delete/:id", function(req, res) {
  db.User.destroy({
    where: {id: req.params.id}
  }).then(function(result){
    res.json(result);
  });
});

//finds active presenter user information
router.get("api/presenter", function(req, res) {
  db.User.findOne({
    where: {status: 2}
  }).then(function(result) {
    res.json(result);
  });
});

//Gets current text of presenter table
router.get("api/presenter/text", function(req, res) {
  db.Presenter.findOne({}).then(function(result) {
    res.json(result.Text);
  })
});

//Gets current audio of presenter table
router.get("api/presenter/audio", function(req, res) {
  db.Presenter.findOne({}).then(function(result) {
    res.json(result.Audio);
  })
});

router.get("api/status/:id", function(req,res) {
  db.User.findOne({where: {id: req.params.id}})
  .then(function(result){
    res.json(result);
  });
});

router.post("api/presenter/text", function(req, res) {
  db.Presenter.update(
    {},
    {where: {id: 0}})
})

module.exports = router;
