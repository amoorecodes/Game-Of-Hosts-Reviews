const express = require ('express');
const parser = require('body-parser');
const path = require('path');

const { router } = require('./router');
require('./../db');

const PORT = 3000;
const App = express();


App.use(parser.json());
App.use(parser.urlencoded({ extended: true }));
App.use(express.static(path.join(__dirname, '../static')));
App.use('/api', router);

App.listen(PORT, () => {
  console.log('Server is live and listening on port ', PORT);
});

module.exports = {
  App: App
};