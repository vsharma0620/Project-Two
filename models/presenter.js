// Create a "Presenter" table with the data for presenting

module.exports = function(sequelize, DataTypes) {
    var Presenter = sequelize.define("Presenter", {

        presenter: {
            type: DataTypes.STRING,
        },

        type: {
            type: DataTypes.STRING,
            values: ["Text", "Audio"]
        },

        Text: {
            type: DataTypes.TEXT,
            defaultValue: null
        },

        //audio needs to be stored as binary buffer in database
        Audio: {
            type: DataTypes.BLOB,
            defaultValue: null
        },

        endtime: {
            type: DataTypes.DATE,
            defaultValue: null
        },

        snaps: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },

        rejects: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }


    });
    return Presenter;
}