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

// Get
router.get("/", browse);
router.get("/:id", read);

// Put
router.put("/:id", validateUserData, hash, edit);

// Post
router.post("/", hash, add);

// Delete
router.delete("/:id", destroy);

module.exports = router;
