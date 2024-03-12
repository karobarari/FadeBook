const express = require('express')
const router = express.Router()
const getAllEndpoints = require('../controllers/api.controller')

router.get('/', getAllEndpoints)

module.exports = router