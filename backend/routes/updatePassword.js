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

router.post('/', function(req, res) {
  console.log(req.body);
  const response = {
    success: false,
    errormessage: ''
  };

  if (req.body.newpassword != req.body.newpasswordconfirmation) {
    response.errormessage += 'New passwords don\'t match.';
  }
  // console.log(db);
  // `SELECT password FROM software_management.account_info WHERE employee_id=${req.body.employee.id}`
  connection.query("SELECT * FROM account_info WHERE employee_id=?;", [req.body.employee_id], (err, rows) => {
    const isValid = bcrypt.compareSync(req.body.oldpassword, rows[0].password);
      
    if (isValid) {
      console.log("TRUE")
      response.success = true;
      const hash = bcrypt.hashSync(req.body.newpassword, 8);
      connection.query(`UPDATE account_info SET password=? WHERE employee_id=?`, [hash, req.body.employee_id])
      res.send(JSON.stringify(response));
    } else {
      console.log("FALSE");
      response.errormessage += 'Wrong password. ';
      res.send(JSON.stringify(response));        
    }
  })
})

module.exports = router;