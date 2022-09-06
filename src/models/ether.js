const mongoose = require("mongoose");

const etherSchema = new mongoose.Schema({
    ethereum : Object   
}, {timestamps : true});

module.exports = mongoose.model("newEther",etherSchema);