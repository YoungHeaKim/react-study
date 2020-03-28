const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/', createProxyMiddleware({
    target: 'http://www.kobis.or.kr',
    changeOrigin: true,
  }));
  app.use('/', createProxyMiddleware({
    target: 'https://api.themoviedb.org',
    changeOrigin: true,
  }));
};

