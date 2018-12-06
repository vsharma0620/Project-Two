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

// Add sequelize code to get all users and return them as JSON
router.get("/api/all", function(req, res) {
  db.Users.findAll({})
  .then(function(results) {
    res.json(results);
  })
});

// Add sequelize code to create a user
router.post("/api/newUser", function(req, res) {
  console.log("Posted");
  db.Users.create({
    username: req.body.username,
    presenting: req.body.presenter,
    category: req.body.category
  })
  
    .then(function(dbPost) {
      console.log("Posted", dbPost);
      res.json(dbPost);
    });
});

router.delete("/api/delete", function(req, res) {
  db.Users.max("id")
  .then(function(maxId){
    db.Users.destroy({
      where: {id: maxId}
    }).then(function(result){
      res.json(result);
    });
  })
});

// Add sequelize code to delete user
router.delete("/api/delete/:id", function(req, res) {
  db.Users.destroy({
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
    {Text: req.body.text},
    {where: {id: 0}})
})
router.delete("/api/presenter/:id", function(req, res) {
  console.log("id is ", req.param.id)
  db.Presenter.destroy({
    where: {id: req.params.id}
  }).then(function(result){
    res.json(result);
  });
});

router.put("/live/audio", function(req, res) {
  console.log("chunk", req.body);
});

module.exports = router;



