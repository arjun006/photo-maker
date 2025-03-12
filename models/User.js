const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    usernmae: {type: String, required: true, unique: true},
    email: {type:String, required:true, unique: true},
    password: {type: String, required: true},
    isSubscribed: {type: Boolean, default: false},
    freeViews: {type: Number, default: 5}
});

module.exports = mongoose,model("User", UserSchema);