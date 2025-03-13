const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/User");
const Photo = require("../models/Photo");

dotenv.config();
mongoose.connect(process.env.MONGO_URI)

const seedData = async () => {
    try {
        await User.deleteMany({});
        await Photo.deleteMany({});

        const users = await User.insertMany([
            {username:"guest",email:"guest@example.com", password:"123456", isSubscribed:false, freeViews:5},
            {username:"premiumUser",email:"premiumUser@example.com", password:"123456789", isSubscribed:true, freeViews:5},
        ]);
        
        const photos = await Photo.insertMany([
            {title:"my dog", url: "www.examplephoto.com", premium: false},
            {title:"taj mahal", url: "www.examplephoto.com", premium: true}
        ]);

        console.log("**Database Seeded**");
        process.exit(1);
    } catch(err){
        console.log("Error seeding the database", err);
        process.exit(1)
    }
};

seedData();