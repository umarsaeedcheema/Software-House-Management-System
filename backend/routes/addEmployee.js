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
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const designation = req.body.designation;
  const salary = req.body.salary;
  const hired_on = req.body.hired_date;

  connection.query(
    {
      sql: "INSERT INTO employee (first_name, last_name, designation, salary, hired_on) VALUES (?, ?, ?,?,?)",
      values: [first_name, last_name, designation, salary, hired_on],
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
});
module.exports = router;
//
