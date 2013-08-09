// Module dependencies.
var application_root    = __dirname,
    express             = require('express'),
    path                = require('path'),
    mongoose            = require('mongoose'),
    _                   = require('underscore');

//Create server
var app = express();

// Configure server
app.configure(function() {
    //parses request body and populates request.body
    app.use(express.bodyParser());

    //checks request.body for HTTP method overrides
    app.use(express.methodOverride());

    //perform route lookup based on url and HTTP method
    app.use(app.router);

    //Where to serve static content
    app.use(express.static(path.join(application_root, 'site')));

    //Show all errors in development
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack:      true
    }));
});


// Connect to database
// mongoose.connect('mongodb://localhost/db_name', ['list', 'collections']);

/**
 * SCHEMAS
 */

// Schema for a generic component
// example:
//var Component = new mongoose.Schema({
//
//    name:      String
//
//});

// Instantiate models based on schemas
// example:
// var ComponentModel = mongoose.model('Component', Component);




//Start server
var port = 4011;
app.listen(port, function() {
    console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});

//
// GET ROUTES
// 
app.get('/api', function(request, response) {
    response.send('API is running');
});

