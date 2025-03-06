const Seller = require('../../models/Seller');


exports.updateSeller = async (req, res) => {
    // res.json("Request for Update Seller");

    console.log("Reached to Update Seller");
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

exports.deleteSeller = async (req, res) => {
    console.log("Reached to Delete Seller");

    if(req.body.seller_id && req.body.number == 'perforce' ){
        try {
            const deletedSeller = await Seller.findByIdAndDelete(req.body.seller_id)
            res.status(200).json(deletedSeller)
        } catch (error) {
            res.json(error)
        }
    }
}

exports.listSellers = async (req, res) => { 
    console.log("/listsellers called")

    console.log("fetching details from the Seller schema")
    const sellers = await Seller.find({}, 'firstname _id')
    console.log("fetched details from the Seller schema and returning the response")
    console.log(sellers)
    res.status(200).json(sellers)
}