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
  const content = req.body.content;
  const reviewed_by = req.body.reviewed_by;

  let date_ob = new Date();

  // current date
  // adjust 0 before single digit date
  let date = ("0" + date_ob.getDate()).slice(-2);
  
  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  
  // current year
  let year = date_ob.getFullYear();
  
  // current hours
  let hours = date_ob.getHours();
  
  // current minutes
  let minutes = date_ob.getMinutes();
  
  // current seconds
  let seconds = date_ob.getSeconds();
  
  // saves current date & time in YYYY-MM-DD HH:MM:SS format
  const created_at = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;



  connection.query(
    {
        sql: "INSERT INTO employee_reviews (id, content, created_at, reviewed_by) VALUES (?, ?, ?, ?)",
        values: [employee_id, content, created_at, reviewed_by],
        timeout: 40000, //40s
    },
    (err, result) => {
      if (err) {
        console.log(err);
        console.log('unable to make yearly review of this employee');
      } else {
        console.log("Client's yearly review has been created");
        console.log(result);
      }
    }
  );
});
module.exports = router;
//
