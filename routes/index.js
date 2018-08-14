var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var config = require("../config");

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Backend called!");

  console.log(config.sql.host);

  // let connection = mysql.createConnection({
  //     host: config.host,
  //     user: config.user,
  //     password: config.password,
  //     port: config.port
  // });

    let connection = mysql.createConnection({
        // host: "localhost",
        user: "root",
        password: "12345678abc",
        // port: config.port
    });

  connection.connect( err => {
    console.log("Error when connecting to db:", err);
  })

});

module.exports = router;
