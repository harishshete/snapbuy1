const mongoose = require('mongoose');

const ShoppersSchema = new mongoose.Schema({
    
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: Number,
        required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },

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
    role : {
        type: String,
        default: "shopper",
    }   

}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model('Shopper', ShoppersSchema);
