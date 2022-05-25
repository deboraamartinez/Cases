const bodyParser = require('body-parser')
const merchants = require('./merchantsRoute')
const brands = require('./brandsRoute')
const shifts = require('./shiftsRoute')
const addresses = require('./addressRoute')
const services = require('./serviceRoute')
const categories = require('./categoryRoute')


module.exports = app => {
  app.use(
    bodyParser.json(),
    merchants,
    brands,
    shifts,
    addresses,
    services,
    categories
  )
}