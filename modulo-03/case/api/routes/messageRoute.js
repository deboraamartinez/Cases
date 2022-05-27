const { Router } = require('express')
const MessagesController = require('../controllers/MessagesController')

const router = Router()



router.get('/messages', MessagesController.readAllMessages)
router.post('/messages', MessagesController.createMessages)

module.exports = router