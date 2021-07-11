const Moment = require("moment");
module.exports = (sequelize, Sequelize) => {
    const Server = require("../models/server")(sequelize, Sequelize);

    const Alerts = sequelize.define("alerts", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        server: {
            type: Sequelize.STRING,
            references: {
                model: Server,
                key: 'server'
            }
        },
        description: {
            type: Sequelize.STRING
        },
        created_at: {
            allowNull: true,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            get: function () {
                return Moment(this.getDataValue("created_at")).format("HH-mm-ss-DD-MM-YYYY");
            }
        }
    });

    Alerts.belongsTo(Server, {
        foreignKey: 'server',
        as: 'Server'
    })

    return Alerts;
};