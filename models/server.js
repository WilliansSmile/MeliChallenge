module.exports = (sequelize, Sequelize) => {
    const type = ['onprem','virtual']
    const Server = sequelize.define("servers", {
        server: {
            type: Sequelize.STRING,
            primaryKey: true,
            autoIncrement: false
        },
        description: {
            type: Sequelize.STRING
        },
        server_type: {
            type: Sequelize.INTEGER,
            get: function () {
                return type[this.getDataValue("server_type")]
            }
        }
    });

    return Server;
};