// Import tables
const tables = require("../tables");

// Get all post
const browse = async (req, res) => {
  try {
    const getPost = await tables.post.readAll();
    res.json(getPost).status(200);
  } catch (err) {
    console.error(err);
  }
};

// Get a post by id
const read = async (req, res) => {
  const { id } = req.params;
  try {
    const getPostId = await tables.post.read(parseInt(id, 10));
    if (getPostId) {
      res.json(getPostId).status(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
  }
};

// Put post by id
const edit = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const editPost = await tables.post.update(title, content, parseInt(id, 10));
    if (editPost) {
      res.json(editPost).status(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
  }
};

// Add post
const add = async (req, res, next) => {
  const { title, content, userId } = req.body;
  try {
    const insertId = await tables.post.create(title, content, userId);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// Delete post by id
const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const deletePost = await tables.post.delete(parseInt(id, 10));
    if (deletePost) {
      res.json("post has been succefully deleted").status(200);
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
