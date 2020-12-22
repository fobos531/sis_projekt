const mysql = require("mysql2/promise");

const init = async () => {
  const mysqlConnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
  return mysqlConnection;
};

module.exports = init;
