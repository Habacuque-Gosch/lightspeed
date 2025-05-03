// LOAD MODULES
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const session = require('express-session')
const index = require('./routes/index')
require('dotenv').config()


// CONFIG

    // SESSION
    const secret_key = `${process.env.secret_key}`
    app.use(session({
        secret: secret_key,
        cookie: {},
        resave: false,
        saveUninitialized: false
    }))

    // TEMPLATE ENGINE
    app.engine('handlebars', handlebars.engine(({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
    })))
    app.set('view engine', 'handlebars')
    app.set('views', __dirname + '/views')

    // bodyparser
    app.use(bodyParser.urlencoded({ extended: false }));

    // static files
    app.use(express.static(path.join(__dirname,'public')))


    app.use('/', index)

const PORT = 8081
app.listen(PORT, () => {
    console.log('Serve is on')
})