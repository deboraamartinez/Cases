const { Router } = require('express')
const ServiceController = require('../controllers/ServiceController')

const router = Router()

//Address

router.get('/services', ServiceController.readAllServices)
router.get('/services/:id', ServiceController.readOneService)
router.post('/services', ServiceController.createService)
router.put('/services/:id', ServiceController.updateService)
router.delete('/services/:id', ServiceController.deleteService)

module.exports = router