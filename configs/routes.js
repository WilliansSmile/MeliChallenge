const { Router } = require('express');

const routes = new Router();

const db = require('./db');
db.sequelize.sync();

routes.get('/ping', (req, res) => {
    res.send('pong');
});

routes.get('/API/servers', async(req, res) => {
    const servers = require("../controllers/server.controller.js");
    res.setHeader('Content-Type', 'application/json');

    try {
        const resultado = await servers.findAll();
        res.end(JSON.stringify(resultado));
    } catch (error) {
        res.end(JSON.stringify(error));
    }
});

module.exports = routes;