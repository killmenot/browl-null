'use strict';

const NullStrategy = require('../');

describe('browl-null', () => {
  let strategy;
  let repo;
  let rootConfig;
  let repoConfig;
  let options;

  beforeEach(() => {
    repo = 'webapp';
    rootConfig = {
      foo: 'bar'
    };
    repoConfig = {
      baz: 'quux'
    };

    strategy = new NullStrategy(repo,rootConfig, repoConfig);

    options = {};
  });

  describe('#create', () => {
    it('should run create scenario', (done) => {
      strategy.create('develop', options).then(done);
    });
  });

  describe('#update', () => {
    it('should run update scenario', (done) => {
      strategy.update('develop', options).then(done);
    });
  });

  describe('#delete', () => {
    it('should run delete scenario', (done) => {
      strategy.delete('develop', options).then(done);
    });
  });

  describe('#start', () => {
    it('should run start scenario', (done) => {
      strategy.start('develop', options).then(done);
    });
  });

  describe('#stop', () => {
    it('should run stop scenario', (done) => {
      strategy.stop('develop', options).then(done);
    });
  });

  describe('#restart', () => {
    it('should run restart scenario', (done) => {
      strategy.restart('develop', options).then(done);
    });
  });
});
