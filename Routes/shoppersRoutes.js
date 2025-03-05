const router = require('express').Router();
const authControler = require('../Controller/AuthController/authController');
const shoppersController = require('../Controller/ShoppersController/ShoppersController');
// const SellersController = require("../Controller/SellersController/SellersController");


router.post('/register', authControler.registerShopper);

router.put('/update',authControler.verifyAndAuthorizeShopper,shoppersController.updateShopper);

router.post('/login', authControler.login);

router.delete('/logout', authControler.logout);

// Only Seller Can access this API
router.get("/getusers", authControler.isPresent,authControler.verifyAndAuthorizeSeller, shoppersController.getUsers);

router.get("/stats", authControler.isPresent,authControler.verifyAndAuthorizeSeller, shoppersController.stats);

module.exports = router;