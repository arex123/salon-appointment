const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { submitLogin } = require('../controllers/user')

router.post('/login',auth,submitLogin)

module.exports = router