var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var config = require("../../config");

var connection = null;

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("Get!");
});

router.post('/', function(req, res, next) {
    console.log("Post!");
    let parma = req.body.parma;

    if('command' in req.body) {
        let command = req.body.command;
        // console.log(command);

        switch(command){
            case 'login':
                // 建立数据库连接
                connection = mysql.createConnection({
                host: config.mysql.host,
                user: config.mysql.user,
                password: config.mysql.password,
                // database: config.mysql.database,
                port: config.mysql.port,
                });

                console.log(connection);

                // 连接数据库
                connection.connect(err => {
                    if(err)
                    {
                        console.log("mysql login failed!");
                        res.send("mysql login failed!");
                    }
                    else {
                        console.log("mysql login succeed!");
                        res.send("mysql login succeed!");
                    }
                });

                console.log(connection);
                break;
            case 'query':
                if('quote' in req.body) {
                    sqlQueryQuote = req.body.quote;
                    console.log(sqlQueryQuote);
                    connection.query(sqlQueryQuote, (err, res) => {
                        if(err) {
                            console.log("err code: ", err.code);
                            console.log("err sqlMessage: ", err.sqlMessage);
                        }
                        else {
                            console.log("Connect to database succeed!");
                        }
                    });
                }
                else {
                    console.log("Query with no parmater");
                }
                break;
            default:
                break;
        }
        // 登陆数据库
        if(command === 'login') {
            // let sqlQuery = 'use test';
            // connection.query(sqlQuery, (err, result) => {
            //     if(err) {
            //         console.log("err code: ", err.code);
            //         console.log("err sqlMessage: ", err.sqlMessage);
            //     }
            //     else {
            //         console.log("Connect to database succeed!");
            //     }
            // });
        }

    }
    else {
        console.log("Post with no command!");
    }
})

module.exports = router;
