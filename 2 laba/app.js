    //Лабораторная работа №2
    var express = require('express');
    var app = express();

    var server = app.listen(7998, function ()
    {
    var host = server.address().address
    var port = server.address().port

        console.log("Example app listening at http://%s:%s", host, port)
    })
    var mysql = require('mysql');


    function connect()
    {
        var connecti = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'laba2'
        });
        connecti.connect();
        return connecti;
    }
