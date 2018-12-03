
/* Controller sets the timer and modifies user status to
determine the current presenter, onDeck and audience */

var users = require("../js/user-sequelize");
var moment = require("moment");

var controller = {
    run: function() {
        // performs every five minutes
        setInterval(function(){
            
        }, 3000000);
    }
};


module.exports = controller;