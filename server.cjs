const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

// /api로 들어오는 요청을 실제 API로 프록시
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://recruit.paysbypays.com',
    changeOrigin: true,
    pathRewrite: { '^/api': '/api/v1' }, // /api -> /api/v1
  }),
);

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
