

module.exports = {
    register: (req, res) => {
        console.log('register')
        res.sendStatus(200)
    },
    login: (req, res) => {
        console.log('login')
    }
}