const { Router } = require('express')
const ShiftController = require('../controllers/ShiftController')

const router = Router()

//shift

router.get('/shifts', ShiftController.readAllShifts)
router.get('/shifts/:id', ShiftController.readOneShift)
router.post('/shifts', ShiftController.createShift)
router.put('/shifts/:id', ShiftController.updateShift)
router.delete('/shifts/:id', ShiftController.deleteShift)

module.exports = router