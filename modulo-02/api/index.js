const express = require('express')
const bodyParser = require('body-Parser')
const routes = require('./routes/index.js')

const app = express()
const port = 3000

routes(app)


app.listen(port, () => console.log(`The server is running on ${port}`))

module.exports = app