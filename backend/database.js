const mysql = require('mysql');
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const connection = mysql.createPool(
    {
        host:process.env.host,
        user: process.env.user,
        password:process.env.password,
        database:process.env.database
    }
);

connection.getConnection((err) => {
  if (err) console.log("Error connecting to Db");
  console.log("Connection established");
});

module.exports = connection;