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

router.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
  const employee_id = req.body.employee_id;
  console.log(employee_id);
  connection.query(
    {
      sql: `UPDATE privilege_level SET level = level + 1 WHERE employee_id = '${employee_id}'`,
      timeout: 40000, //40s
    },
    (err, result) => {
      if (err) {
        console.log(err);
        console.log('no such employee in record');
      } else {
        console.log("Employee's privilege level has been raised");
        console.log(result);
      }
    }
  );
});
module.exports = router;
//
