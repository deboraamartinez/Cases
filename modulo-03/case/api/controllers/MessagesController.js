const db = require('../models/messages')
const database = require('../models/')


class MessagesController {

  static async readAllMessages(req, res) {
    try {
      const allMessages = await db.find()
      return res.status(200).json(allMessages)
    }
    catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createMessages(req, res) {
    const newMessage = req.body
    try {
      const createdMessage = await db.create(newMessage)
      return res.status(200).json(createdMessage)
    }

    catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = MessagesController