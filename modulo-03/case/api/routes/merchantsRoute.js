const { Router } = require('express')
const MerchantController = require('../controllers/MerchantController')

const router = Router()

//merchant

router.get('/merchants', MerchantController.readAllMerchants)
router.get('/merchants/:id', MerchantController.readOneMerchant)
router.post('/merchants', MerchantController.createMerchant)
router.put('/merchants/:id', MerchantController.updateMerchant)
router.delete('/merchants/:id', MerchantController.deleteMerchant)


// Shifts

router.get('/merchants/:id/shifts', MerchantController.readMerchantShifts)

// Address
router.get('/merchants/:id/address', MerchantController.readMerchantAddress)

module.exports = router