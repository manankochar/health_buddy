

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4000;

// Database Connection
async function main ()  {
    try {
        await mongoose.connect("mongodb+srv://admin:admin%40123@healthbuddy.zzpqo.mongodb.net/?retryWrites=true&w=majority&appName=healthbuddy");

        console.log("Database connection is ready");

        
        app.listen(port, () => {
            console.log(`App is running on port ${port}`);
        });
    } catch (err) {
        console.error("Failed to connect to the database", err);
    }
}

main();