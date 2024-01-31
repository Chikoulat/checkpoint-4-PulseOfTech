const express = require("express");

const router = express.Router();

const { login } = require("../controllers/authController");
const { validateUserData } = require("../middlewares/validateUser");
const { verifyToken } = require("../middlewares/token");

router.post("/login", validateUserData, verifyToken, login);

module.exports = router;
