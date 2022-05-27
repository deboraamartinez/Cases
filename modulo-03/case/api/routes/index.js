const bodyParser = require('body-parser')
const merchants = require('./merchantsRoute')
const brands = require('./brandsRoute')
const shifts = require('./shiftsRoute')
const adresses = require('./addressRoute')
const services = require('./serviceRoute')
const categories = require('./categoryRoute')
const messages = require('./messageRoute')


module.exports = app => {
  app.use(
    bodyParser.json(),
    merchants,
    brands,
    shifts,
    adresses,
    services,
    categories,
    messages
  )
}