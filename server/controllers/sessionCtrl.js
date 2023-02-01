const { Session } = require("../models/session")
const {Project}  = require('../models/project')

module.exports = {
    getAllUserSessions: async (req, res) => {
        console.log("getAllUserSessions")
        try {
            const { userId } = req.params
            const allSessions = await Session.findAll({ 
                include: [{
                    model: Project,
                    require: true,
                    where: {userId: +userId}
                }]
            })
            res.status(200).send(allSessions)
        } catch (err) {
            console.log(err)
            res.sendStatus(400)
        }
    },
    addSession: async (req, res) => {
        try {
            const { userId, selectedProjectId, notes, date, length } = req.body
            console.log(selectedProjectId)
            await Session.create({
                userId,
                projectId: selectedProjectId,
                notes,
                date,
                length
            })
            res.sendStatus(200)
        } catch (err) {
            console.log(err)
            res.sendStatus(400)
        }
    }
}
