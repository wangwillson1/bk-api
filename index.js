// require packages and setting port
const express = require('express');
const port = 8000
const app = express();
const bodyParser = require('body-parser');

// routes requirements
const index = require('./routes/index');
const users = require('./routes/users');

// json parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// routing
app.use('/', index);
app.use('/users', users);

// server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});