// Import tables
const tables = require("../tables");

// Get all comments
const browse = async (req, res) => {
  try {
    const getComment = await tables.comment.readAll();
    res.json(getComment).status(200);
  } catch (err) {
    console.error(err);
  }
};

// Get a comment by id
const read = async (req, res) => {
  const { id } = req.params;
  try {
    const getCommentId = await tables.comment.read(parseInt(id, 10));
    if (getCommentId) {
      res.json(getCommentId).status(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
  }
};

// Put comment by id
const edit = async (req, res) => {
  const { id } = req.params;
  const { content, userId, postId } = req.body;
  try {
    const editComment = await tables.comment.update(
      content,
      userId,
      postId,
      parseInt(id, 10)
    );
    if (editComment) {
      res.json(editComment).status(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
  }
};

// Add comment
const add = async (req, res, next) => {
  const { content, userId, postId } = req.body;

  try {
    const insertId = await tables.comment.create(content, userId, postId);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// Delete comment by id
const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteComment = await tables.comment.delete(parseInt(id, 10));
    if (deleteComment) {
      res.json("Content has been succefully deleted").status(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
  }
};

// Export
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
