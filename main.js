var express = require('express')
var app = express()
var server = require('http').Server(app)

app.get('/' , function(req, res){
		res.status(200).send('Hello world')
})

server.listen(8000, function(){
	console.log('escuchando puerto 8000')
})