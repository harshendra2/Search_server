const mongoose = require("mongoose");
require('dotenv').config();

const dbConnect = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true
    };

    mongoose.connect('mongodb+srv://harsendraraj20:gtcJpjF1hebSkrtK@cluster0.8rpiewk.mongodb.net/', connectionParams);

    mongoose.connection.on("connected", () => {
        console.log("Connected to database successfully");
    });

    mongoose.connection.on("error", (err) => {
        console.log("Error while connecting to database: " + err);
    });

    mongoose.connection.on("disconnected", () => {
        console.log("Mongodb connection disconnected");
    });
};

module.exports = dbConnect;

