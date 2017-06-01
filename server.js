const express = require('express')
const es = require('express-session')
const bp = require('body-parser')
const cors = require('cors')
var config = require('./.config.js')
var userCtrl = require('./controllers/userCtrl.js')
var profileCtrl = require('./controllers/profileCtrl.js')

// initialize with express
var app = express()

//static file server upper
app.use(express.static(__dirname + '/public'));

// set up CORS
app.use(bp.json())
var corsOptions = {
  origin: 'http://localhost:3000'
}


app.use(cors(corsOptions))

// use secret
app.use(es({secret: config.sessionSecret,
            resave: false,
            saveUninitialized: false}))





// API ENDPOINTS &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
app.post('/api/login', userCtrl.login)

app.get('/api/profiles', profileCtrl.getFriendsProfiles)









app.listen(3000, function(){
  console.log('magic happens on port 3k')
})
