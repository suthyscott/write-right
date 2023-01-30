const { ProjectType } = require("../models/projectType")
const {Project} = require('../models/project')

module.exports = {
    getAllUserProjects: (req, res) => {
        console.log("getAllUserProjects")
    },
    addProject: async (req, res) => {
        console.log("addProject")
        try {
            const {projectDesc, projectName, selectedProjectType, userId} = req.body
            const newProject = await Project.create({projectName, desc: projectDesc, userId, projectTypeId: selectedProjectType})

            res.status(200).send(newProject)
        }catch(err){
            console.log(err)
            res.sendStatus(400)
        }
    },
    getAllProjectTypes: async (req, res) => {
        console.log("getAllProjectTypes")
        try {

            const allProjectTypes =  await ProjectType.findAll()

            return res.status(200).send(allProjectTypes)
        } catch (err) {
            console.log(err)
            res.sendStatus(400)
        }
    }
}
