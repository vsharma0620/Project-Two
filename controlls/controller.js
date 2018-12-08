/* Controller sets the timer and modifies user status to
determine the current presenter, onDeck and audience */

var users = require("../public/js/user-sequelize");
var db = require("../models");
var moment = require("moment");


  //get all users that wish to present
  var getNotPresented = new Promise(function(resolve, reject){
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
        return resolve(ids);
    }).catch(function(err) {
        return console.log(reject(Error ("ouchy")));
    });
  });
//selects random user that wants to present and makes them on deck
 var readyOnDeck = new Promise(function(resolve, reject) {
    getNotPresented.then(function(users) {
      let rand = Math.floor(Math.random()*users.length);
      db.Users.update(
        {status: 1},
        {where: {id: users[rand]}}
      ).then(function(result) {
        //   console.log(rand);
        //   console.log(result);
        return resolve(result);
      }).catch(function(error){
        return console.log(reject(Error("It broke")));
      });
    });

  });

  //gets current active presenter
  var getPresenter = new Promise(function(resolve, reject) {
    db.Users.findOne({
        where: {status: 2}
      }).then(function(result) {
        return resolve(result);
      }).catch(function(err) {
        return console.log(reject(Error ("Can't find Presenter")));
      });
  });

  var updatePresenter = new Promise(function(resolve, reject) {
    getPresenter.then(function(user) {
        console.log("current presenter",user)
        var end = moment(moment()).add(5, "minutes");
        db.Presenter.update(
            {presenter: user.username,
             category: user.category,
             type: user.type,
             endtime: end},
            {where: {id: 1}}
        ).then(function(result){
            return resolve(result);
        }).catch(function(err) {
            return console.log(reject(Error ("WTF! no update presenter table")));
        });
    })
  });

  var swap = new Promise(function(resolve, reject) {
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
            return resolve(result);
        }).catch(function(err) {
            return console.log(reject(Error ("No Swappy")));
        });
      });
  })

  //should set first presenter
  var setPresenter = new Promise(function(resolve, reject) {
    db.Users.update(
        {status: 2},
        {where: {status: 1}}
    ).then(function(result){
        console.log("not stuck here");
       return resolve(result);
    }).catch(function(err) {
       return console.log(reject(Error ("Can't set Presenter")));
    });
  })

  var PresenterDummy = new Promise(function(resolve, reject) {
    db.Presenter.create({}).then(function(result){
       return resolve(result);
    }).catch(function(err) {
        return console.log(reject(Error ("FFFFFf")));
    });

  })


var controller = {
    run: function () {
        // console.log('running....');
        //hook = listener on(user created)
        db.Users.hook('afterCreate', function (user, options) {
            console.log('User Created');
            users.numUsers(function (numUsers) {
                if (numUsers < 2) {
                    //if the numUsers are less than 2 then we want it to keep checking for more presenters on deck.
                    console.log("Thank You for your patience. We are waiting for more users");

                    //if the numUsers are equal to 2 then we want to call the readyOnDeck to get a presenter and then return the presenter
                } else if (numUsers === 2) {
                    //select first presenter give them 2min on deck
                    readyOnDeck.then(function(result){
                        console.log("set first on deck", result);
                        setTimeout(function () {
                            //First time make onDeck presenter get new on Deck
                            setPresenter.then(function (result) {
                                console.log("set first presenter");
                                updatePresenter.then(function(result) {
                                    readyOnDeck.then(function (result) {
                                        console.log("set Second onDeck", result);
                                    
                                        //Timeout for First Presentation
                                        setTimeout(function () {
                                            // Main Interval swaps presenter and On Deck Persons
                                            setInterval(function () {
                                                // set Presenter.
                                                console.log("interval set");
                                                //Swap changes everyones status in the user table.
                                                swap.then(function (result) {
                                                    console.log("swapped",result);
                                                    readyOnDeck.then(function(result) {
                                                       updatePresenter.then(function(){
                                                           console.log("#Winning", result);
                                                       })
                                                    });        
                                                });
                                                //I need to set the presenter after everyone swaps and then set that //username to the current presenster
                
                                            // performs every five minutes
                                            }, 5000);
                                        }, 10000);
                                    });
                                });
                            });
                            
                        }, 6000);
                    });
                }
            });

        });

        //If less then 2 Users reset Interval
        db.Users.hook('afterDestroy', function (user, options) {
            console.log('User Destroyed');
            users.numUsers(function (numUsers) {
                if (numUsers < 2) {
                    clearInterval();
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
// PresenterDummy.then(function(){
//     console.log("pray");
// });

module.exports = controller;