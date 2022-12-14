const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const usersControllers = require('../controllers/users.js')

router.post('/api/auth/signup', usersControllers.signup)
router.post('/api/auth/login', usersControllers.login)
 
module.exports = router