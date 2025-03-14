exports.subscribe = async (req,res) => {
    
    try{
        let user = req.session.user;
        if(user){
            user.isSubscribed == true;
            await user.save();
        }
        res.redirect("/photos");
    }
    catch (err) {
        console.log("Error with user subscription service ", err)
    }
}