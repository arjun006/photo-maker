const mongoose = require("mongoose");
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connection successful!")
    }
    catch (err){
        console.error("ERROR: MongoDB connection failed.", err);
        process.exit(1)
    }
}

module.exports = connectDB;