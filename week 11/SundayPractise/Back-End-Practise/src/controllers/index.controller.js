const userModel = require('../models/user.model.js');
const postModel = require('../models/post.model.js');


module.exports.indexcontroller  =(req, res) => { 
    res.send("hello")
}

module.exports.createUserController = async(req, res) => {
    const {name , email, password} = req.body;
    try {
        const newUser = new userModel({name, email, password});
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {   
        console.log(error);
    }
    

}

module.exports.createpostController = async(req, res) => {
    try {
        const user = await userModel.findOne({name: req.params.username}); // this obj returend by mongoose is a promise which have some methods like save, find, findOne, findOneAndUpdate, findOneAndDelete, update, delete, etc
        const {content} = req.body;
        const createdPost = new postModel({user: user._id, content});
        await createdPost.save();
        
        user.posts.push(createdPost._id);
        await user.save();



        res.send(createdPost); 
        
    } catch (error) {
        console.log(error);
        
    }




}