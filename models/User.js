const db = require("../config/db");

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;

    let sql = `
    INSERT INTO users(
      name,
      email,
      password,
      created_at
    )
    VALUES(
      '${this.name}',
      '${this.email}',
      '${this.password}',
      '${createdAtDate}'
    )
    `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM users;";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM users WHERE id = ${id};`;

    return db.execute(sql);
  }
}

module.exports = User;
