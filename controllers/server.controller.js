const db = require("../configs/db");

exports.findAll = async (req, res) => {
    const Server = require("../models/server")(db.sequelize, db.Sequelize);

    const servers = await Server.findAll({});
    return servers;
};

exports.create = async (server) => {
    const type = {'onprem':0,'virtual':1};
    server.server_type = type[server.server_type];
    const Server = require("../models/server")(db.sequelize, db.Sequelize);
    const result = await Server.create(server);

    return result;
};

exports.update = async (values,server) => {
    const Server = require("../models/server")(db.sequelize, db.Sequelize);

    const options = {
        where: {
            server: server
        }
    };

    await Server.update(values, options);
    const result = await Server.findOne(options);

    return result;
};