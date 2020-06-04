	var express = require('express')
	var port = 7998
	var path = require('path')
	var bodyParser = require('body-parser')

	var clie = require('./routes/clients')
	var appl = require('./routes/applications')
	var serv = require('./routes/services')

	var cors = require('cors')

	var app = express()
	app.use(cors())

	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: false }))

	app.use('/', clie)
	app.use('/', appl)
	app.use('/', serv)

	app.listen(port, function() {
	  console.log('Server started on port ' + port)
	})
