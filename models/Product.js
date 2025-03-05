const mongoose = require("mongoose");



const ProductSchema = mongoose.Schema(
    {
        sellerid: {
            type: String,
            required: true
        },
        title :{
            type: String,
        },
        summary : {
            type: String
        },
        category : {
            type: String
        },
        shop :{
            type: String
        },
        instock : {
            type: Boolean
        },
        size : [],
        color : [],
        price : {
            type: Number
        },
        image : {
            type: String,
            require: true
        }
    }, {timestamps: true}
);

module.exports = mongoose.model("Product", ProductSchema);



