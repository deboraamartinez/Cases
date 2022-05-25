const { Router } = require('express')
const AddressController = require('../controllers/AddressController')

const router = Router()

//Address

router.get('/addresses', AddressController.readAllAddresses)
router.get('/addresses/:id', AddressController.readOneAddress)
router.post('/addresses', AddressController.createAddress)
router.put('/addresses/:id', AddressController.updateAddresses)
router.delete('/addresses/:id', AddressController.deleteAddress)

module.exports = router