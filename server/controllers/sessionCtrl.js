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
    },
    getSession: async (req, res) => {
        try {
            const {id} = req.params
            const session = await Session.findOne(
                {where: {id: +id},
                include: [{
                    model: Project,
                    require: true
                }]
            })
            res.status(200).send(session)

        } catch(err) {
            console.log(err)
            res.sendStatus(400)
        }
    },
    editSession: async (req, res) => {
        try {
            const {sessionId, projectId, notes, date, length} = req.body
            await Session.update({projectId, notes, length, date}, {where: {id: sessionId}})
            const updatedSession = await Session.findOne({where: {id: sessionId},
            include:[{
                model: Project
            }]})
            res.status(200).send(updatedSession)
        } catch(err) {
            console.log(err)
            res.sendStatus(400)
        }
    }
}
