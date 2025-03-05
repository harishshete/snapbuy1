const Shopper = require('../../models/Shopper');
const CryptoJS = require('crypto-js');

exports.updateShopper = async (req, res) => {
    console.log("Reached to Update Shopper" + req.user.id);
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }
    try {
        const updatedUser = await Shopper.findByIdAndUpdate(req.user.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json("Could Not Update " + error)
    }
}

exports.getUsers = async (req, res) => {
    // res.json("Working....");
    try {
        const users = await Shopper.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.stats = async (req, res) => {
    const date = new Date();
    const lastYeaar = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        const data = await Shopper.aggregate([
            { $match: { createdAt: { $gte: lastYeaar } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: 1 }
                }
            }
        ]);
        res.status(200).json(data);
    } catch (error) {
        res.stats(500).json(error);
    }
}