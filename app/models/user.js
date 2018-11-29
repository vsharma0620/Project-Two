// Create a "User" model with the following configuration
<<<<<<< HEAD
var Users = sequelize.define("Users", {

    username: Sequelize.STRING,
    presenting: Sequelize.BOOLEAN,
    category: Sequelize.STRING,
})

// Sync model with DB
=======
module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
>>>>>>> a656a7cb0b44284235a00858cbc9ebaa6e882709

        username: {type: DataTypes.STRING},
        presenting: {type: DataTypes.BOOLEAN},
        category: {type: DataTypes.STRING}
    });
    return Users;
}


