const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
    {
        userid: { type: String, required: true },
        products: [
            {
                productid: {
                    type: String
                },
                title: {
                    type: String,
                },
                color: { type: String },
                size: { type: String },
                price: {type : Number},
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ],
        amount: { type: Number, required: true },
        address: {

            country: {
                type: String,
                required: true
            },
            State: {
                type: String,
                required: true
            },
            city : {
                type : String,
                required: true
            },
            street: {
                type: String,
                required: true
            },
            zip:{
                type: Number,
                required: true
            }
        }, 
        status: { type: String, default: "Pending" },
    }, { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);



