
// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 4242;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:4242/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


// Start an evacuation alert : opening doors and light signaling
router.get('/alert', function(req, res) {
    console.log("  _____  _____ ______ _____ _    _ _____  _____ _________     __");
    console.log(" |_   _|/ ____|  ____/ ____| |  | |  __ \\|_   _|__   __\\ \\   / /");
    console.log("   | | | (___ | |__ | |    | |  | | |__) | | |    | |   \\ \\_/ /");
    console.log("   | |  \\___ \\|  __|| |    | |  | |  _  /  | |    | |    \\   /");
    console.log("  _| |_ ____) | |___| |____| |__| | | \\ \\ _| |_   | |     | |");
    console.log(" |_____|_____/|______\\_____|\\____/|_|  \\_\\_____|  |_|     |_|");
    console.log("");
    console.log("Starting evacuation procedure...");
    console.log("Opening doors ...");
    console.log("Door open");
    console.log("Signaling light on");

    res.json({ id: 22, alert: true });
});

router.get('/stop')
// Stop the alarm for evacuation (check password)
router.get('/stop', function(req, res) {
    console.log("Trying to stop the alarm");
    console.log("cheking for password");
    console.log("Password OK ! ");
    console.log("Alarm stoped");

    res.json({ id: 22, alert: false });
});

    // Keep alive of the device
router.get('/keepalive', function(req, res) {
    console.log('Device 12 is ALIVE');
    res.json({ id: 22, state: 'ALIVE' });
});

// more routes for our API will happen here



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server is listening on port  ' + port);