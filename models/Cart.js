const mongoose = require("mongoose");

const CartSchema = mongoose.Schema(
    {
        userid: {
            type: String,
            required: true
        },
        products: [
            {
                productid: {
                    type: String,
                    required: true
                },
                image: {
                    type: String
                },
                title: {
                    type: String
                },
                size: {
                    type: String
                },
                color: {

                    type: String
                },
                price: {
                    type: Number
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ],
        cartquantity: {
            type: Number
        },
        total: {
            type: Number
        },
    }, { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);



