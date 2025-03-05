const CryptoJS = require('crypto-js');
const User = require('../../models/User');


exports.updateUser = async (req, res) => {
    console.log("Reached to Update Shopper" + req.params.id);
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(); 
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedUser);
        
    } catch (error) {
        res.status(500).json("Could Not Update " + error)
    }
}

