const { Router } = require('express')
const MerchantController = require('../controllers/MerchantController')

const router = Router()

// matriz e filial
router.get('/merchants/brand', MerchantController.readMerchantByBrand)

// Status
router.get('/merchants/status', MerchantController.readMerchantByStatus)
router.put('/merchants/:id/status', MerchantController.updateStatus)


//mensagem

router.put('/merchants/:id/message', MerchantController.sendMensagem)

//merchant

router.post('/merchants', MerchantController.createMerchant)
router.get('/merchants', MerchantController.readAllMerchants)
router.get('/merchants/:id', MerchantController.readOneMerchant)
router.put('/merchants/:id', MerchantController.updateMerchant)
router.delete('/merchants/:id', MerchantController.deleteMerchant)



module.exports = router