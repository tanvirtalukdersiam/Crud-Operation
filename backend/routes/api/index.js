const express = require("express");
const todoController = require("../../controller/todoController");
const getAllTudo = require("../../controller/getallTudosController");
const deleteTudoController = require("../../controller/deleteTudoController");
const updateTudo = require("../../controller/updateTudoController");

const router = express.Router();

router.post("/todo", todoController);
router.get("/alltodo", getAllTudo);
router.delete("/delete", deleteTudoController);
router.put("/updateTudo", updateTudo);

module.exports = router;
