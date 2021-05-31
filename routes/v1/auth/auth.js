const express = require("express");
const router = express.Router();

const authController = require('../../../controllers/v1/auth/auth')

router.post("/auth/login",authController.login)
router.post("/auth/register",authController.register)
router.get('/auth/logout',authController.logout)

module.exports = router