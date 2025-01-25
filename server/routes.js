const express  = require('express');
const router   = express.Router();


// Controllers for routes
const userController           = require('./controllers/userController');
//
const sportFootballController  = require('./controllers/sportsController/football');


// Define the routes
router.post('/api/user/signup',     userController.userSignup);
router.post('/api/user/signin',     userController.userSignin);
router.get('/api/user/getinfo',     userController.userInfo);
router.post('/api/user/logout',     userController.userLogout);

router.get('/api/sports/football',  sportFootballController.getDatas);


module.exports = router;
