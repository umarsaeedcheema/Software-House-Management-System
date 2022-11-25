const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//use .env file
require("dotenv").config();
app.use(cors());
//parsing data
app.use(express.json());

//create connection
const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

//connecting to db
connection.connect((err) => {
  if (err) console.log("Error connecting to Db");
  console.log("Connection established");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

//HR creating a new employee
const addEmployeeRouter = require("./routes/AddEmployeeRoute");
app.use("/signup", addEmployeeRouter);

const loginEmployeeRouter = require("./routes/LoginEmployeeRoute");
app.use("/login", loginEmployeeRouter);
// app.post("/signup", (req, res) => {
//   console.log(req.body);
//   res.json(req.body);
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;
//   connection.query(
//     {
//       sql: "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
//       values: [name, email, password],
//       timeout: 40000, //40s
//     },
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(result);
//       }
//     }
//   );
// });
