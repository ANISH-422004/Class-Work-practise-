const recipieModel = require("../model/recipie.model")



module.exports.createRecipie = async (req, res) => {
    try {
        const { title, image, description } = req.body
        if (!title || !image || !description) return res.status(400).json({ message: "Inputs are Empty" })
        const newRecipie = await recipieModel.create({
            title,
            image,
            description
        })
        if (!newRecipie) return res.status(500).json({ message: "Error while creating recipie" })

        res.json({ message: "Recipie Created" })


    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}


module.exports.allrecipes = async (req, res) => {
    try {
        const recipes = await recipieModel.find()
        res.json({massage:recipes})


    } catch (error) {
        console.log(error)
        res.status(500).json({ massage: error.massage })
    }
}


module.exports.getArecipeController = async(req,res)=>{
    try {

        const recipe = await recipieModel.findOne({_id:req.params.id})
        res.json({massage:recipe})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ massage: error.massage })
    }
}