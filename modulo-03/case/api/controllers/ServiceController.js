const database = require('../models')

class ServiceController {

  // Services
  static async readAllServices(req, res) {
    try {
      const allServices = await database.Services.findAll()
      return res.status(200).json(allServices)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async readOneService(req, res) {
    const { id } = req.params
    try {
      const oneService = await database.Services.findOne({ where: { id: Number(id) } })
      return res.status(200).json(oneService)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createService(req, res) {
    const newService = req.body
    try {
      const newCreatedService = await database.Services.create(newService)
      return res.status(200).json(newCreatedService)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateService(req, res) {
    const { id } = req.params
    const newInfo = req.body
    try {
      await database.Services.update(newInfo, { where: { id: Number(id) } })
      const updatedService = await database.Services.findOne({ where: { id: Number(id) } })
      return res.status(200).json(updatedService)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async deleteService(req, res) {
    const { id } = req.params
    try {

      await database.Services.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ messagem: `Service ${id} deletado com sucesso` })
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

}


module.exports = ServiceController