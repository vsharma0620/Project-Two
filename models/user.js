// Create a "User" model with the following configuration

var Users = sequelize.define("Users", {

    username: Sequelize.STRING,
    presenting: Sequelize.BOOLEAN,
    category: Sequelize.STRING,
})

module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {


        username: {type: DataTypes.STRING},
        presenting: {type: DataTypes.BOOLEAN},
        category: {type: DataTypes.STRING}
    });
    return Users;
}


