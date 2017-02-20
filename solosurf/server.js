var path = require('path');
var http = require('http');
var express = require('express');

//middleware
//var cookieParser = require('cookie-parser');
//var cookieSession = require('cookie-session');
//routes
var routes = require('./routes');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(favicon(path.join(__dirname,'/static','favicon.ico')));
app.use(express.static(path.join(__dirname,'/static/dist')));
// app.use('/bundles',express.static(path.join(__dirname,'/static/webpack/dist')));
//app.use('/csv', express.static(path.join(__dirname,'/static/csv')));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
// app.use(cookieSession({
// 	secret: config.get('client_auth'),
// 	maxAge: 60 * 60 * 1000
// }));

app.use(routes);

http.createServer(app).listen(80);
