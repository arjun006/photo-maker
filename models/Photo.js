const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    url:{type: String, required: true},
    premium:{type: Boolean, default: false}
});

module.exports = mongoose.model("Photo", PhotoSchema);