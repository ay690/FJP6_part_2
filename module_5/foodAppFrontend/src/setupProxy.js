const { createProxyMiddleware } =
    require('http-proxy-middleware');

module.exports = function (app) {
    app.use("/api",
        createProxyMiddleware({
            // server ke home page ka link
            target: 'https://food-pep.herokuapp.com/',
            changeOrigin: true,
        })
    );
};
