'use strict';

/**
 * Null strategy allows browl to deploy an instance that doesn't need any specific actions.
 */
class NullStrategy {
  constructor() {
    this.name = 'null';
  }

  create() {
    return Promise.resolve();
  }

  update() {
    return Promise.resolve();
  }

  delete() {
    return Promise.resolve();
  }

  start() {
    return Promise.resolve();
  }

  stop() {
    return Promise.resolve();
  }

  restart() {
    return Promise.resolve();
  }
}

module.exports = NullStrategy;
