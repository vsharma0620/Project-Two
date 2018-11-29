// Create a "User" model with the following configuration
module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {

        username: {type: DataTypes.STRING},
        presenting: {type: DataTypes.BOOLEAN},
        category: {type: DataTypes.STRING}
    });
    return Users;
}


