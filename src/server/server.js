import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';

import { renderToString } from 'react-dom/server';

dotenv.config();

const { ENV, PORT } = process.env;

const app = express();

if(ENV === 'development'){
    console.log('Entorno de desarrollo');
    const webpackConfig = require('../../webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    const serverConfig = { port:PORT, hot: true }

    app.use(webpackDevMiddleware(compiler, serverConfig))
    app.use(webpackHotMiddleware(compiler))
}

const renderApp = (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="assets/app.css" type="text/css">
            <title>Raphael Hinostroza</title>
        </head>
        <body>
            <div id="root"></div>
            <script src="assets/app.js" type="text/javascript"></script>
        </body>
        </html>
    `);
}

app.get('*',renderApp)

app.listen(PORT, (err) => {
    if(err) console.error(err);
    else console.log(`El servidor se encuentr en el puerto ${PORT}`);
})

