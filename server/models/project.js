const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    Project: sequelize.define("project", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        projectName: DataTypes.STRING,
        desc: DataTypes.TEXT
    })
}