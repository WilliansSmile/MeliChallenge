const db = require("../configs/db");
const Alert = require("../models/alert")(db.sequelize, db.Sequelize);
const Moment = require("moment");

exports.findAll = async (conditions) => {
    const data = {
        limit: parseInt(conditions.length) ,
        offset: parseInt(conditions.start)
    }

    if(conditions.search != ''){
        const Op = db.Sequelize.Op;
        data.where = [
            db.Sequelize.or ({server: {[Op.like]: '%'+conditions.search+'%'}},{description: {[Op.like]: '%'+conditions.search+'%'}})
        ]
    }

    if(conditions.orderCol != 0){
        data.order = [
            [[conditions.orderCol, conditions.order]]
        ]
    }
    
    const alerts = await Alert.findAll(data);
    return alerts;
};

exports.findCount = async (conditions) => {
    const data = {};

    if(conditions.search != ''){
        const Op = db.Sequelize.Op;
        data.where = [
            db.Sequelize.or ({server: {[Op.like]: '%'+conditions.search+'%'}},{description: {[Op.like]: '%'+conditions.search+'%'}})
        ]
    }
    
    const alerts = await Alert.count(data);
    return alerts;
};

exports.create = async (alert) => {
    const result = await Alert.create(alert);
    return result;
};

exports.findTop = async () => {
    const alerts = await Alert.findAll({
        group: ['server'],
        attributes: ['alerts.server', [db.Sequelize.fn('count', db.Sequelize.col('alerts.server')), 'alerts_count']],
        limit: 3,
        where: [
            db.Sequelize.where(db.Sequelize.fn('MONTH', db.Sequelize.col('alerts.created_at')), Moment().subtract(1, 'month').month()+1),
            db.Sequelize.where(db.Sequelize.fn('YEAR', db.Sequelize.col('alerts.created_at')), Moment().subtract(1, 'month').year())
        ],
        order: [[db.Sequelize.fn('count', db.Sequelize.col('server')), 'DESC']],
        include: 'Server'
    });
    return alerts;
};