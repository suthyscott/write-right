const {sequelize} = require('./database')
const {ProjectType} = require('../models/projectType')

const types = [
    {
        projectTypeName: 'Short story'
    },
    {
        projectTypeName: 'Novel'
    },
    {
        projectTypeName: 'Essay'
    }
]

const seedDatabase = async () => {
    await ProjectType.bulkCreate(types)
} 

module.exports = {
    seedDatabase
}