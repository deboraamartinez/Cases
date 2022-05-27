const mongoose = require('mongoose')

const messagesSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  date: { type: Date, default: new Date() },
  message: {
    type: String,
    required: true
  },
  attendantName: {
    type: String,
    required: true
  }
})

const messages = mongoose.model('messages', messagesSchema)

module.exports = messages