const bodyParser = require('body-parser')
const merchants = require('./merchantsRoute')


module.exports = app => {
  app.use(
    bodyParser.json(),
    merchants
  )
}