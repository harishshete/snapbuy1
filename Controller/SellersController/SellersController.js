const Seller = require('../../models/Seller');


exports.updateSeller = async (req, res) => {
    // res.json("Request for Update Seller");

    console.log("Reached to Update Shopper" + req.user.id);
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(); 
    }
    try {
        const updatedSeller = await Seller.findByIdAndUpdate(req.user.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedSeller);
        
    } catch (error) {
        res.status(500).json("Could Not Update " + error)
    }

}
