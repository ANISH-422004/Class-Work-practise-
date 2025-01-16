const driverModel = require("../db/db")


module.exports.homepageshow = (req, res) => {
    res.render("index")
}
module.exports.profilecreationcontroller = async(req,res)=>{
    // console.log();
    const {name,email,password} =  req.query
    const newdriver = new driverModel ({  // creatinf an instance of a driverModal
        name:name,
        email:email,
        password:password
    })

    await newdriver.save()  

    
    res.send("Registered")
    
}