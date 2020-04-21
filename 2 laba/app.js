    //Лабораторная работа №2
    var express = require('express');
    var app = express();

    var server = app.listen(7998, function () {
    var host = server.address().address
    var port = server.address().port

  function connect()
 {
 	let connecti = mysql.createConnection({
 		host: 'localhost',
 		user: 'root',
 		password: '',
 		database: 'Laba2'
 		});		
 	connecti.connect();
 	return connecti;
 }
