const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/sites',
        createProxyMiddleware({
        target: 'http://localhost:8001',
        changeOrigin: true,
        })
    );
    app.use(
        '/api/login',
        createProxyMiddleware({
        target: 'http://localhost:8001',
        changeOrigin: true,
        })
    );
    app.use(
        '/api/register',
        createProxyMiddleware({
        target: 'http://localhost:8001',
        changeOrigin: true,
        })
    );
    app.use(
        '/api/logout',
        createProxyMiddleware({
        target: 'http://localhost:8001',
        changeOrigin: true,
        })
    );
    app.use(
        '/api/user',
        createProxyMiddleware({
        target: 'http://localhost:8001',
        changeOrigin: true,
        })
    );
    app.use(
        '/api/sites/:id',
        createProxyMiddleware({
        target: 'http://localhost:8001',
        changeOrigin: true,
        })
    );
   

    
    };
//         })
//     }
//
//     handleUpload = theFile => {
//         return this.service.post('/upload', theFile)
//         .then(response => response.data)
//     }
//
