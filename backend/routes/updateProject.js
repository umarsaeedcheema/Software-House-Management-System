var express = require('express');
const db = require('../database');
var router = express.Router();

router.post("/" , function (req,res)  {
    console.log("body is: ", req.body)
    db.query( `UPDATE projects SET status=? WHERE project_id=?('${req.body.status}', '${req.body.id}')`, function (err, result, fields) {      
      if (err) throw err;
      console.log(result);
    });
})

module.exports = router