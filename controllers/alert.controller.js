const db = require("../configs/db");

exports.findAll = async (conditions) => {
    const Alert = require("../models/alert")(db.sequelize, db.Sequelize);
    const alerts = await Alert.findAll({});
    return alerts;
};

exports.create = async (alert) => {
    const Alert = require("../models/alert")(db.sequelize, db.Sequelize);
    const result = await Alert.create(alert);
    return result;
};

exports.findTop = async () => {
    const Alert = require("../models/alert")(db.sequelize, db.Sequelize);
    const alerts = await Alert.findAll({
        group: ['server'],
        attributes: ['alerts.server', [db.Sequelize.fn('count', db.Sequelize.col('alerts.server')), 'alerts_count']],
        limit: 3,
        order: [[db.Sequelize.fn('count', db.Sequelize.col('server')), 'DESC']],
        include: 'Server'
    });
    return alerts;
};