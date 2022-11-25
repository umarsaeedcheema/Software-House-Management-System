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
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  connection.query(
    {
      sql: `SELECT * FROM users WHERE users.name='${name}' AND users.email='${email} AND users.password='${password}`,
//       values: [name, email, password],
      timeout: 40000, //40s
    },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("client has successsfully logged in");
        console.log(result);
      }
    }
  );
});
module.exports = router;
//
