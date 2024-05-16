const express = require("express");
const router = express.Router();

const {
  postUser,
  getAllUsers,
  deleteUser,
  getUserById,
} = require("../controllers/users.controller");

router.post("/", postUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);

module.exports = router;
