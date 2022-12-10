const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config({ path: ".env" });
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// //create connection
const connection = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});
// //connecting to db
connection.getConnection((err) => {
  if (err) console.log("Error connecting to Db");
  console.log("Connection established");
});
// // parsing data
router.use(express.json());

router.delete("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
  const id = req.body.id;
  connection.query(
    {
      sql: "DELETE FROM employees WHERE id = ?",
      values: [id],
      timeout: 40000, //40s
    },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Employee deleted successfully");
        console.log(result);
      }
    }
  );
});

module.exports = router;
//
