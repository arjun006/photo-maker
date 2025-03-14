const brcypt = require("bcryptjs");
const User = require("../models/User");

exports.register = async (req, res) => {
    try{
        const {username, email, password} = req.body;
        const salt = await bcrypt.genSalt(password, 10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = new User({username, email, password: hashedPassword});
        await user.save();
        req.session.user = user;
        res.redirect("/dashboard")
    } catch (err){
        console.log("Error saving password ", err)
    }
}

exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const validatePassword = await bcrypt.compare(password, user.password);
        if(!user || !validatePassword) {
            return res.send("Invalid credentials");
        }
        req.session.user = user
        res.redirect("/dashboard")
    } catch(err){
        console.log("Error logging in user ", err);
    }
    
}