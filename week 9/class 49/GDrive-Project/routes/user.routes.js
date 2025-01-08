const express = require('express');
const router = express.Router();

// router.get('/test', function (req, res) { //  /user/test 
//     res.send('Welcome to the test Route');
// })

router.get('/register', (req,res)=>{
    res.render('register')
} )

router.post('/register',(req,res)=>{
    
    console.log(req.body);
    
    res.send("Registered")
})






module.exports  = router;