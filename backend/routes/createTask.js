var express = require('express');
const db = require('../database');
var router = express.Router();

router.post("/" , function (req,res)  {
    const { task, due_date, assigned_to, project_id } = req.body;
    const status = "In Progress";
    db.query('INSERT INTO tasks (task, due_date, assigned_to, project_id, status) VALUES (?, ?, ?, ?, ?)' , [task, due_date, assigned_to, project_id, status], function (err, result, fields) {      
      if (err) throw err;
      res.send({ success: "Project created!"})
    });
})

module.exports = router