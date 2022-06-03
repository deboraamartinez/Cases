const database = require('../models')

class MerchantController {

  static async readAllMerchants(req, res) {
    try {
      const allMerchants = await database.Merchants.findAll(({
        include: [{
          model: database.Addresses
        },
        {
          model: database.Categories
        },
        {
          model: database.Shifts
        },
        {
          model: database.Services
        }]
      }))
      return res.status(200).json(allMerchants)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }


  static async readOneMerchant(req, res) {
    const { id } = req.params
    try {
      const oneMerchant = await database.Merchants.findOne({ where: { id: Number(id) } })
      return res.status(200).json(oneMerchant)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createMerchant(req, res) {
    const newMerchant = req.body
    try {
      const newMerchantCreated = await database.Merchants.create(newMerchant)
      return res.status(200).json(newMerchantCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateMerchant(req, res) {
    const { id } = req.params
    const newInfo = req.body
    try {
      await database.Merchants.update(newInfo, { where: { id: Number(id) } })
      const updatedMerchant = await database.Merchants.findOne({ where: { id: Number(id) } })
      return res.status(200).json(updatedMerchant)

    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteMerchant(req, res) {
    const { id } = req.params
    try {

      await database.Merchants.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ messagem: `Merchant ${id} deletado com sucesso` })
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // SHIFTS
  static async readMerchantShifts(req, res) {
    const { id } = req.params
    try {
      const oneShift = await database.Shifts.findAll({
        where:
        {
          merchantId: Number(id),
        }
      })
      return res.status(200).json(oneShift)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // Services
  static async readMerchantServices(req, res) {
    const { id } = req.params
    try {
      const oneService = await database.Services.findAll({
        where:
        {
          merchantId: Number(id),
        }
      })
      return res.status(200).json(oneService)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }
  // Address
  static async readMerchantAddress(req, res) {
    const { id } = req.params
    try {
      const oneAddress = await database.Addresses.findAll({
        where:
        {
          merchantId: Number(id),
        }
      })
      return res.status(200).json(oneAddress)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }


  //Categories
  static async readMerchantCategories(req, res) {
    const { id } = req.params
    try {
      const oneCategory = await database.Categories.findAll({
        where:
        {
          merchantId: Number(id),
        }
      })
      return res.status(200).json(oneCategory)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }
}



module.exports = MerchantController