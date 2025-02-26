const express = require("express")
const router = express.Router()
const aiService = require("../services/ai.service")
const postMiddleware = require("../middlewares/post.middlewares")
const aiController = require("../controllers/ai.controller")
router.get("/generateOnPrompt",aiController.generatePrompt )


router.post("/generateCaption", postMiddleware.handelFileUpload, aiController.generateCaption)


module.exports = router