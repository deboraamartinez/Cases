const { Router } = require('express')
const BrandController = require('../controllers/BrandController')

const router = Router()

router.get('/brands', BrandController.readAllBrands)
router.get('/brands/:id', BrandController.readOneBrand)
router.post('/brands', BrandController.createBrand)
router.put('/brands/:id', BrandController.updateBrand)
router.delete('/brands/:id', BrandController.deleteBrand)


module.exports = router