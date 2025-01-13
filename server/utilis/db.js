const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const connectDB = async() => {
    try {
        await mongoose.connect(URI);
        console.log("Connection successful to DB");
    } catch (error) {
        console.log(`connection failed : ${error}`);
        process.exit(0);
    }
};

module.exports = connectDB;