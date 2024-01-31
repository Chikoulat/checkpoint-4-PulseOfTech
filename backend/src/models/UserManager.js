const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  // Get all users
  async readAll() {
    const [result] = await this.database.query(
      `SELECT user.username, user.email, user.password ,user.profile_picture AS profilePicture, article.title, article.image FROM ${this.table} INNER JOIN user_article ON user.id = user_article.user_id INNER JOIN article ON article.id = user_article.article_id`
    );
    return result;
  }

  // Get a user by id
  async read(id) {
    const [result] = await this.database.query(
      `SELECT user.username, user.email, user.password ,user.profile_picture AS profilePicture, article.title, article.image FROM ${this.table} INNER JOIN user_article ON user.id = user_article.user_id INNER JOIN article ON article.id = user_article.article_id WHERE ${this.table}.id = ?`,
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
      `select email, password from ${this.table} where email = ?`,
      [email]
    );
    return result;
  }
}

module.exports = UserManager;
