const express = require("express");
const router = express.Router();
const checkAuth = require('../../../middleware/check-auth');

const worklistController = require('../../../controllers/v1/WorkList/worklist')

router.get("/worklist/",checkAuth.checkAuth,worklistController.getWorkList);
// router.post("/worklist/add",checkAuth,authController.register)
// router.post("/worklist/update",checkAuth,authController.register)
// router.post("/worklist/delete",checkAuth,authController.register)

// router.get("/worklist/all",checkAuth,authController.login)

// router.post("/workplan/",checkAuth,authController.register)
// router.post("/workplan/add",checkAuth,authController.register)
// router.post("/workplan/update",checkAuth,authController.register)
// router.post("/workplan/delete",checkAuth,authController.register)

module.exports = router