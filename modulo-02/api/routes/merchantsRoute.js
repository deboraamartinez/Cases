const { Router } = require('express')
const MerchantController = require('../controllers/MerchantController')

const router = Router()



router.post('/merchant/', MerchantController.createMerchant)
router.get('/merchant/', MerchantController.readAllMerchants)
router.get('/merchant/:id', MerchantController.readOneMerchant)
router.put('/merchant/:id', MerchantController.updateMerchant)
router.delete('/merchant/:id', MerchantController.deleteMerchant)

// Status
router.put('/merchantStatus/:id', MerchantController.updateStatus)
router.get('/merchantStatusOn/', MerchantController.readOnStatus)
router.get('/merchantStatusOff/', MerchantController.readOffStatus)

//mensagem

router.put('/merchantMessage/:id', MerchantController.sendMensagem)


module.exports = router