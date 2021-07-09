const { Router } = require('express');

const routes = new Router();

const db = require('./db');

routes.get('/ping', (req, res) => {
    res.send('pong');
});

routes.get('/test', (req, res) => {
    db.query('SELECT server,description,server_type FROM servers', function (error, rows, fields) {
        if (error) throw error;

        var objs = [];
        for (var i = 0; i < rows.length; i++) {
            objs.push({ server: rows[i].server, description: rows[i].description, server_type: rows[i].server_type  });
        }
        res.end(JSON.stringify(objs));
    });
});

module.exports = routes;