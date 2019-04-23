var express =  require('express')
var app=express();
//var path = require('path');
//var path = process.argv[3];
  var bodyparser = require('body-parser');
    app.use(bodyparser.urlencoded({extended: false}));
    

app.post('/form', function(req, res){
	
	console.log(res);

	
	
	})

app.listen(process.argv[2]);
