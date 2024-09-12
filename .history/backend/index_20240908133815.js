require('dotenv/config');

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;

// Database Connection
async function main ()  {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);

        console.log("Database connection is ready");

        
        app.listen(8080, () => {
            console.log(`App is running on port ${port}`);
        });
    } catch (err) {
        console.error("Failed to connect to the database", err);
    }
}

main();