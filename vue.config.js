const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  devServer: {
    proxy: {
      '/api/job-posts': {
        target: 'https://bti.id',
        changeOrigin: true,
        pathRewrite: {
          '^/api/job-posts': '/services/btiportalcorems/api/pt-job-posts/no-auth',
        },
      },
      '/api/job-applies': {
        target: 'https://bti.id',
        changeOrigin: true,
        pathRewrite: {
          '^/api/job-applies': '/services/btiportalcorems/api/pt-job-applies/no-auth',
        },
      },
    },
  },
};
