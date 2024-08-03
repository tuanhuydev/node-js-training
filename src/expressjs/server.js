const express = require('express');
const path = require('path');

const server = express();
const { serverPath } = require('../helpers/utils');

const bodyParser = require('body-parser');

// Middleware
server.use(bodyParser.urlencoded({ extended: false })); // use native query string parsing
server.use(express.static(path.resolve(serverPath(), 'public'))); // serve static files

// View engine setup
server.set('view engine', 'ejs');
server.set('views', path.resolve(serverPath(), 'views'));

// Routing
server.use('/admin', require('./routes/admin'));
server.use('/shop', require('./routes/shop'));
server.get('/', (req, res) => {
  res.redirect('/shop');
});
server.use('*', require('./controllers/error').get404);

module.exports = {
  server,
};
