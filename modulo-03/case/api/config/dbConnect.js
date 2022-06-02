const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://GIT:123@cluster0.zau8l.mongodb.net/messages')

let db = mongoose.connection

module.exports = db