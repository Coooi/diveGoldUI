var express       = require('express');
var path          = require('path');
var app           = express();
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash         = require('connect-flash');
var morgan        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var session       = require('express-session');

app.set('port', (process.env.PORT || 5000))

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser("divegolduikey")); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

// required for passport
app.use(session({ 
		cookie: { expires : new Date(Date.now() + 3600000) }
	})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/js', express.static(path.join(__dirname, '/public/js')));
app.use('/fonts', express.static(path.join(__dirname, '/public/fonts')));
app.use('/images', express.static(path.join(__dirname, '/public/images')));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

