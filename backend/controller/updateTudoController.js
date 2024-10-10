const todoSchema = require("../model/todoSchema");

async function updateTudo(req, res) {
  let { tudo, id } = req.body;
  const updateTudo = await todoSchema.findByIdAndUpdate(
    id,
    { tudo: tudo },
    {
      new: true,
    }
  );

  res.send(tudo);
}

module.exports = updateTudo;
