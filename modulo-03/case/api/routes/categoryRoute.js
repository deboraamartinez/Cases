const { Router } = require('express')
const CategoryController = require('../controllers/CategoryController')

const router = Router()

//Category

router.get('/categories', CategoryController.readAllCategories)
router.get('/categories/:id', CategoryController.readOneCategory)
router.post('/categories', CategoryController.createCategory)
router.put('/categories/:id', CategoryController.updateCategory)
router.delete('/categories/:id', CategoryController.deleteCategory)

module.exports = router