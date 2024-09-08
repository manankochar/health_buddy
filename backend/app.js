const express = require("express");
const mongoose = require("mongoose");
const app = express();

async function main() {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@123@healthbuddy.zzpqo.mongodb.net/?retryWrites=true&w=majority&appName=healthbuddy", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        // Server
        const port = 8080;
        app.listen(port, () => {
            console.log(`App is running on port ${port}`);
        });
    } catch (err) {
        console.error("Failed to connect to the database", err);
    }
}

main();
