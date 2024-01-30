const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/", itemControllers.browse);
router.get("/:id", itemControllers.read);
/* ************************************************************************* */
router.post("/", itemControllers.add);
router.use("/api", router);

module.exports = router;
