const express = require('express')
const {sendMessage} = require('../controllers/message.controller')

const router = express.Router()

router.post('/send/:id',protectRoute,sendMessage)



module.exports = router