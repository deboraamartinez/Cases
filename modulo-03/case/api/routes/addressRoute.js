const { Router } = require('express')
const AddressController = require('../controllers/AddressController')

const router = Router()

//Address

router.get('/adresses', AddressController.readAllAdresses)
router.get('/adresses/:id', AddressController.readOneAddress)
router.post('/adresses', AddressController.createAddress)
router.put('/adresses/:id', AddressController.updateAddress)
router.delete('/adresses/:id', AddressController.deleteAddress)

module.exports = router