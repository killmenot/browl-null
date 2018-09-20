'use strict';

const NullStrategy = require('../');

describe('browl-null', () => {
  let strategy;
  let options;

  beforeEach(() => {
    strategy = new NullStrategy();
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
