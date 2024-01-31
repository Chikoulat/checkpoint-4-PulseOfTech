const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  constructor() {
    super({ table: "article" });
  }

  // Get all articles
  async readAll() {
    const [result] = await this.database.query(`select * from ${this.table}`);
    return result;
  }

  // Get an article by id
  async read(id) {
    const [result] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return result;
  }

  // Put article by id
  async update(title, image, content, author, source, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET  title = ?, image = ?, content = ?, author = ?, source = ? where id = ?`,
      [title, image, content, author, source, id]
    );
    return result.affectedRows > 0;
  }

  // Add article
  async create(title, image, content, author, source) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, image, content, author, source) VALUES (?, ?, ?, ?, ?)`,
      [title, image, content, author, source]
    );
    return result.insertId;
  }

  // Delete article by id
  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = ArticleManager;
