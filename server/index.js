const express = require ('express');
const parser = require('body-parser');
const path = require('path');


const PORT = 3000;
const App = express();

require('./../db');

App.use(parser.json());
App.use(parser.urlencoded({ extended: true }));

App.listen(PORT, () => {
  console.log('Server is live and listening on port ', PORT);
});

module.exports = {
  App: App
};