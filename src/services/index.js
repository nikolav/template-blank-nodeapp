const main = require('./main/main.service.js');
const users = require('./users/users.service.js');
const messages = require('./messages/messages.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(main);
  app.configure(users);
  app.configure(messages);
};
