const router = require('express').Router();
const authControler = require('../Controller/AuthController/authController');
const ordersController = require('../Controller/OrsersController/ordersController');


router.get('/', (req, res) => {
    const sizeInBytes = 3.7 * 1024 * 1024; // 3.5 MB
  // Create a string of repeated 'a' characters to match the size
  const responseData = 'a'.repeat(sizeInBytes);

    res.status(200).json(
    responseData
        //    message : "You are not suthorized to sccess this resource"
    )
});

/*
router.get('/', (req, res) => {
    res.status(403).json({
        message : "You are not suthorized to sccess this resource"
    })
});
*/
module.exports = router;
