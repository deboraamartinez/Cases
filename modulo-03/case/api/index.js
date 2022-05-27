const express = require('express')
const routes = require('./routes/index.js')
const db = require('./config/dbConnect')

const app = express()
const port = 3000

routes(app)

db.on('error', console.log.bind(console, 'error of db connection'))
db.once('open', () => {
  console.log('The database is working')
})

app.listen(port, () => console.log(`The server is running on ${port}`))

module.exports = app