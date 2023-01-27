const { ProjectType } = require("../models/projectType")
const {Project} = require('../models/project')

module.exports = {
    getAllUserProjects: (req, res) => {
        console.log("getAllUserProjects")
    },
    addProject: (req, res) => {
        console.log("addProject")
    },
    getAllProjectTypes: async (req, res) => {
        console.log("getAllProjectTypes")
        try {
            // console.log('laskdjf;alskdjf;klas')
            const allProjectTypes =  await ProjectType.findAll()
            // console.log(allProjectTypes)
            return res.status(200).send(allProjectTypes)
        } catch (err) {
            console.log(err)
            res.sendStatus(400)
        }
    }
}
