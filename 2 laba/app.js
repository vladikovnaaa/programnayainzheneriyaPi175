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
        connecti.query("call procedure(?,?,?,?,?)", [tables, 'pol', '-', '-', '-'], function(errors, resultate) {
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

        connecti.query("call procedure(?,?,?,?,?)", [tables, 'pas', parametr1, parametr2, '-'], function(errors, resultate) {
            if (errors) throw errors;
            resil.send(" Информация добавлена");
        });
        connecti.end();
    });

    //remove http://localhost:7998/rem/?table=service&numb=2
    app.get("/rem", (req, resil)=>
    {
        var connecti = connect();
        var tables = req.query.table;
        var numb = req.query.numb;
        connecti.query("call procedure(?,?,?,?,?)", [tables, 'rem', numb, '-', '-'], function(errors, resultate) {
            if (errors) throw errors;
            resil.send("Информация удалена");
        });
        connecti.end();
    });

    //update http://localhost:7998/chan/?table=service&parametr1=cleaning&parametr2=1000&numb=1
    app.get("/chan", (req, resil)=>
    {
        var connecti = connect();
        var tables = req.query.table;
        var parametr1 = req.query.parametr1;
        var parametr2 = req.query.parametr2;
        var numb = req.query.numb;
        connecti.query("call procedure(?,?,?,?,?)", [tables, 'chan', parametr1, parametr2, numb], function(errors, resultate) {
            if (errors) throw errors;
            resil.send("Информация обновлена");
        });
        connecti.end();
    });
