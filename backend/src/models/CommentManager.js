const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "comment" });
  }

  // Get all comments
  async readAll() {
    const [result] = await this.database.query(
      `SELECT comment.*, user.username, user.profile_picture FROM ${this.table} INNER JOIN user ON comment.user_id = user.id`
    );
    return result;
  }

  // Get an comment by id
  async read(id) {
    const [result] = await this.database.query(
      `SELECT comment.*, user.username, user.profile_picture, post.title FROM ${this.table} INNER JOIN user ON comment.user_id = user.id INNER JOIN post ON post.id = ${this.table}.post_id WHERE post_id = ?`,
      [id]
    );
    return result;
  }

  // Put comment by id
  async update(content, userId, postId, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET content = ?, user_id = ?, post_id = ? WHERE id = ?`,
      [content, userId, postId, id]
    );
    return result.affectedRows > 0;
  }

  // Add comment
  async create(content, userId, postId) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (content, user_id, post_id) VALUES (?,?,?)`,
      [content, userId, postId]
    );
    return result.insertId;
  }

  // Delete comment by id
  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = CommentManager;
