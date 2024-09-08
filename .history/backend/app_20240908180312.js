require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

const app = express();
app.use(express.json());

const userRoute = require("./modals/user")
console.lo


mongoose.connect(uri)
   .then(() => {
       console.log('Connected to MongoDB');
       app.listen(PORT, () => {
           console.log(`Server started on port ${PORT}`);
       });
   })
   .catch(err => {
       console.error('MongoDB connection error:', err);
       process.exit(1); 
   });
