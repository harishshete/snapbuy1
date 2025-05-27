const router = require('express').Router();
const authControler = require('../Controller/AuthController/authController');
const ordersController = require('../Controller/OrsersController/ordersController');


router.get('/', (req, res) => {
  console.log("Reached....");

  const targetSize = 3.7 * 1024 * 1024; // 3.7 MB
  const responseArray = [];
  let currentSize = 0;

  while (currentSize < targetSize) {
    const obj = {
      id: responseArray.length + 1,
      name: "test_data_".repeat(10), // longer string
      description: "a".repeat(100)   // more content per object
    };
    responseArray.push(obj);
    currentSize = Buffer.byteLength(JSON.stringify(responseArray));
  }

  console.log(`Final payload size: ${currentSize} bytes`);
  res.status(200).json(responseArray);
});
/*
router.get('/', (req, res) => {
    res.status(403).json({
        message : "You are not suthorized to sccess this resource"
    })
});
*/
module.exports = router;
