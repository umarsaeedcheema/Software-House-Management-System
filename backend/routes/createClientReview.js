var express = require('express');
const db = require('../database');
var router = express.Router();
console.log("here")
router.post("/" , function (req,res)  {
    console.log("body is: ", req.body)
  
    db.query("INSERT INTO soft_management.client_reviews (client_id, project_id, content, submitted_by) VALUES (?,?,?,?)", 
    [req.body.client_id, req.body.project_id,req.body.content, req.body.submitted_by], function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
})

module.exports = router
