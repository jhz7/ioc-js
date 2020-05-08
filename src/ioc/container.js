/**
 * Refers to:
 * https://medium.com/@magnusjt/ioc-container-in-nodejs-e7aea8a89600
 */

class Container {

  constructor() {
    this.services = {};
  }

  service(name, callback) {

    Object.defineProperty(this, name, {
      get: () => {
        if(!this.services.hasOwnProperty(name))
          this.services[name] = callback(this);

        return this.services[name];
      },
      configurable: true,
      enumerable: true
    });

    return this;
  }
}

module.exports = Container
