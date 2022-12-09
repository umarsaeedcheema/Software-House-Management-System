var express = require('express');
const db = require('../database');
var router = express.Router();

router.post("/" , function (req,res)  {
    console.log("body is: ", req.body)
  
    db.query("INSERT INTO soft_management.clients (name) VALUES (?)", 
    [req.body.client_name], function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
})

module.exports = router
