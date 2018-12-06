
/* Controller sets the timer and modifies user status to
determine the current presenter, onDeck and audience */


var users = require("../js/user-sequelize");
var moment = require("moment");
// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("open_mic_db", "root", "mona12271", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var controller = {
    run: function() {
        // performs every five minutes
        setInterval(function(){
            
        }, 3000000);
    }
};


module.exports = controller;