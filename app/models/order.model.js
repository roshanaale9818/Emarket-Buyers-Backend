module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
        userId: {
            type: Sequelize.STRING
        },
        total_price: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
              notNull: { msg: "Total Price is required" },
            },
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: { msg: "Status is required" },
            },
        },
        shipping_address: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: { msg: "Status is required" },
            },
        },
        total_items: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
              notNull: { msg: "Total Items is required" },
            },
        },
        description: {
            type: Sequelize.STRING
        },
    });

    return Order;
};