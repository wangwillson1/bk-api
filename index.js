// require packages and setting port
const express = require('express');
const port = 8000
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index');

// json parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

routes(app)

// server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});