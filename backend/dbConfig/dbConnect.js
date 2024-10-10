const mongoose = require("mongoose");

function dbConnect() {
  mongoose
    .connect(
      "mongodb+srv://crod:crod@cluster0.ocg1e0g.mongodb.net/crod?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("Database is connected");
    });
}

module.exports = dbConnect;
