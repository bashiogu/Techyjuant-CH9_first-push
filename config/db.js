
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const dbUrl = process.env.DB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log('connected to mongoDB');
    } catch (error) {
        console.log(error);
    };
}

module.exports = connectDB;