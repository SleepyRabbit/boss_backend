var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var config = require("../../config");

/* GET home page. */
router.get('/', function(req, res, next) {
    // console.log(req.query);

    let query = req.query;

    // 判断url的query中是否有'par'
    if('par' in query) {
        let param = query.par;
        console.log(param);

        // 登陆数据库
        if(param === 'login') {

            // 建立数据库连接
            let connection = mysql.createConnection({
                host: config.mysql.host,
                user: config.mysql.user,
                password: config.mysql.password,
                // database: config.mysql.database,
                port: config.mysql.port,
            });

            // 连接数据库
            connection.connect(err => {
                if(err)
                {
                    console.log("mysql login failed!");
                    res.send("failed!");
                }
                else {
                    console.log("mysql login succeed!");
                    res.send("succeed!");
                }
            });

            // connection.on('error', err => {
            //     console.log("err code: ", err.code);
            //     console.log("err sqlMessage: ", err.sqlMessage);
            // })

            // 连接数据库
            // connection.connect( (err, res) => {
            //     if(err)
            //     {
            //         throw err;
            //         console.log("Error when connecting to db");
            //         console.log("err code: ", err.code);
            //         console.log("err sqlMessage: ", err.sqlMessage);
            //         res.send('database login failed!');
            //         return;
            //     }
            //     else {
            //         console.log("Mysql login succeed!");
            //     }
            // });

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
});

module.exports = router;
