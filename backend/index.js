const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//use .env file
require("dotenv").config();

//parsing data
app.use(express.json());

//Cors Configuration - Start
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested, Content-Type, Accept Authorization"
//   )
//   if (req.method === "OPTIONS") {
//     res.header(
//       "Access-Control-Allow-Methods",
//       "POST, PUT, PATCH, GET, DELETE"
//     )
//     return res.status(200).json({})
//   }
//   next()
// })
//Cors Configuration - End
app.use(
    cors({
        origin: "https://softwarehousemanagement.herokuapp.com", 
        credentials: true,
    })
);
//create connection
const connection = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

//connecting to db
connection.getConnection((err) => {
  if (err) console.log("Error connecting to Db");
  console.log("Connection established");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

const createClientReview = require("./routes/createClientReview");
const CreateClientProfile = require("./routes/createClientProfile");

const viewClientProfile = require("./routes/viewClientProfile");

const loginEmployeeRouter = require("./routes/LoginEmployeeRoute");
app.use("/login", loginEmployeeRouter);

const raisePrivilegeRouter = require("./routes/RaisePrivilegeRoute");
app.use("/raise-privilege", raisePrivilegeRouter);

const createEmployeeReviewRouter = require("./routes/CreateEmployeeReviewRoute");
app.use("/create-employee-review", createEmployeeReviewRouter);

const HRSignUp = require("./routes/HRSignUp");
app.use("/signup", HRSignUp);

//HR creating a new employee
const addEmployee = require("./routes/addEmployee");
app.use("/addEmployee", addEmployee);

//HR viewing all employees
const viewEmployee = require("./routes/viewEmployee");
app.use("/viewEmployee", viewEmployee);

//delete and employee
const deleteEmployee = require("./routes/deleteEmployeeRoute");
app.use("/deleteEmployee", deleteEmployee);

//update Password
const updatePassword = require("./routes/updatePassword");
app.use("/updatepassword", updatePassword);

app.use("/createclientreview", createClientReview);

app.use("/createclientprofile", CreateClientProfile);
app.use("/viewclientprofile", viewClientProfile);

const updateProject = require("./routes/updateProject");
app.use("/updateProject", updateProject);

const createProject = require("./routes/createProject");
app.use("/createproject", createProject);

const viewProjectSE = require("./routes/viewProjectSE");
app.use("/viewProjectSE", viewProjectSE);

const viewProject = require("./routes/viewProject");
app.use("/viewProject", viewProject);

const createTask = require("./routes/createTask");
app.use("/createTask", createTask);

// app.use(cors());
module.exports = app;
