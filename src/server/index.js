
require('ignore-styles');

require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('asset-require-hook')({
    extensions: ['jpg','png','gif','svg','woff','ttf','eot'],
    name: '/assets/image/[name].[ext]',
})

require('./server')