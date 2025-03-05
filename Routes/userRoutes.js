const router = require('express').Router();
const authControler = require('../Controller/AuthController/authController');
const userController = require('../Controller/UserController/userController');


router.post('/register', authControler.register);

router.put('/seller/update:id', authControler.verifyAndAuthorizeSeller, userController.updateUser); 

router.put('/shopper/update:id', authControler.verifyAndAuthorizeShopper, userController.updateUser); 

router.post('/login', authControler.login);


module.exports = router;