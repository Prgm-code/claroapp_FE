const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/sites',
        createProxyMiddleware({
        target: 'https://gestionsitios.hardpro.store',
        changeOrigin: true,
        })
    );
    app.use(
        '/api/users/login',
        createProxyMiddleware({
        target: 'https://gestionsitios.hardpro.store',
        changeOrigin: true,
        })
    );
    app.use(
        '/api/users/signup',
        createProxyMiddleware({
        target: 'https://gestionsitios.hardpro.store',
        changeOrigin: true,
        })
    );
    app.use(
        '/api/logout',
        createProxyMiddleware({
        target: 'https://gestionsitios.hardpro.store',
        changeOrigin: true,
        })
    );
    app.use(
        '/api/user',
        createProxyMiddleware({
        target: 'https://gestionsitios.hardpro.store',
        changeOrigin: true,
        })
    );
    app.use(
        '/api/sites/:id',
        createProxyMiddleware({
        target: 'https://gestionsitios.hardpro.store',
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
