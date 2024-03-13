const express = require("express");
const router = express.Router();

const { postUser, getAllUsers } = require("../controllers/users.controller");

router.post("/", postUser);
router.get("/", getAllUsers);

module.exports = router;
