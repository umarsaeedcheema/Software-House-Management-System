var express = require('express');
const db = require('../database');
var router = express.Router();

router.get("/", (req, res) => {
    db.query("SELECT * FROM soft_management.clients", (err, result) => {
      if (err) 
      {
        console.log(err);
      } 
      else 
      {
        console.log("Success");
        console.log(result);
        res.send(result);
      }
    });
  });

module.exports = router;