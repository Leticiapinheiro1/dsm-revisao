module.exports = {
  HOST: process.env.MYSQL_HOST || "ct-db-mysql",
  USER: process.env.MYSQL_USER || "root",
  PASSWORD:  process.env.MYSQL_PASSWORD || "DSM@123",
  DB: process.env.MYSQL_DATABASE || "testdb"
};