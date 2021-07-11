const { Router } = require('express');

const routes = new Router();

routes.get('/ping', (req, res) => {
    res.send('pong');
});

routes.get('/API/servers', async(req, res) => {
    const servers = require("../controllers/server.controller.js");
    res.setHeader('Content-Type', 'application/json');

    try {
        const result = await servers.findAll();
        res.end(JSON.stringify(result));
    } catch (error) {
        res.status(400).end(JSON.stringify(error));
    }
});

routes.post('/API/servers/create', async (req, res) => {
    const servers = require("../controllers/server.controller.js");
    res.setHeader('Content-Type', 'application/json');

    try {
        const result = await servers.create({
            server: req.body.server,
            description: req.body.description,
            server_type: req.body.server_type
        });

        res.status(201).end(JSON.stringify(result));
    } catch (error) {
        if (error.name = 'SequelizeUniqueConstraintError') {
            res.status(409).end(JSON.stringify({message: 'Server already exists'}));
        }
        res.status(400).end(JSON.stringify(error));
    }
});

module.exports = routes;