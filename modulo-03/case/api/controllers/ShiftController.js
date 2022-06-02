const database = require('../models')

class ShiftController {



  // SHIFTS
  static async readAllShifts(req, res) {
    try {
      const allShifts = await database.Shifts.findAll()
      return res.status(200).json(allShifts)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async readOneShift(req, res) {
    const { id } = req.params
    try {
      const oneShift = await database.Shifts.findOne({ where: { id: Number(id) } })
      return res.status(200).json(oneShift)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createShift(req, res) {
    const newShift = req.body
    try {
      const newCreatedShift = await database.Shifts.create(newShift)
      return res.status(200).json(newCreatedShift)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateShift(req, res) {
    const { id } = req.params
    const newInfo = req.body
    try {
      await database.Shifts.update(newInfo, { where: { id: Number(id) } })
      const updatedShift = await database.Shifts.findOne({ where: { id: Number(id) } })
      return res.status(200).json(updatedShift)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async deleteShift(req, res) {
    const { id } = req.params
    try {

      await database.Shifts.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ messagem: `Shift ${id} deletado com sucesso` })
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

}


module.exports = ShiftController