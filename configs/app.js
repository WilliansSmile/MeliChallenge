const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

class App {
    constructor() {
        this.server = express();
        this.server.use(bodyParser.json());
        this.routes();
    }

    routes() {
        this.server.use(routes);
    }
}

module.exports = new App().server;