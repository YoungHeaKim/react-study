const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/', { target: 'http://www.kobis.or.kr' }));
  app.use(proxy('/', { target: 'https://api.themoviedb.org' }));
};

