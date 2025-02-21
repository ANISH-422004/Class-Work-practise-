const express = require('express');
const indexcontroller = require("../controllers/index.controller")
const userMiddleware = require("../middlewares/user.middlewares")

const router = express.Router();

router.get('/feed',userMiddleware.authUser,indexcontroller.feedController );


module.exports = router;