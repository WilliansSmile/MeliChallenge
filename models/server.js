module.exports = (sequelize, Sequelize) => {
    const Server = sequelize.define("servers", {
        server: {
            type: Sequelize.STRING, primaryKey: true
        },
        description: {
            type: Sequelize.STRING
        },
        server_type: {
            type: Sequelize.INTEGER
        }
    });

    return Server;
};