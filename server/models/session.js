const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    Session: sequelize.define("session", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        length: DataTypes.STRING,
        date: DataTypes.DATE,
        notes: DataTypes.TEXT
    })
}