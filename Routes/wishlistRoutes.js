const router = require('express').Router();
const authControler = require('../Controller/AuthController/authController');
const WishlistController = require('../Controller/WishlistController/WishlistController');


router.post('/add', WishlistController.addProductToWishlist);

router.get('/getproducts', WishlistController.getProductFromWishlist);

router.delete('/remove', WishlistController.removeProductFromWishlist);

module.exports = router;