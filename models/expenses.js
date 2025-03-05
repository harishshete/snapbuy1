const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    expensename: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    date: {
        type: String
    },
    ammount: {
        type: Number,
        required: true
    },

}, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports = mongoose.model('Expenses', ExpenseSchema);
