module.export = {
    devServer: {
        proxy: {
            '^/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
        },
        },
    },
}