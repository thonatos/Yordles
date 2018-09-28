'use strict';

const mock = require('egg-mock');

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

describe('test/framework.test.js', () => {
  let app;
  before(() => {
    mock.env('dev');
    app = mock.app({
      baseDir: 'example',
      framework: true,
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it('should GET /', () => {
    return app
      .httpRequest()
      .get('/')
      // .expect(res => {
      //   console.log(res);
      // })
      .expect(500);
      // .end(err => {
      //   if (err) throw err;
      // });
  });
});
