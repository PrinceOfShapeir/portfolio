var express =  require('express')
var app=express();
//var path = require('path');
//var path = process.argv[3];
app.set('view engine', 'pug');
//app.set('views', path.join(process.argv[3], 'templates'));
app.set('views', process.argv[3]);
app.get('/home', function (req, res){
res.render('index', {date: new Date().toDateString()})

});

app.listen(process.argv[2]);
