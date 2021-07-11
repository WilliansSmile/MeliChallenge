module.exports = (sequelize, Sequelize) => {
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
            type: Sequelize.INTEGER
        }
    });

    return Server;
};