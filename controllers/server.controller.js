const db = require("../configs/db");

exports.findAll = async (req, res) => {
    const Server = require("../models/server")(db.sequelize, db.Sequelize);

    const servers = await Server.findAll({});
    return servers;
};