/**
 *  Node Server with ExpressJS and MongoDB
 */

<<<<<<< HEAD
var express     = require('express'),
    router      = require('./route'),
    bodyParser  = require('body-parser'),
    morgan      = require('morgan'),
    app         = express(),
    port        = process.env.PORT || 3003;

app.set( 'view engine', 'ejs' );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded ( { extended: true } ) );
app.use( express.static( __dirname + '/views') );

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     if (req.method === 'Options') {
//       res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE');
//       return res.status(200).json({});
//     }
// });
=======
var express = require('express'),
    router = require('./route'),

    morgan = require('morgan')
    app = express(),
    port = process.env.PORT || 3003;

// app.use(bodyParser.urlencoded({ extended: true }));
>>>>>>> 29d6f445192b58b4a79e6d03af4207410b8b560d

app.use('/', router);

app.listen(port, () => {
    console.log('Server Listening [at] http://localhost:3003');
});