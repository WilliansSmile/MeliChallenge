const { Router } = require('express');
const Moment = require("moment");

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

routes.post('/API/servers', async (req, res) => {
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
        if (error.name == 'SequelizeUniqueConstraintError') {
            res.status(409).end(JSON.stringify({message: 'Server already exists'}));
        }
        res.status(400).end(JSON.stringify(error));
    }
});

routes.put('/API/servers/:server', async (req, res) => {
    const servers = require("../controllers/server.controller.js");
    res.setHeader('Content-Type', 'application/json');

    try {
        const result = await servers.update({
            description: req.body.description,
            server_type: req.body.server_type
        }, req.params.server);

        res.status(200).end(JSON.stringify(result));
    } catch (error) {
        res.status(400).end(JSON.stringify(error));
    }
});

routes.get('/API/alerts', async (req, res) => {
    const alerts = require("../controllers/alert.controller.js");
    res.setHeader('Content-Type', 'application/json');

    try {
        const result = await alerts.findAll({});
        res.end(JSON.stringify(result));
    } catch (error) {
        console.log(error);
        res.status(400).end(JSON.stringify(error));
    }
});

routes.post('/API/alerts', async (req, res) => {
    const alerts = require("../controllers/alert.controller.js");
    res.setHeader('Content-Type', 'application/json');

    try {
        const alert = {
            server: req.body.server,
            description: req.body.description
        };
        if (typeof req.body.created_at !== 'undefined') {
            alert.created_at = Moment(req.body.created_at, "HH-mm-ss-DD-MM-YYYY").toDate();
        }
        console.log(alert);
        const result = await alerts.create(alert);

        res.status(201).end(JSON.stringify(result));
    } catch (error) {
        res.status(400).end(JSON.stringify(error));
    }
});

routes.get('/API/alerts/topServers', async (req, res) => {
    const alerts = require("../controllers/alert.controller.js");
    res.setHeader('Content-Type', 'application/json');

    try {
        const result = await alerts.findTop();
        res.end(JSON.stringify(result));
    } catch (error) {
        console.log(error);
        res.status(400).end(JSON.stringify(error));
    }
});

module.exports = routes;