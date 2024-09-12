require('dotenv/config'); // Ensure this is at the very top

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Database Connection
async function main ()  {
    try {
        await mongoose.connect("");
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