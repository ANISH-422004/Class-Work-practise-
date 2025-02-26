const aiService = require("../services/ai.service")


module.exports.generatePrompt = async (req, res) => {
    try {
        const prompt = req.query.prompt
        const response = await aiService.generateContent(prompt)
        res.status(200).json({ response: response })

    } catch (error) {
        console.log(error)
    }
}


module.exports.generateCaption = async (req, res) => {
    try {
        const imageBuffer = req.file.buffer
        const generatedCaption = await aiService.generateCaptionfromImageBuffer(imageBuffer)
        
        res.status(201).json({ caption: generatedCaption })


    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}