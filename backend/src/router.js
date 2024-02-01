const express = require("express");

const router = express.Router();

// Imports
const userRouter = require("./routers/userRouter");
const postRouter = require("./routers/postRouter");
const articleRouter = require("./routers/articleRouter");
const commentRouter = require("./routers/commentRouter");
const authRouter = require("./routers/authRouter");

// Routes
router.use("/user", userRouter);
router.use("/forum", postRouter);
router.use("/article", articleRouter);
router.use("/comment", commentRouter);
router.use("/", authRouter);

module.exports = router;
