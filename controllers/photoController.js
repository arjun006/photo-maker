const Photo = require('../models/Photo');

exports.getPhotos = async (req, res) => {
    let user = req.session.user;
    let photos = await Photo.find({});

    if(!user){
        photos = photos.slice(0,3);
    }
    else if (!user.isSubscribed && user.freeViews >0){
        user.freeViews -= 1;
        await user.save();
    }
    else if (!user.isSubscribed) {
        return res.redirect("premium-paywall");
    }

    res.render("home", {photos, user})
};
