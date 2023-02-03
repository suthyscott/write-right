require('dotenv').config()
const express = require('express')
const cors = require('cors')

const {SERVER_PORT} = process.env
const {User} = require('./models/user')
const {Session} = require('./models/session')
const {Project} = require('./models/project')
const {ProjectType} = require('./models/projectType')
const {sequelize} = require('./util/database')
const { seedDatabase } = require('./util/seed')

const {register, login} = require('./controllers/authCtrl')
const {getAllUserProjects, addProject, getAllProjectTypes, editProject} = require('./controllers/projectCtrl')
const {getAllUserSessions, addSession, getSession} = require('./controllers/sessionCtrl')
const {isAuthorized} = require('./middleware/isAuthorized')


const app = express()

app.use(express.json())
app.use(cors())

User.hasMany(Project)
Project.belongsTo(User)

ProjectType.hasMany(Project)
Project.belongsTo(ProjectType)

Project.hasMany(Session)
Session.belongsTo(Project)

app.post('/api/register', register)
app.post('/api/login', login)

app.get('/api/projects/:userId', getAllUserProjects)
app.post('/api/projects', addProject)
app.get('/api/types', getAllProjectTypes)
app.put('/api/projects', editProject)

app.get('/api/sessions/:userId', getAllUserSessions)
app.post('/api/sessions', addSession)
app.get('/api/session/:id', getSession)


sequelize.sync()
// sequelize.sync({force: true}).then(() => seedDatabase())
    .then(() => {
        app.listen(SERVER_PORT, () => console.log(`Take us to warp ${SERVER_PORT}!`))
    })
    .catch(err => console.log(err))