const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const dbConnect = require("./dbConfig/dbConnect");
const cors = require("cors");
dbConnect();
app.use(cors());
app.use(express.json());


app.use("/", routes);

app.use("/", (req, res) => {
  res.send("Route does not match");
});

app.listen(4000, () => {
  console.log("server is running port number is 4000");
});
