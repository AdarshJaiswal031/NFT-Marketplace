const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already Connected !!");
  }

  mongoose
    .connect(process.env.DATABASE_URI)
    .then((res) => {
      console.log("Connect Successfully ");
    })
    .catch((error) => {
      console.log("Error occurred while connecting !!");
    });
};

module.exports = { connectDB };
