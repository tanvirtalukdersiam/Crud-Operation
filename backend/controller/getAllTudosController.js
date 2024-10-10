const todoSchema = require("../model/todoSchema");

async function getAllTudo(req, res) {
  let todo = await todoSchema.find({});
  res.send(todo);
}

module.exports = getAllTudo;
