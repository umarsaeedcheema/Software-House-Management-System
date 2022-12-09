const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config({ path: ".env" });
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// //create connection
const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});
// //connecting to db
connection.connect((err) => {
  if (err) console.log("Error connecting to Db");
  console.log("Connection established");
});
// // parsing data
router.use(express.json());

router.get("/", (req, res) => {
  connection.query("SELECT * FROM projects", (err, result) => {
    if (err) {
        // console.log("line 28")
      console.log(err);
    } else {
      console.log("Success");
      console.log(result);
      res.send(result);
    }
  });
});

module.exports = router;