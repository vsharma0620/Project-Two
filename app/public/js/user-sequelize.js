var path = require("path");
var db = require("../models");

//adds a given user object to the 
function addUser(user) {
  db.Users.create({
    username: user.username,
    presenting: user.presenter,
    category: user.category
  })
    .then(function(dbPost) {
      return dbPost;
    });
};


//gets current active presenter
function getPresenter() {
  db.Users.findOne({
    where: {isPresenter: 2}
  }).then(function(result) {
    return result;
  });
};

//gets current on-deck user
function getOnDeck() {
  db.Users.findOne({
    where: {isPresenter: 1}
  }).then(function(result) {
    return result;
  });
}

//get all users that wish to present
function getAllPresenters(){
  db.Users.findAll({
    where: {presenting: 1}
  }).then(function(result) {
    return result;
  });
}

//Swaps presenter to Audience and on deck to presenter
function swap(){
  db.Users.update({

  }).then(function(result) {

  });
}