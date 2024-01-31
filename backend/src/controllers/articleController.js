// Import tables
const tables = require("../tables");

// Get all articles
const browse = async (req, res) => {
  try {
    const getArticle = await tables.article.readAll();
    res.json(getArticle).status(200);
  } catch (err) {
    console.error(err);
  }
};

// Get a article by id
const read = async (req, res) => {
  const { id } = req.params;
  try {
    const getArticleId = await tables.article.read(parseInt(id, 10));
    if (getArticleId) {
      res.json(getArticleId).status(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
  }
};

// Put article by id
const edit = async (req, res) => {
  const { id } = req.params;
  const { title, image, content, author, source } = req.body;
  try {
    const editArticle = await tables.article.update(
      title,
      image,
      content,
      author,
      source,
      parseInt(id, 10)
    );
    if (editArticle) {
      res.json(editArticle).status(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
  }
};

// Add article
const add = async (req, res, next) => {
  const { title, image, content, author, source } = req.body;

  try {
    const insertId = await tables.article.create(
      title,
      image,
      content,
      author,
      source
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// Delete article by id
const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteArtcile = await tables.article.delete(parseInt(id, 10));
    if (deleteArtcile) {
      res.json("Artcile has been succefully deleted").status(200);
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
