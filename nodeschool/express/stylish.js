var express =  require('express')
//var stylus = require('stylus');
var app=express();
//app.set('view engine', 'pug');
/*app.get('/home', function (req, res){
res.render('index');

});*/

app.use(express.static(process.argv[3]));
app.use(require('stylus').middleware(process.argv[3]));
/*
app.get('/main.css',function (req, res){
res.render('/mai');

});
*/
app.listen(process.argv[2]);
//app.listen(process.argv[3]);
