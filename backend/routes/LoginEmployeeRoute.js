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
  // res.json(req.body);

  const email = req.body.email;
  connection.query(
    "SELECT designation from employees WHERE email = ?",
    [email],
    (err, result) => {
      if (result.length > 0) {
        console.log("result", result);
        console.log(result[0].designation);
        res.send({ designation: result[0].designation });
      } else {
        console.log("No such user");
      }
    }
  );
});

module.exports = router;
//
