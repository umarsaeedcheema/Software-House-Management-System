const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
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
  // res.json(req.body);

  const email = req.body.email;
  const password = req.body.password;
  connection.query("SELECT * FROM account_info WHERE email_address=?;", [email], (err_1, rows) => {
    if (err_1 || rows.length === 0) {
      res.send({ statusText: "Wrong password"});
    }
    console.log(rows);
    const isValid = bcrypt.compareSync(password, rows[0].password);

    if (!isValid) {
      console.log("Wrong password")
      res.send({ statusText: "Wrong password"});
    } else {
      connection.query(
        "SELECT first_name, last_name, id, employees.designation FROM employees JOIN account_info ON account_info.employee_id=employees.id WHERE account_info.email_address = ?",
        [email],
        (err, result) => {
          if (result.length > 0) {
            console.log("result", result);
            console.log(result[0].designation);
            connection.query(`INSERT INTO attendance (employee_id) VALUES (${result[0].id})`)
            res.send({ name: result[0].first_name + " " + result[0].last_name, id: result[0].id ,designation: result[0].designation, statusText: "OK"});
          } else {
            console.log("No such user");
          }
        });
    }    
  });
});

module.exports = router;
//
