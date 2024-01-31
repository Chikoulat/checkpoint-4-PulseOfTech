const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "comment" });
  }

  // Get all comments
  async readAll() {
    const [result] = await this.database.query(
      `SELECT comment.*, user.username FROM ${this.table} INNER JOIN user ON comment.user_id = user.id`
    );
    return result;
  }

  // Get an comment by id
  async read(id) {
    const [result] = await this.database.query(
      `SELECT comment.*, user.username FROM ${this.table} INNER JOIN user ON comment.user_id = user.id WHERE user.id = ?`,
      [id]
    );
    return result;
  }

  // Put comment by id
  async update(content, userId, forumId, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET content = ?, user_id = ?, forum_id = ? WHERE id = ?`,
      [content, userId, forumId, id]
    );
    return result.affectedRows > 0;
  }

  // Add comment
  async create(content, userId, forumId) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (content, user_id, forum_id) VALUES (?,?,?)`,
      [content, userId, forumId]
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
