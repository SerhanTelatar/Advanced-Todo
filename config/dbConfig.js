const mongoose = require("mongoose")

require('dotenv').config();

const connectionDataBase = async (req,res) => {
    mongoose 
    .connect("mongodb://localhost:27017/test", 
    {useNewUrlParser: true})
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err))
}

module.exports = connectionDataBase


