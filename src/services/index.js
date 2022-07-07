const main = require('./main/main.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(main);
};
