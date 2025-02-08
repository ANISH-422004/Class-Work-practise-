const express = require('express');
const indexController = require("../controllers/inde.controlle")
const router = express.Router();

// Define your routes here
router.get('/getalluser',indexController.getUserController );
router.get('/getauser/:id',indexController.getaUserController)
router.post('/create',indexController.createUserController );
router.delete('/delete/:id',indexController.deleteUserController );
router.put('/update/:id',indexController.UpdateUserController );

// Export the router
module.exports = router;