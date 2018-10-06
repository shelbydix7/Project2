var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 8082;
app.use(express.static("public"));

var passport = require('passport');
var flash = require('connect-flash');

require('./config/orm')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
 extended: true
}));



app.use(session({
 secret: 'justasecret',
 resave:true,
 saveUninitialized: true
}));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./controllers/htmlRoutes.js')(app, passport);

//app.listen(port);
//console.log("Port: " + port);

app.listen(port, function() {
    console.log("Server listening on: http://localhost:" + port);
  });
  


