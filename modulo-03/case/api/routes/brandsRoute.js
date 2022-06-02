const { Router } = require('express')
const BrandController = require('../controllers/BrandController')

const router = Router()

router.get('/brands', BrandController.readAllBrands)
router.get('/brands/:id', BrandController.readOneBrand)
router.post('/brands', BrandController.createBrand)
router.put('/brands/:id', BrandController.updateBrand)
router.delete('/brands/:id', BrandController.deleteBrand)

// Shifts

router.get('/brands/:id/shifts', BrandController.readBrandShifts)

// Address
router.get('/brands/:id/adresses', BrandController.readBrandAddress)

//Categories
router.get('/brands/:id/categories', BrandController.readBrandCategories)

//Services
router.get('/brands/:id/services', BrandController.readBrandServices)


module.exports = router