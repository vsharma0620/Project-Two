/* Controller sets the timer and modifies user status to
determine the current presenter, onDeck and audience */

var users = require("../public/js/user-sequelize");
var db = require("../models");
var moment = require("moment");


  //get all users that wish to present
  function getNotPresented(cb){
    db.Users.findAll({
      where: {
        presenting: true,
        status: 0,
        hasPresented: false
      }
    }).then(function(result) {
        var ids = [];
        for (var i = 0; i < result.length; i ++) {
            ids.push(result[i].id);
        }
        cb(ids);
    });
  };
//selects random user that wants to present and makes them on deck
 var readyOnDeck = new Promise(function(resolve, reject) {
    getNotPresented(function(users) {
      let rand = Math.floor(Math.random()*users.length);
      db.Users.update(
        {status: 1},
        {where: {id: users[rand]}}
      ).then(function(result) {
          console.log(rand);
          console.log(result);
        resolve(result);
      }).catch(function(error){
        reject(Error("It broke"));
      });
    });

  });


var controller = {
    run: function () {
        console.log('running....');
        //hook = listener on(user created)
        db.Users.hook('afterCreate', function (user, options) {
            console.log('User Created');
            users.numUsers(function (numUsers) {
                if (numUsers < 2) {

                    //if the numUsers are less than 2 then we want it to keep checking for more presenters on deck. Since we first need 2 or more numUsers we will  have to create a cb function. 

                    console.log("Thank You for your patience. We are waiting for more users");

                    //if the numUsers are equal to 2 then we want to call the readyOnDeck to get a presenter and then return the presenter
                } else if (numUsers === 2) {
                    //select first presenter give them 2min on deck
                    readyOnDeck.then(function(){
                        setTimeout(function () {
                            //First time make onDeck presenter get new on Deck
                            db.Users.update({status: 2},
                            {where: {status: 1}}
                            ).then(function (result) {
                                readyOnDeck.then(function () {
                                    users.getPresenter(function (presenter) {
                                        var end = moment(moment()).add(5, "minutes");
                                        console.log(end);
                                        users.updatePresenter(presenter, end);
                                    });
                                    setTimeout(function () {
                                        var interval = setInterval(function () {
                                            // set Presenter.
                                            //Swap changes everyones status in the user table.
                                            users.swap(function (result) {
                                                readyOnDeck.then(function() {
                                                   users.getPresenter(function (presenter) {
                                                       var end = moment(moment()).add(5, "minutes");
                                                       console.log(end);
                                                       users.updatePresenter(presenter, end);
                                                   });
                                                });        
                                            });
                                            //I need to set the presenter after everyone swaps and then set that //username to the current presenster
            
                                            // performs every five minutes
                                        }, 60000);
                                    }, 30000);
                                })
                            })
                            
                         }, 120000);
                    });
                }
            });
        });
    }
};
// //use moment to find current time and add five minutes to it. This will be set as the end time.
// getNotPresented(function(){
//     console.log("test");
// });
// readyOnDeck.then(function(result){
// console.log("anything");
// });
module.exports = controller;