const express = require('express');
const twitterApp = express();

twitterApp.get('/', (req, res) => res.send('Hey!'))

twitterApp.listen('3000', function() {
    console.log('server listening');
});

