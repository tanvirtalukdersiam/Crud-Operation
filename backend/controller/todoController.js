const todoSchema = require("../model/todoSchema");

function todoController(req, res) {
  let { tudo } = req.body;

  console.log(req.body);

  if (!tudo) {
    res.status(401).send("task is required");
  } else {
    let todoData = new todoSchema({
      tudo: tudo,
    });
    try {
      todoData.save();
    } catch (error) {
      console.log(error);
    }
    res.send(todoData);
  }
}

module.exports = todoController;
