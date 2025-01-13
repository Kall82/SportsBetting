const express = require('express');
const router = express.Router();


// Controllers for routes
const userController = require('./controllers/userController');


// Define the routes
router.post('/api/user/signup',    userController.userSignup);
router.post('/api/user/signin',    userController.userSignin);
router.get('/api/user/getinfo',    userController.userInfo);
router.post('/api/user/logout',    userController.userLogout);



module.exports = router;
