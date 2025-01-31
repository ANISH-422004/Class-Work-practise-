module.exports.indexController = (req,res,next)=>{
    console.log("Welcome to homepage")
    next();
}

module.exports.indexController2 = (req,res,next)=>{
    console.log("Welcome to homepage2")
    res.send("This is homepage form 2nd controller")
    // next() 
    
}