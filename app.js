/* probando funcionalidad de descargar archivos json*/
//var words = 



var express = require('express');
//dependenidas proyecto principal
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var method_override = require("method-override");
var sizeOf    =   require( 'image-size' );
var exphbs    =   require( 'express-handlebars' );
var fs = require('fs');
var csv = require('fast-csv')
//var ws = fs.createWriteStream('data.csv');
require( 'string.prototype.startswith' );

//words probando json file
var buffer = fs.readFileSync('data.json')
var data = JSON.parse(buffer)
console.log(data)

/* cambios aplicacione
	color gris
	Pantalla principal -> Cambio de mediciones
	Systema supervisorio y adquisicion de datos -> cambio por mediciones
	head mas pequeño
	tarjetas configurar label de cajas por variables
	añadir limite minimo y limite maximo apra alarmas en creacion
	cambiar a rojo grafica fuera limites alarmas
	cambio de variables por historicos
	indnividual por presion temperatura por dikmension
	variable variar por numero y solo poner dato fecha hora valor
	10 datos pra mandar agrupar la variable
	
*/
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
  var10 : Number,
  hora: Number,
  min: Number,
  seg: Number,
  anio: Number,
  mes: Number,
  dia: Number
};


var limSchemaJSON = {

  lim1: Number,
  lim2 : Number ,
  lim3 : Number,
  lim4 : Number,
  lim5 : Number,
  lim6 : Number ,
  lim7 : Number,
  lim8 : Number,
  lim9 : Number,
  lim10 : Number,
  lim11 : Number,
  lim12 : Number
};

//cuadro de mando schema

var cuadroSchemaJSON = {

  var1: String,
};

var cuadro2SchemaJSON = {

  var1: String,
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
/*
	dimensiones
	
*/

//var ingenieroSchema = new Schema(ingenieroSchemaJSON);
var varSchema = new Schema(varSchemaJSON);
var limSchema = new Schema(limSchemaJSON);
// cuadro de mando 
var cuadroSchema = new Schema(cuadroSchemaJSON);
var cuadro2Schema = new Schema(cuadro2SchemaJSON);
/*
ingenieroSchema.virtual("image.url").get(function(){
	if(this.imageUrl === "" || this.imageUrl === "data.png"){
		return "default.jpg";
	}
	return this.imageUrl;
});
*/
var Lim = mongoose.model("Lim", limSchema);
var Var = mongoose.model("Var", varSchema);
var Cuadro = mongoose.model("Cuadro", cuadroSchema);
var Cuadro2 = mongoose.model("Cuadro2", cuadroSchema);
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
}


);

//route para guardar un registro en la base de datos 



//ingreso de cuadro de mando
app.post('/comando', function(req, res ) {
	
	var data = {
  		var1: req.body.inlineRadioOptions,
  	}
  	var documento = new Cuadro(data);
	documento.save(function(err){
		if(err){
			console.log("esta grabando")	
		}
		
		res.redirect("/");
	});

}); 

app.get('/comando', function(req, res ) {
	
	Cuadro.find({
	  }).
	  limit(1).
	  sort({ _id: -1 }).
	  exec(function(error,documento){
	    if(error){ console.log(error); }
	    var docs = documento;
	     res.send(docs);
  	});

}); 


app.post('/comandoa', function(req, res ) {
	var data = {
  		var1: req.body.var1,
  	}
  	var documento = new Cuadro2(data);
	documento.save(function(err){

		if(err){
			console.log("esta grabando")	
		}
		
		res.redirect("/");
	});
}); 


app.get('/comandoa', function(req, res ) {
	
	Cuadro2.find({
	  }).
	  limit(1).
	  sort({ _id: -1 }).
	  exec(function(error,documento){
	    if(error){ console.log(error); }
	    var docs = documento;
	    console.log(docs[0].var1);
	     res.send(docs);
  	});

}); 

//ver demas  endpoints
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
			var10: req.body.var10,
			hora: req.body.hora,
			min: req.body.min,
			seg: req.body.seg,
			anio: req.body.anio,
			mes: req.body.mes,
			dia: req.body.dia

  	}
  	var documento = new Var(data);
	documento.save(function(err){
		if(err){
			console.log("esta grabando")	
		}
		
		res.redirect("/");
	});

});


app.post('/menulim', function(req, res ) {
	console.log(req.body)
  	var data = {
  		lim1: req.body.var1,
			lim2: req.body.var2,
			lim3: req.body.var3,
			lim4: req.body.var4,
			lim5: req.body.var5,
			lim6: req.body.var6,
			lim7: req.body.var7,
			lim8: req.body.var8,
			lim9: req.body.var9,
			lim10: req.body.var10,
			lim11: req.body.var11,
			lim12: req.body.var12
  	}
  	var documento = new Lim(data);
	documento.save(function(err){
		if(err){
			console.log("esta grabando")	
		}
		
		res.redirect("/");
	});

});





// ruta de ingreso a admin
app.get("/admin",function(req,res){

	res.render("admin/form" )

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
	console.log('estoy dentro del metodo product')
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
							
	/*
	fecha hora y valor
	*/
	}
});

// ruta para un nuevo documento
app.get("/limites", function(req,res){
	res.render("menu/new");
});

//ruta pra la eliminacion de un documento
app.get("/menu/delete/:id",function(req, res){
	var id = req.params.id;

	Var.findOne({"_id": id},function(err,documento){
		res.render("menu/delete",{documento: documento});
	});
});

//ruta para eliminar un archivo en especifico
app.delete("/menu/:id",function(req,res){
	var id = req.params.id;
	if(req.body.password == app_password){
		Var.remove({"_id" : id},function(err){
			if(err){ console.log(err);}
			res.redirect("/menu");
		});
	}else{
		res.redirect("/menu");
	}

});


//get proyecto Principal

app.get('/api/limites', function (req, res) {
  //var area = req.query.type;
Lim.find({
  }).
  limit(1).
  sort({ _id: -1 }).
  exec(function(error,documento){
    if(error){ console.log(error); }
    var docs = documento;
     res.send(docs);
  });

});





app.get('/api/documentos', function (req, res) {

console.log(req.body)
  //var area = req.query.type;
Var.find({
  }).
  limit(12).
  sort({ _id: -1 }).
  exec(function(error,documento){
    if(error){ console.log(error); }
    var docs = documento;	
     res.send(docs);
     //res.download(docs);
  });






/*

  Var.find(function(error,documento){
		if(error){ console.log(error); }
		var docs = documento;
		//res.render("menu/index",{ products: documento })
		/*if (area) {
		    var results = docs.filter(function (doc) {
		    if(doc.area.toLowerCase() == area){
		    	return doc.area	
		    }
		    
    });		    
    res.send(results);
  } else {
    res.send(docs);
  }
   res.send(docs);
	});
  */
});


app.get('/api/descargar/:id', function (req, res) {

//console.log(req.body)
  //var area = req.query.type;
 var id = req.params.id;
  	Var.find({
  }).
  limit(12).
  sort({ _id: -1 }).
  exec(function(error,documento){
    if(error){ console.log(error); }
    //console.log(documento[0])
    if(id == 1){
    		var datos = {
			var1: documento[0].var1,
			var2: documento[1].var1,
			var3: documento[2].var1,
			var4: documento[3].var1,
			var5: documento[4].var1,
			var6: documento[5].var1,
			var7: documento[6].var1,
			var8: documento[7].var1,
			var9: documento[8].var1,
			var10: documento[9].var1
		};
    }else if (id == 2){
    		var datos = {
			var1: documento[0].var2,
			var2: documento[1].var2,
			var3: documento[2].var2,
			var4: documento[3].var2,
			var5: documento[4].var2,
			var6: documento[5].var2,
			var7: documento[6].var2,
			var8: documento[7].var2,
			var9: documento[8].var2,
			var10: documento[9].var2
		};
    }else if (id == 3){
    		var datos = {
			var1: documento[0].var3,
			var2: documento[1].var3,
			var3: documento[2].var3,
			var4: documento[3].var3,
			var5: documento[4].var3,
			var6: documento[5].var3,
			var7: documento[6].var3,
			var8: documento[7].var3,
			var9: documento[8].var3,
			var10: documento[9].var3
		};
    }else if (id == 4){
    		var datos = {
			var1: documento[0].var4,
			var2: documento[1].var4,
			var3: documento[2].var4,
			var4: documento[3].var4,
			var5: documento[4].var4,
			var6: documento[5].var4,
			var7: documento[6].var4,
			var8: documento[7].var4,
			var9: documento[8].var4,
			var10: documento[9].var4
		};
    }else if (id == 5){
    		var datos = {
			var1: documento[0].var5,
			var2: documento[1].var5,
			var3: documento[2].var5,
			var4: documento[3].var5,
			var5: documento[4].var5,
			var6: documento[5].var5,
			var7: documento[6].var5,
			var8: documento[7].var5,
			var9: documento[8].var5,
			var10: documento[9].var5
		};
    }else if (id == 6){
    		var datos = {
			var1: documento[0].var6,
			var2: documento[1].var6,
			var3: documento[2].var6,
			var4: documento[3].var6,
			var5: documento[4].var6,
			var6: documento[5].var6,
			var7: documento[6].var6,
			var8: documento[7].var6,
			var9: documento[8].var6,
			var10: documento[9].var6
		};
    }
    // var docs = documento;	
    var data = JSON.stringify(datos)
    	fs.writeFile('data.json', data, function(err){
    		console.log('todo los datos')
    		 res.download('data.json')
    		
    	})
    
     
     //res.send(docs);
     //res.download(docs);
  });



  
});

app.get('/api/descargarxls/:id', function (req, res) {

//console.log(req.body)
  //var area = req.query.type;
 var id = req.params.id;
  	Var.find({
  }).
  limit(12).
  sort({ _id: -1 }).
  exec(function(error,documento){
    if(error){ console.log(error); }
    //console.log(documento[0])
    if(id == 1){
    	csv
   			.writeToPath("data.csv", [
       			["var1", documento[0].var1],
       			["var2", documento[1].var1],
       			["var3", documento[2].var1],
       			["var4", documento[3].var1],
       			["var5", documento[4].var1],
       			["var6", documento[5].var1],
       			["var7", documento[6].var1],
       			["var8", documento[7].var1],
       			["var9", documento[8].var1],
       			["var10", documento[9].var1]
   ], {headers: true})
   .on("finish", function(){
      res.download('data.csv')
   });
    
    }else if (id == 2){
    	csv
   			.writeToPath("data.csv", [
       			["var1", documento[0].var2],
       			["var2", documento[1].var2],
       			["var3", documento[2].var2],
       			["var4", documento[3].var2],
       			["var5", documento[4].var2],
       			["var6", documento[5].var2],
       			["var7", documento[6].var2],
       			["var8", documento[7].var2],
       			["var9", documento[8].var2],
       			["var10", documento[9].var2]
   ], {headers: true})
   .on("finish", function(){
      res.download('data.csv')
   });
    }else if (id == 3){
    		var datos = {
			var1: documento[0].var3,
			var2: documento[1].var3,
			var3: documento[2].var3,
			var4: documento[3].var3,
			var5: documento[4].var3,
			var6: documento[5].var3,
			var7: documento[6].var3,
			var8: documento[7].var3,
			var9: documento[8].var3,
			var10: documento[9].var3
		};
    }else if (id == 4){
    		var datos = {
			var1: documento[0].var4,
			var2: documento[1].var4,
			var3: documento[2].var4,
			var4: documento[3].var4,
			var5: documento[4].var4,
			var6: documento[5].var4,
			var7: documento[6].var4,
			var8: documento[7].var4,
			var9: documento[8].var4,
			var10: documento[9].var4
		};
    }else if (id == 5){
    		var datos = {
			var1: documento[0].var5,
			var2: documento[1].var5,
			var3: documento[2].var5,
			var4: documento[3].var5,
			var5: documento[4].var5,
			var6: documento[5].var5,
			var7: documento[6].var5,
			var8: documento[7].var5,
			var9: documento[8].var5,
			var10: documento[9].var5
		};
    }else if (id == 6){
    		var datos = {
			var1: documento[0].var6,
			var2: documento[1].var6,
			var3: documento[2].var6,
			var4: documento[3].var6,
			var5: documento[4].var6,
			var6: documento[5].var6,
			var7: documento[6].var6,
			var8: documento[7].var6,
			var9: documento[8].var6,
			var10: documento[9].var6
		};
    }
    // var docs = documento;	
  
       
     //res.send(docs);
     //res.download(docs);
  });



  
});





/*datoa para csv*/

///

/*
app.get('/api/descargarxls/:id', function (req, res) {

//console.log(req.body)
  //var area = req.query.type;
 var id = req.params.id;
  	Var.find({
  }).
  limit(12).
  sort({ _id: -1 }).
  exec(function(error,documento){
    if(error){ console.log(error); }
    //console.log(documento[0])
    if(id == 1){
    		csv.write([
				["var1", documento[0].var1],
				["var2", documento[1].var1],
				["var3", documento[2].var1],
				["var4", documento[3].var1],
				["var5", documento[4].var1],
				["var6", documento[5].var1],
				["var7", documento[6].var1],
				["var8", documento[7].var1],
				["var9", documento[8].var1],
				["var10", documento[9].var1]
			], {headers: true})
   			.pipe(ws);
   			 res.download('data.csv')
		
    }else if (id == 2){
    		
    }else if (id == 3){
    	
    }else if (id == 4){
    	
    }else if (id == 5){
    	
    }else if (id == 6){
    	
    }
    // var docs = documento;
     
     //res.send(docs);
     //res.download(docs);
  });



  
});

*/

app.get('/api/documentos/:id', function (req, res) {
	
  var id = req.params.id;
Var.find({
  }).
  limit(12).
  sort({ occupation: -1 }).
  exec(function(error,documento){
    if(error){ console.log(error); }
    console.log(documento)
    var docs = documento;
     res.send({docs: docs, id : id});
  });
/*
  Var.find(function(error,documento){
		if(error){ console.log(error); }
		var docs = documento;
		var results = docs.filter(function (doc) {
    		return doc.id == id;
  		});
  		if (results.length > 0) {
	    res.send(results[0]);
	  } else {
	    res.status(404).end();
	  }
	});
	*/
});

app.get( '/', function( req, res, next ){
  	
  return res.render( 'index' );
});



app.listen(5000);	