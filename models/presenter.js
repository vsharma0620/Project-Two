// Create a "Presenter" table with the data for presenting

module.exports = function(sequelize, DataTypes) {
    var Presenter = sequelize.define("Presenter", {

        presenter: {
            type: DataTypes.STRING,
        },

        Text: {
            type: DataTypes.TEXT,
            defaultValue: null
        },

        //audio needs to be stored as binary buffer in database
        Audio: {
            type: DataTypes.BLOB,
            defaultValue: null
        }

    });
    return Presenter;
}