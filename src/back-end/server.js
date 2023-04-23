const express = require('express')
require('./config/mongoose')
const AppRoutes = require('./routes/index')
const session = require('express-session')

const app = express()

//setting up express session for authentication
app.use(session({
    secret: process.env.SECRET,
    cookie: { maxAge: 3600000 },
    resave: false,
    saveUninitialized: true,
}))

const port = process.env.PORT

app.use(express.json())

AppRoutes.init(app); //initializing app routing


app.listen(port, () => {
    console.log('server on port: '+port)
})