require('dotenv/config'); // Ensure this is at the very top

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Database Connection
async function main ()  {
    try {
        await mongoose.connect(mongodb+srv://admin:admin@123@healthbuddy.zzpqo.mongodb.net/?retryWrites=true&w=majority&appName=healthbuddy);
        console.log("Database connection is ready");

        // Server
        const port = 4000;
        app.listen(port, () => {
            console.log(`App is running on port ${port}`);
        });
    } catch (err) {
        console.error("Failed to connect to the database", err);
    }
}

main();