const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  // Get all users
  async readAll() {
    const [result] = await this.database.query(
      `SELECT user.username, user.email, user.password ,user.profile_picture AS profilePicture, article.title, article.image FROM ${this.table} LEFT JOIN user_article ON user.id = user_article.user_id LEFT JOIN article ON article.id = user_article.article_id`
    );
    return result;
  }

  // Get a user by id
  async read(id) {
    const [result] = await this.database.query(
      `SELECT user.username, user.email, user.password ,user.profile_picture AS profilePicture, article.id, article.title AS articleTitle, article.image, post.title AS postTitle, comment.* FROM ${this.table} LEFT JOIN user_article ON user.id = user_article.user_id LEFT JOIN article ON article.id = user_article.article_id LEFT JOIN comment ON ${this.table}.id = comment.user_id INNER JOIN post ON  ${this.table}.id = post.user_id WHERE ${this.table}.id = ?`,
      [id]
    );
    return result;
  }

  // Put user by id
  async update(username, email, password, profilePicture, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET  username = ?, email = ?, password = ?, profile_picture = ? WHERE id = ?`,
      [username, email, password, profilePicture, id]
    );
    return result.affectedRows > 0;
  }

  // Add user
  async create(username, email, password, profilePicture) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (username, email, password, profile_picture) VALUES (?, ?, ?, ?)`,
      [username, email, password, profilePicture]
    );
    return result.insertId;
  }

  // Delete user by id
  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }

  // Get user by email
  async readByEmail(email) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );
    return result[0];
  }
}

module.exports = UserManager;
