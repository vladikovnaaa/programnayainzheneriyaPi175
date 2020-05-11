    //Лабораторная работа №2
    var express = require('express');
    var app = express();
    var mysql = require('mysql');

    var server = app.listen(7998, function ()
    {
    var host = server.address().address
    var port = server.address().port

        console.log("Example app listening at http://%s:%s", host, port)
    })

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

    //select http://localhost:7998/pol/?table=service
    app.get("/pol", (req, resil)=>
    {
        var connecti = connect();
        var tables = req.query.table;
        connecti.query("call proc(?,?,?,?,?)", [tables, 'pol', '-', '-', '-'], function(errors, resultate) {
            if (errors) throw errors;
            resil.send(resultate[0]);
        });
        connecti.end();
    });

    //paste http://localhost:7998/pas/?table=service&parametr1=repairs&parametr2=111
    app.get("/pas", (req, resil)=>
    {
        var connecti = connect();
        var tables = req.query.table;
        var parametr1 = req.query.parametr1;
        var parametr2 = req.query.parametr2;

        if (parametr1 == undefined) parametr1 = '-';
        if (parametr2 == undefined) parametr2 = '-';

        connecti.query("call proc(?,?,?,?,?)", [tables, 'pas', parametr1, parametr2, '-'], function(errors, resultate) {
            if (errors) throw errors;
            resil.send("Данные добавлены");
        });
        connecti.end();

    });
