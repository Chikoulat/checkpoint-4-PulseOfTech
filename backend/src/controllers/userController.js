// Import tables
const tables = require("../tables");

// Get all users
const browse = async (req, res) => {
  try {
    const getUser = await tables.user.readAll();
    res.json(getUser).status(200);
  } catch (err) {
    console.error(err);
  }
};

// Get a user by id
const read = async (req, res) => {
  const { id } = req.params;
  try {
    const getUserId = await tables.user.read(parseInt(id, 10));
    if (getUserId) {
      res.json(getUserId).status(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
  }
};

// Put user by id
const edit = async (req, res) => {
  const { id } = req.params;
  const { username, email, password, profilePicture } = req.body;
  try {
    const editUser = await tables.user.update(
      username,
      email,
      password,
      profilePicture,
      parseInt(id, 10)
    );
    if (editUser) {
      res.json(editUser).status(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
  }
};

// Add user
const add = async (req, res, next) => {
  const { username, email, password, profilePicture } = req.body;

  try {
    const insertId = await tables.user.create(
      username,
      email,
      password,
      profilePicture
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// Delete user by id
const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await tables.user.delete(parseInt(id, 10));
    if (deleteUser) {
      res.json("User has been succefully deleted").status(200);
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
