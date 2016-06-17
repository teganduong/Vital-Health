const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
require('./routes/routes.js')(app);

const db = require('./db/connection.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));

const port = 3000;
app.listen(port, () => console.log('Server is listening on port ', port, '\nRefresh the browser '));

export { app, db };