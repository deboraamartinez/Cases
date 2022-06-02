const database = require('../models')

class BrandController {
  static async readAllBrands(req, res) {
    try {
      const allBrands = await database.Brands.findAll(({
        include: [{
          model: database.Addresses
        },
        {
          model: database.Categories
        },
        {
          model: database.Merchants
        },
        {
          model: database.Shifts
        },
        {
          model: database.Services
        }]
      }))
      return res.status(200).json(allBrands)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async readOneBrand(req, res) {
    const { id } = req.params
    try {
      const oneBrand = await database.Brands.findOne(({
        include: [{
          where: { id: Number(id) },
          model: database.Addresses
        },
        {
          where: { id: Number(id) },
          model: database.Categories
        },
        {
          where: { id: Number(id) },
          model: database.Merchants
        },
        {
          where: { id: Number(id) },
          model: database.Shifts
        },
        {
          where: { id: Number(id) },
          model: database.Services
        }]
      })
      )
      return res.status(200).json(oneBrand)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createBrand(req, res) {
    const newBrand = req.body
    try {
      const newBrandCreated = await database.Brands.create(newBrand)
      return res.status(200).json(newBrandCreated)
    } catch (error) {
      return res.status(500).json(error.message)

    }
  }

  static async updateBrand(req, res) {
    const { id } = req.params
    const newInfo = req.body
    try {
      await database.Brands.update(newInfo, { where: { id: Number(id) } })
      const updatedBrand = await database.Brands.findOne({ where: { id: Number(id) } })
      return res.status(200).json(updatedBrand)

    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteBrand(req, res) {
    const { id } = req.params
    try {

      await database.Brands.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ messagem: `Brand ${id} deletada com sucesso` })
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // SHIFTS
  static async readBrandShifts(req, res) {
    const { id } = req.params
    try {
      const oneShift = await database.Shifts.findAll({
        where:
        {
          brandId: Number(id),
        }
      })
      return res.status(200).json(oneShift)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // Services
  static async readBrandServices(req, res) {
    const { id } = req.params
    try {
      const oneService = await database.Services.findAll({
        where:
        {
          brandId: Number(id),
        }
      })
      return res.status(200).json(oneService)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }
  // Address
  static async readBrandAddress(req, res) {
    const { id } = req.params
    try {
      const oneAddress = await database.Addresses.findAll({
        where:
        {
          brandId: Number(id),
        }
      })
      return res.status(200).json(oneAddress)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }


  //Categories
  static async readBrandCategories(req, res) {
    const { id } = req.params
    try {
      const oneCategory = await database.Categories.findAll({
        where:
        {
          brandId: Number(id),
        }
      })
      return res.status(200).json(oneCategory)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = BrandController