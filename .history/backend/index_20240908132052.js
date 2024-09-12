require('dotenv/config'); // Ensure this is at the very top

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
// const authjwt = require("./jwt")

// Middleware
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use(authjwt());

// Routes

// Database Connection
async function main ()  {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connection is ready");

        // Server
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`App is running on port ${port}`);
        });
    } catch (err) {
        console.error("Failed to connect to the database", err);
    }
}

main();