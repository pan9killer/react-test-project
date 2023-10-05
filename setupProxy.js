const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://ac8c-89-138-181-200.ngrok-free.app",
      changeOrigin: true,
    })
  );
};
