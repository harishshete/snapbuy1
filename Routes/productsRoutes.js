const router = require('express').Router();
const authControler = require('../Controller/AuthController/authController');
const productsController = require('../Controller/ProductsController/productsController');
const upload = require("../Service/upload");

//Product Endpoints for shoppers
router.get('/getbycategory', productsController.getProductsByCategory);
router.get('/getbyid:id', productsController.getProductById);
router.get('/allproducts', productsController.allProducts);



//Products Endpoints for sellers
router.get('/getproducts:id', productsController.getAllProducts); 
router.delete('/delete:id', productsController.deleteProduct);
router.put('/update:id', authControler.verifyAndAuthorizeSeller, productsController.updateProduct);
router.post('/add:id', upload.single('productImage'), productsController.addProduct);


// Form to Add product
router.get("/form", (req, res) => {
    res.render("form");
});




module.exports = router;