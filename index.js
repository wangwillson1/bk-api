// require packages and setting port
const express = require('express');
const port = 8000
const app = express();
const bodyParser = require('body-parser');

// routes requirements
const index = require('./routes/index');
const users = require('./routes/users');
const listings = require('./routes/listings')

// json parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// routing
app.use('/', index);
app.use('/users', users);
app.use('/listings', listings)

// server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});