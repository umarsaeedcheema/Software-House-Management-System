var express = require('express');
const db = require('../database');
var router = express.Router();

router.post("/" , function (req,res)  {
    console.log("body is: ", req.body)
    db.query( `INSERT IGNORE INTO projects (name, start_time, end_time, revenue, client_id, assigned_to_pm , status) VALUES ('${req.body.form_name}', '${req.body.date_start}', '${req.body.date_end}', ${req.body.revenue}, ${req.body.client_id}, '${req.body.assigned_to}' , 'in progress')`, function (err, result, fields) {      
      if (err) throw err;
      console.log(result);
    });
})

module.exports = router