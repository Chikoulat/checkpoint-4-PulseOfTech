const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../controllers/commentController");

// Get
router.get("/", browse);
router.get("/:id", read);

// Put
router.put("/:id", edit);

// Post
router.post("/", add);

// Delete
router.delete("/:id", destroy);

module.exports = router;
