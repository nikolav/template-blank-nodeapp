const app = require('../../src/app');

describe('\'main\' service', () => {
  it('registered the service', () => {
    const service = app.service('main');
    expect(service).toBeTruthy();
  });
});
