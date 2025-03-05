const router = require('express').Router();
const authController = require('../Controller/AuthController/authController');
const cartController = require('../Controller/CartController/CartController');

router.post('/push', authController.verifyAndAuthorizeShopper,cartController.pushToCart);

router.get('/load:id', authController.verifyAndAuthorizeShopper,cartController.loadFromCart);

module.exports = router;


// router.get('/getproducts', cartController.getAllProducts);

// router.delete('/remove', authControler.verifyAndAuthorizeShopper, cartController.removeProduct);

// router.patch('/update', authControler.verifyAndAuthorizeShopper,cartController.updateProductQuantity);