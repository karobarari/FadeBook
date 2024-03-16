const express = require("express");
const router = express.Router();

const { postUser, getAllUsers, getOneUser, deleteUser } = require("../controllers/users.controller");

router.post("/", postUser);
router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);


module.exports = router;
