const functions = require('firebase-functions');
const express = require('express');
const next = require('next');
const cors = require('cors');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

app.prepare().then(() => {
    server.use(cors());

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    exports.nextApp = functions.https.onRequest(server);
});