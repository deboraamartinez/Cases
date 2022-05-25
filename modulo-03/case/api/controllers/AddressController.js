const database = require('../models')

class AddressController {

  // Addresses
  static async readAllAdresses(req, res) {
    try {
      const allAdresses = await database.Addresses.findAll()
      return res.status(200).json(allAdresses)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async readOneAddress(req, res) {
    const { id } = req.params
    try {
      const oneAddress = await database.Addresses.findOne({ where: { id: Number(id) } })
      return res.status(200).json(oneAddress)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createAddress(req, res) {
    const newAddress = req.body
    try {
      const newCreatedAddress = await database.Addresses.create(newAddress)
      return res.status(200).json(newCreatedAddress)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateAddress(req, res) {
    const { id } = req.params
    const newInfo = req.body
    try {
      await database.Addresses.update(newInfo, { where: { id: Number(id) } })
      const updatedAddress = await database.Addresses.findOne({ where: { id: Number(id) } })
      return res.status(200).json(updatedAddress)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async deleteAddress(req, res) {
    const { id } = req.params
    try {

      await database.Addresses.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ messagem: `Address ${id} deletado com sucesso` })
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

}


module.exports = AddressController