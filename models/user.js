// Create a "User" model with the following configuration

module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        presenting: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        category: {
            type: DataTypes.STRING
        },

        //status is 0 (viewer), 1 (ondeck), or 2 (presenter)
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {min: 0, max: 2}
        },

        //helps select users that have not already presented
        hasPresented: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    return Users;
}

       
