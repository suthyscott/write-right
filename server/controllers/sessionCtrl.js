const {Session} = require("../models/session")

module.exports = {
    getAllUserSessions: (req, res) => {
        console.log('getAllUserSessions')
    },
    addSession: async (req, res) => {
        try{
           
            const {userId, selectedProjectId, notes, date, length} = req.body
            console.log(selectedProjectId)
            await Session.create({
                userId, 
                projectId: selectedProjectId, 
                notes, 
                date, 
                length
            })
            res.sendStatus(200)
        } catch(err){
            console.log(err)
            res.sendStatus(400)
        }
    }
}