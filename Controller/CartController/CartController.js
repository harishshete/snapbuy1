const Cart = require('../../models/Cart');


// Push cart To database
exports.pushToCart = async (req, res) => {
    const userId = req.user.id;
    let cart;
    try {
        cart = await Cart.find({ userid: userId });
        console.log(cart[0].id);
        console.log(cart);
        if (!cart) {
            console.log("In If");
            const newCart = new Cart({
                userid: userId,
                products: req.body.products
            });
            await newCart.save();
        } else {
            await Cart.findByIdAndUpdate(cart[0].id, {
                $set: req.body
            }, { new: true });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

// Load Cart from database
exports.loadFromCart = async (req, res) => {
    try {
        const cart = await Cart.find({ userid: req.params.id });
        if (cart) {
            res.status(200).json(cart);
        } else {
            res.status(204).json("Cart does not exist for this user");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}


// exports.removeProduct = (req, res) => {
//     // res.json("Request for RemoveProductFromCart");
// }

// exports.getAllProducts = (req, res) => {
// }

// exports.updateProductQuantity = async (req, res) => {
//     const cart = await Cart.findOne({ userid: req.user.id }, { _id: 1 })
//     console.log(cart._id);
//     try {
//         Cart.findByIdAndUpdate(cart._id, {
//             $set: req.body
//         }, { new: true });
//     } catch (error) {
//     }
// }

