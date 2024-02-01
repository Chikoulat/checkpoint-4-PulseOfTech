const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../controllers/commentController");

const { verifyToken } = require("../middlewares/token");

// Get
router.get("/", browse);
router.get("/:id", verifyToken, read);

// Put
router.put("/:id", verifyToken, edit);

// Post
router.post("/", verifyToken, add);

// Delete
router.delete("/:id", verifyToken, destroy);

module.exports = router;
