const mongoose = require("mongoose");
const { Schema } = mongoose;
const todoSchema = new Schema({
  tudo: {
    type: String,
  },
});

module.exports = mongoose.model("tudo", todoSchema);
