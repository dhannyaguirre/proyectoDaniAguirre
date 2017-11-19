var express = require('express');
//dependencias proyecto principal
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var method_override = require("method-override");
var sizeOf    =   require( 'image-size' );
var exphbs    =   require( 'express-handlebars' );
require( 'string.prototype.startswith' );

var app_password = "1"
var Schema = mongoose.Schema;
//mongodb://<dbuser>:<dbpassword>@ds113826.mlab.com:13826/var

mongoose.connect('mongodb://node:node@ds113826.mlab.com:13826/var');

//mongoose.connect('mongodb://node:node@ds023644.mlab.com:23644/hanmilton');
//mongoose.connect('')
var cloudinary = require("cloudinary");

cloudinary.config( {
	cloud_name: "dot6c5g5b",
	api_key: "113749932721945",
	api_secret:"bHFddfhntRfgbf0wm8Sfkr9uwzg"
});

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(method_override("_method"));
//app.use(method_override);//app.use(multer({dest: "./uploads"}));
/*name: {
        first: String,
        last: { type: String, trim: true }
      },
      age: { type: Number, min: 0 }
*/


var varSchemaJSON = {
  var1: Number,
  var2 : Number ,
  var3 : Number,
  var4 : Number,
  var5 : Number,
  var6 : Number ,
  var7 : Number,
  var8 : Number,
  var9 : Number,
  var10 : Number
};
/*
var ingenieroSchemaJSON = {
	ci: Number,
	apellidos : String ,
	name : String,
	correo : String,
	programa : String,
	financiamiento : String ,
	pais : String,
	universidad : String,
	nivel : String,
	area : String,
	titulo : String,
	imageUrl: String
};
*/

//var ingenieroSchema = new Schema(ingenieroSchemaJSON);
var varSchema = new Schema(varSchemaJSON);

/*
ingenieroSchema.virtual("image.url").get(function(){
	if(this.imageUrl === "" || this.imageUrl === "data.png"){
		return "default.jpg";
	}
	return this.imageUrl;
});
*/
var Var = mongoose.model("Var", varSchema);
//var Ingeniero = mongoose.model("Ingeniero", ingenieroSchema);

app.set("view engine","jade");
app.use( express.static( __dirname + '/bower_components' ) );
//app.use(express.static("public"));
/*
app.get("/",function(req,res){
	res.render("index");
});
*/
/*
app.get("/menu",function(req,res){

	Ingeniero.find(function(error,documento){
		if(error){ console.log(error); }
		res.render("menu/index",{ ingenieros: documento })
	});
});
*/

//route para conseguir todo los registros de datos
app.get("/menu",function(req,res){

  Var.find(function(error,documento){
    if(error){ console.log(error); }
    res.render("menu/index",{ vars: documento })
  });
});

//route para guardar un registro en la base de datos 
app.post('/menu', function(req, res ) {

  	console.log(req.body)
  	var data = {
  		var1: req.body.var1,
  		var2: req.body.var2,
  		var3: req.body.var3,
  		var4: req.body.var4,
  		var5: req.body.var5,
  		var6: req.body.var6,
  		var7: req.body.var7,
  		var8: req.body.var8,
  		var9: req.body.var9,
  		var10: req.body.var10
  	}
  	var documento = new Var(data);
	documento.save(function(err){
		res.redirect("/menu");
	});

});


// ruta de ingreso a admin
app.get("/admin",function(req,res){

	res.render("admin/form")

});

//ruta para conseguir post y lista de datos

app.post("/admin",function(req,res){
	if(req.body.password== app_password){
		Var.find(function(error,documento){
		if(error){ console.log(error); }
		res.render("admin/index",{ vars: documento })
	});
	}else{
		res.redirect("/");
	}
});

//ruta para conseguir editar un registro por el id
app.get("/menu/edit/:id",function(req,res){
	var id_documento = req.params.id;

	Var.findOne({_id: id_documento},function(error,documento){
		res.render("menu/edit",{doc: documento});
	});

});

//ruta para guardar editar un registro por el id

app.put("/menu/:id", function( req, res ){
	console.log('estoy dentro del metodo put')
	if(req.body.password == app_password){
		var data = {
			var1: req.body.var1,
			var2: req.body.var2,
			var3: req.body.var3,
			var4: req.body.var4,
			var5: req.body.var5,
			var6: req.body.var6,
			var7: req.body.var7,
			var8: req.body.var8,
			var9: req.body.var9,
			var10: req.body.var10
		};

		console.log(data)
		Var.update({"_id": req.params.id},data,function(documento){
			res.redirect("/menu");
		});
							
		
	}
});

/*
app.get("/menu/edit/:id",function(req,res){
	var id_producto = req.params.id;

	Ingeniero.findOne({_id: id_producto},function(error,producto){
		res.render("menu/edit",{product: producto});
	});

});
*/
/*
app.post("/admin",function(req,res){
	if(req.body.password== app_password){
		Ingeniero.find(function(error,documento){
		if(error){ console.log(error); }
		res.render("admin/index",{ ingenieros: documento })
	});
	}else{
		res.redirect("/");
	}
});

*/


app.get("/menu/new", function(req,res){
	res.render("menu/new");
});


app.get("/menu/delete/:id",function(req, res){
	var id = req.params.id;

	Ingeniero.findOne({"_id": id},function(err,producto){
		res.render("menu/delete",{producto: producto});
	});
});

app.delete("/menu/:id",function(req,res){
	var id = req.params.id;
	if(req.body.password == app_password){
		Ingeniero.remove({"_id" : id},function(err){
			if(err){ console.log(err);}
			res.redirect("/menu");
		});
	}else{
		res.redirect("/menu");
	}

});

//get proyecto Principal

app.get('/api/ingenieros', function (req, res) {
  var area = req.query.type;
  Ingeniero.find(function(error,documento){
		if(error){ console.log(error); }
		var ingenieros = documento;
		//res.render("menu/index",{ products: documento })
		if (area) {
		    var results = ingenieros.filter(function (ingeniero) {
		    if(ingeniero.area.toLowerCase() == area){
		    	return ingeniero.area	
		    }
		    
    });		    
    res.send(results);
  } else {
    res.send(ingenieros);
  }
	});
  
});

app.get('/api/convenios', function (req, res) {
  var type = req.query.type;

  if (type) {
    var results = convenios.filter(function (convenio) {
      return convenio.type.some(function (t) {
        return t.toLowerCase() === type;
      });
    });

    res.send(results);
  } else {
    res.send(convenios);
  }
});

app.get('/api/convenios/:name', function (req, res) {
  var name = req.params.name;
  var results = convenios.filter(function (convenio) {
    return convenio.name.toLowerCase() === name;
  });

  if (results.length > 0) {
    res.send(results[0]);
  } else {
    res.status(404).end();
  }
});

app.get('/api/ingenieros/:ci', function (req, res) {
  var ci = req.params.ci;

  Ingeniero.find(function(error,documento){
		if(error){ console.log(error); }
		var ingenieros = documento;
		var results = ingenieros.filter(function (ingeniero) {
    		return ingeniero.ci == ci;
  		});
  		if (results.length > 0) {
	    res.send(results[0]);
	  } else {
	    res.status(404).end();
	  }
	});
});

app.get( '/', function( req, res, next ){
  	
  return res.render( 'index' );
});

app.post( '/upload', upload.single( 'file' ), function( req, res, next ) {
  if ( !req.file.mimetype.startsWith( 'image/' ) && !req.file.mimetype.startsWith( 'application/' )){
    return res.status( 422 ).json( {
      error : 'The uploaded file must be an image'
    } );
  }

 // var dimensions = sizeOf( req.file.path );

  /*if ( ( dimensions.width < 640 ) || ( dimensions.height < 480 ) ) {
    return res.status( 422 ).json( {
      error : 'The image must be at least 640 x 480px'
    } );
  }*/

  return res.status( 200 ).send( req.file );
});
app.get( '/', function( req, res, next ){
  return res.render( 'index' );
});

app.listen(5000);	