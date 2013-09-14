
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    blog = require('./routes/blog'),
    http = require('http'),
    exphbs  = require('express3-handlebars'),
    path = require('path'),
    app = express(),
    hbs;

hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: {
    navLink: function (val) {
      return val === 'home'? '': val;
    }
  }
});
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
// app.set('view engine', 'jade');
app.engine('.hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.locals.siteNav = ['home', 'blog', 'about']

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/blog', blog.index);
app.get('/blog/:post_id', blog.post);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
