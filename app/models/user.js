// Dependencies
// =============================================================

// Require the sequelize library
var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
var sequelize = require("../config/connection");
// Create a "User" model with the following configuration
var Users = sequelize.define("Users", {

    username: Sequelize.STRING,
    presenting: Sequelize.BOOLEAN,
    category: Sequelize.STRING,
})

// Sync model with DB

Users.sync();

// Export the book model for other files to use

module.exports = Users;