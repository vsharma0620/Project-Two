/*User-Sequelize provides database functions for the user-table
to be used in the controller file (not all functions used) */
var db = require("../../models");

var seqs = {
  //adds a given user object to the 
  addUser: function(user) {
    db.Users.create({
      username: user.username,
      presenting: user.presenter,
      category: user.category
    })
      .then(function(dbPost) {
        return dbPost;
      });
  },
  

  //gets current on-deck user
  getOnDeck: function() {
    db.Users.findOne({
      where: {status: 1}
    }).then(function(result) {
      return result;
    });
  },

  //get all users that wish to present
  getAllPresenters: function(){
    db.Users.findAll({
      where: {presenting: true}
    }).then(function(result) {
      return result;
    });
  },
  
  //Swaps presenter to Audience and on deck to presenter
  swap: function(cb){
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
          cb(result);
      });
    });
  },

  numUsers: function(cb) {
    db.Users.findAll({where: {presenting: true}})
    .then(function(results){
      cb(results.length);
    });
  },

};


module.exports = seqs;