var express = require('express')
var app = express()
var server = require('http').Server(app)
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var bodyParser = require('body-parser')


//body-parser
app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); //for parsing application
//static html
app.use('/', express.static(__dirname + '/public'))

//conection base de datos
mongoose.connect('mongodb://localhost:27017/dani', function(err){
//mongoose.connect('mongodb://node:node@ds023644.mlab.com:23644/hanmilton',function(err){

	if(err){
		console.log('Not Connected to the database: ' + err);
	}
	else{
		console.log('Successfully connected to MongoDB');
	}
});


var dataSchema = new Schema({
	var1: { type: Number, required: true},
	var2: { type: Number, required: true},
	var3: { type: Number, required: true},
	var4: { type: Number, required: true},
	var5: { type: Number, required: true},
	var6: { type: Number, required: true},
	var7: { type: Number, required: true},
	var8: { type: Number, required: true},
	var9: { type: Number, required: true},
	var10: { type: Number, required: true}
});

//comentario 
var Data = mongoose.model('Data', dataSchema)


/*
app.get('/' , function(req, res){
		res.status(200).send('Hola como estan')
		
})
*/
app.post('/data', function(req, res){
	var data  = new Data();
	data.var1 = req.body.variable1;
	data.var2 = req.body.variable2;
	data.var3 = req.body.variable3;
	data.var4 = req.body.variable4;
	data.var5 = req.body.variable5;
	data.var6 = req.body.variable6;
	data.var7 = req.body.variable7;
	data.var8 = req.body.variable8;
	data.var9 = req.body.variable9;
	data.var10 = req.body.variable10;
	
	data.save(function(err) {
		if (err) {
			console.log(err)
		}else{
			console.log(req.body)
			res.json({ success: true, message: 'Data ha sido registrada'})
		}
	})
	

})

server.listen(5000, function(){
	console.log('escuchando puerto 8000')
})