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
    where: {status: 2}
  }).then(function(result) {
    return result;
  });
};

//gets current on-deck user
function getOnDeck() {
  db.Users.findOne({
    where: {status: 1}
  }).then(function(result) {
    return result;
  });
}

//get all users that wish to present
function getAllPresenters(){
  db.Users.findAll({
    where: {presenting: true}
  }).then(function(result) {
    return result;
  });
}

//get all users that wish to present
function getNotPresented(cb){
  db.Users.findAll({
    where: {
      presenting: true,
      status: 0,
      hasPresented: false
    }
  }).then(function(result) {
    cb(result);
  });
}

//Swaps presenter to Audience and on deck to presenter
function swap(){
  //makes presenter audience
  db.Users.update(
    {
      status: 0,
      hasPresented: true
    },
    {where: {status: 2}}
  ).then(function(result) {
    // makes on-Deck presenter
    db.Users.update(
      {status: 2},
      {where: {status: 1}}
    ).then(function(result) {
      //selects random user that wants to present and makes them on deck
      readyOnDeck();
    })
  });
}


//selects random user that wants to present and makes them on deck
function readyOnDeck() {
  getNotPresented(function(users) {
    let rand = Math.floor(Math.random()*users.length);
    db.Users.update(
      {status: 1},
      {where: {id: rand}}
    ).then(function(result) {
      return result;
    });
  });
}