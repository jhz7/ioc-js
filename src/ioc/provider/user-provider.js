let UserRepo = require('../../dependency/user-repo');
let DataBase = require('../../dependency/data-base');

module.exports = (container) => {
  container.service('UserRepo', c => new UserRepo(c.DataBase));
  container.service('DataBase', c => new DataBase());
}
