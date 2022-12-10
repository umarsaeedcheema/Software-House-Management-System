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
  connection.query(`SELECT * FROM projects WHERE assigned_to_pm=${req.body.id}`, (err, projects) => {
    connection.query(`SELECT task, due_date, assigned_to, tasks.status, project_id FROM tasks JOIN projects ON projects.id=tasks.project_id WHERE assigned_to=${req.body.id};`, (err_2, tasks) => {
      if (err) {
          // console.log("line 28")
        console.log(err);
      } else {
        console.log("Success");
        // console.log("tasks", tasks);
        res.send({
          projects: projects,
          tasks: tasks
        });
      }
    })
  });
});

router.post('/markprojectcomplete', function(req, res) {
  const project_id = req.body.project_id
  connection.query(`UPDATE projects SET status='Completed' WHERE id=${project_id};`)
  res.json("Success");
});

// router.post('/marktaskcomplete', function(req, res) {
//   const task_id = req.body.task_id
//   connection.query(`UPDATE tasks SET status='Completed' WHERE id=${task_id};`)
//   res.json("Success");
// });

module.exports = router;