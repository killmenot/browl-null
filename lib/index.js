'use strict';

const debug = require('debug')('browl-null');

/**
 * Null strategy allows browl to deploy an instance that doesn't need any specific actions.
 */
class NullStrategy {
  constructor(repo, rootConfig, repoConfig) {
    debug('init: %s', repo);

    this.name = 'null';
    this.repo = repo;
    this.rootConfig = rootConfig;
    this.repoConfig = repoConfig;
  }

  create(branch) {
    debug('create: %s', branch);

    return Promise.resolve();
  }

  update(branch) {
    debug('update: %s', branch);

    return Promise.resolve();
  }

  delete(branch) {
    debug('delete: %s', branch);

    return Promise.resolve();
  }

  start(branch) {
    debug('start: %s', branch);

    return Promise.resolve();
  }

  stop(branch) {
    debug('stop: %s', branch);

    return Promise.resolve();
  }

  restart(branch) {
    debug('restart: %s', branch);

    return Promise.resolve();
  }
}

module.exports = NullStrategy;
