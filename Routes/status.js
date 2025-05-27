const router = require('express').Router();
const authControler = require('../Controller/AuthController/authController');
const ordersController = require('../Controller/OrsersController/ordersController');


router.get('/', (req, res) => {
const targetSize = 3.7 * 1024 * 1024; // 3.7 MB
  const staticObjectStr = '{"name":"test","lastname":"test1"}';

  const objSize = Buffer.byteLength(staticObjectStr) + 1; // +1 for comma
  const count = Math.floor(targetSize / objSize);

  const repeatedObjects = Array(count).fill(staticObjectStr).join(',');
  const finalJson = `[${repeatedObjects}]`;

  res.set('Content-Type', 'application/json');
  res.send(finalJson);
});


/*
router.get('/', (req, res) => {
    res.status(403).json({
        message : "You are not suthorized to sccess this resource"
    })
});
*/
module.exports = router;
