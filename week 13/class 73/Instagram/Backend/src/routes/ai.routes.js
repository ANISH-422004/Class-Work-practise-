const express = require("express")
const router = express.Router()
const aiService = require("../services/ai.service")
const postMiddleware = require("../middlewares/post.middlewares")

router.get("/generateOnPrompt", async (req, res) => {
    try {
        const prompt = req.query.prompt
        const response = await aiService.generateContent(prompt)
        res.status(200).json({ response: response })

    } catch (error) {
        console.log(error)
    }
})


router.post("/generateCaption", postMiddleware.handelFileUpload, async (req, res) => {
    try {
        const imageBuffer = req.file.buffer
        const generatedCaption = await aiService.generateCaptionfromImageBuffer(imageBuffer)
        
        res.status(201).json({ caption: generatedCaption })


    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})


module.exports = router