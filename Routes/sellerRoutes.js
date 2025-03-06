const router = require('express').Router();
const authControler = require('../Controller/AuthController/authController');
const SellersController = require('../Controller//SellersController/SellersController');
const { route } = require('.');

router.post('/register', authControler.registerSeller);

router.post('/login', authControler.login);

router.put('/update',authControler.isPresent, authControler.verifyAndAuthorizeSeller, SellersController.updateSeller);

router.delete('/logout', authControler.logout);

router.delete('/delete', SellersController.deleteSeller)

router.get('/listsellers', SellersController.listSellers)

module.exports = router;