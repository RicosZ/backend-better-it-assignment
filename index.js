const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require("cors");
const analyticsRoute = require('./src/routes/analytics.route');
const wordRoute = require('./src/routes/words.route');
const PORT = process.env.PORT

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1/analytics',analyticsRoute);
app.use('/api/v1/word',wordRoute);

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database Connected');
}, (error) => {
    console.log(error.message);
});

const server = app.listen(PORT,()=>{
    console.log('Server run on PORT:',PORT);
});