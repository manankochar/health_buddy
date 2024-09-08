require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 4000;
const uri = process.env.MONGO_URL;

const app = express();
app.use(express.json());

const userRoute = require("./routes/User")
app.use('/api/user',userRoute)


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
