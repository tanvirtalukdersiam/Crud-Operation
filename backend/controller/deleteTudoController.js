const todoSchema = require("../model/todoSchema");

async function deleteTudoController(req, res) {
  let tudodata = await todoSchema.findByIdAndDelete(req.body.id);

  console.log(tudodata);
  // console.log(req.body.id);
  // res.send("ami delete hbo");
}

module.exports = deleteTudoController;
