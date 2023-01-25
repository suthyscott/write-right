const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    ProjectType: sequelize.define("project_type", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        projectTypeName: DataTypes.STRING
    })
}