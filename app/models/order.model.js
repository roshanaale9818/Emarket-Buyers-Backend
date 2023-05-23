module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
        userId: {
            type: Sequelize.STRING
        },
        totalPrice: {
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
        shippingAddress: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: { msg: "Status is required" },
            },
        },
        totalItems: {
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