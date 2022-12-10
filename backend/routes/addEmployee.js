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

router.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const designation = req.body.designation;
  const salary = req.body.salary;
  const hired_on = req.body.hired_date;
  var privilege_level = 0;
  if (designation == "SE-1") {
    privilege_level = 1; // by default sets SE-1 privilege to 1
  } else if (designation == "Senior SE") {
    privilege_level = 2; // by default sets Senior SE privilege to 1
  }

  connection.query(
    {
      sql: "INSERT INTO employees (first_name, last_name,email, designation, salary, hired_on) VALUES (?, ?,?, ?,?,?)",
      values: [first_name, last_name, email, designation, salary, hired_on],
      timeout: 40000, //40s
    },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );

  // query for inserting into privilege level
  connection.query(
    {
      // this uses the ID of employee insertion query as primary key for employee id here
      sql: "INSERT INTO privilege_level (employee_id, level) VALUES (LAST_INSERT_ID() , ?)",
      values: [privilege_level],
      timeout: 40000, //40s
    },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );

  // query for inserting into accounts_info
});

module.exports = router;
//
