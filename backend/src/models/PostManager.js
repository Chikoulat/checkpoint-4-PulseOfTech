const AbstractManager = require("./AbstractManager");

class PostManager extends AbstractManager {
  constructor() {
    super({ table: "post" });
  }

  // Get all posts
  async readAll() {
    const [result] = await this.database.query(
      `SELECT post.*, user.username FROM ${this.table} INNER JOIN user ON ${this.table}.user_id = user.id`
    );
    return result;
  }

  // Get a post by id
  async read(id) {
    const [result] = await this.database.query(
      `SELECT post.*, user.username FROM ${this.table} INNER JOIN user ON ${this.table}.user_id = user.id WHERE ${this.table}.id = ?`,
      [id]
    );
    return result;
  }

  // Put post by id
  async update(title, content, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, content = ? WHERE id = ?`,
      [title, content, id]
    );
    return result.affectedRows > 0;
  }

  // Add post
  async create(title, content) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, content) VALUES (?, ?)`,
      [title, content]
    );
    return result.insertId;
  }

  // Delete post by id
  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE user_id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = PostManager;
