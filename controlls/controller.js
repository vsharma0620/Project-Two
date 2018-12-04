/* Controller sets the timer and modifies user status to
determine the current presenter, onDeck and audience */

var users = require("../js/user-sequelize");
var db = require("../models");
var moment = require("moment");

var controller = {
    run: function() {
        var numUsers = users.numUsers();

        if (users <= 2) {
            users.db.Hook('afterCreate', function(user, options) {
                
        }
        //hook = listener on(user created)
        
        else if (user > 2) {

        
        // performs every five minutes
        setInterval(function(){
           // set Presenter. Swap changes everyones status in the user table. I need set the presenter after everyones swap and then set that username to the current presenster.
        
        }, 3000000);
    }
}
};

//use moment to find current time and add five minutes to it. This will be set as the end time.


module.exports = controller;