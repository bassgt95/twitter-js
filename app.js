const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const twitterApp = express();

// twitterApp.post('/is-anybody-in-there', function(req, res, next) {
//     res.send('modernism');
//     next();
// });

twitterApp.use(bodyParser.json());

// twitterApp.use(function(req, res) {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('you posted:\n');
//     res.end(JSON.stringify(req.body, null, 2));
// });

twitterApp.use(morgan('default'));

twitterApp.get('/', (req, res) => res.send('Hey!'));

// twitterApp.get('/is-anybody-in-there', (req, res) => res.send('Hello?'));

twitterApp.get('/news', function(req, res, next) {
    res.send('news!!!')
});

twitterApp.listen('3000', function() {
    console.log('server listening');
});

