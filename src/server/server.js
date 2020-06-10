import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { renderToString } from 'react-dom/server';
import serverRoutes from '../frontend/routes/serverRoutes';
import getManifest from './getManifest';

dotenv.config();

const { ENV, PORT } = process.env;

const app = express();

if(ENV === 'development'){
    console.log('Entorno de desarrollo');
    const webpackConfig = require('../../webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const serverConfig = { port:PORT, hot:true }

    app.use(webpackDevMiddleware(compiler, serverConfig))
    app.use(webpackHotMiddleware(compiler))
}else{
    app.use((req,res,next) => {
        if(!req.hashManifest) req.hashManifest = getManifest();
        next();
    })

    app.use(express.static(`${__dirname}/public`))

    app.disable('x-powered-by');
}

const sendResponse = (html, manifest) => {

    const mainjs = manifest ? manifest['main.js'] : 'assets/app.js';
    const maincss = manifest ? manifest['main.css'] : 'assets/app.css';
    const vendorjs = manifest ? manifest['vendors.js'] : 'assets/vendor.js'
    const vendorcss = manifest ? manifest['vendors.css'] : 'assets/vendor.css'

    return(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="${vendorcss}" type="text/css">
        <link rel="stylesheet" href="${maincss}" type="text/css">
        <title>Raphael Hinostroza</title>
    </head>
    <body>
        <div id="root">${html}</div>
        <script src="${mainjs}" type="text/javascript"></script>
        <script src="${vendorjs}" type="text/javascript"></script>
    </body>
    </html>
`);
}

const renderApp = (req, res) => {
    const html = renderToString(
        <StaticRouter location={req.url} context={{}}>
            {renderRoutes(serverRoutes)}
        </StaticRouter>
    );

    res.send(sendResponse(html,req.hashManifest));
}

app.get('*',renderApp)

app.listen(PORT, (err) => {
    if(err) console.error(err);
    else console.log(`El servidor se encuentr en el puerto ${PORT}`);
})

