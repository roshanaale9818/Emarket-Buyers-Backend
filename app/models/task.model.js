module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("tasks", {
        userId: {
            type: Sequelize.STRING
        },
        originText: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: { msg: "Origin Text is required" },
            },
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: { msg: "Task Status is required" },
            },
        },
        description: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: { msg: "Name is required" },
            },
        }
    });

    return Task;
};