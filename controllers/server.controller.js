const db = require("../configs/db");

exports.findAll = async (req, res) => {
    const Server = require("../models/server")(db.sequelize, db.Sequelize);

    const servers = await Server.findAll({});
    return servers;
};

exports.create = async (server) => {
    const Server = require("../models/server")(db.sequelize, db.Sequelize);
    
    const result = await Server.create(server);

    return result;
};