let Container = require('./container');

module.exports = () => {
  let container = new Container();
  require('./provider/user-provider')(container);

  return container;
};
