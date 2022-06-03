const database = require('../models')

class CategoryController {

  // Categories
  static async readAllCategories(req, res) {
    try {
      const allCategories = await database.Categories.findAll()
      return res.status(200).json(allCategories)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async readOneCategory(req, res) {
    const { id } = req.params
    try {
      const oneCategory = await database.Categories.findOne({ where: { id: Number(id) } })
      return res.status(200).json(oneCategory)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createCategory(req, res) {
    const newCategory = req.body
    try {
      const newCreatedCategory = await database.Categories.create(newCategory)
      return res.status(200).json(newCreatedCategory)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateCategory(req, res) {
    const { id } = req.params
    const newInfo = req.body
    try {
      await database.Categories.update(newInfo, { where: { id: Number(id) } })
      const updatedCategory = await database.Categories.findOne({ where: { id: Number(id) } })
      return res.status(200).json(updatedCategory)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async deleteCategory(req, res) {
    const { id } = req.params
    try {

      await database.Categories.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ messagem: `Category ${id} deletado com sucesso` })
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

}


module.exports = CategoryController