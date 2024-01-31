const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../controllers/userController");

const { hash } = require("../middlewares/hashpassword");
const { validateUserData } = require("../middlewares/validateUser");
const { verifyToken } = require("../middlewares/token");

// Get
router.get("/", browse);
router.get("/:id", verifyToken, read);

// Put
router.put("/:id", validateUserData, hash, edit);

// Post
router.post("/", validateUserData, hash, add);

// Delete
router.delete("/:id", destroy);

module.exports = router;
