/* Controller sets the timer and modifies user status to
determine the current presenter, onDeck and audience */

var users = require("../js/user-sequelize");
var db = require("../models");
var moment = require("moment");

var controller = {
    run: function() {
        var numUsers = users.numUsers();

        //hook = listener on(user created)

        if (numUsers < 2) {
            users.db.Hook('afterCreate', function(user, options) {
            //if the numUsers are less than 2 then we want it to keep checking for more presenters on deck.
            //if the numUsers are equal to 2 then we want to call the readyOnDeck to get a presenter and then return the presenter
            if (numUsers === 2) {

                    setTimeout(function() {
                        readyOnDeck
                    
                }, 150000);
                
        });
    }
        // performs every five minutes
        setInterval(function(){
           // set Presenter. Swap changes everyones status in the user table. I need set the presenter after everyones swap and then set that username to the current presenster.
        
        }, 3000000);
    
      }
};

//use moment to find current time and add five minutes to it. This will be set as the end time.


module.exports = controller;