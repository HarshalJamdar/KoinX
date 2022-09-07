const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    userAddress: {
        type: String,
        required: true
    },
    userTransaction: [Object]
}, { timestamps: true });

module.exports = mongoose.model("newTransaction", transactionSchema);