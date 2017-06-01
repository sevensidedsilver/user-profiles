const express = require('express')
const es = require('express-session')
const bp = require('body-parser')
const cors = require('cors')

var app = express()


app.use(bp.json())
app.use(cors(corsOptions))
var corsOptions = {
  origin: 'http://localhost:3000'
}



app.listen(3000, function(){
  console.log('magic happens on port 3k')
})
