const mongoose = require('mongoose');

// const URI = "mongodb://127.0.0.1:27017/mern_admin";

const URI = process.env.MONGODB_URI
const connectDB = async () =>{
    try {
        await mongoose.connect(URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(0); // Exit the process with failure
        
    }
};

module.exports = connectDB;