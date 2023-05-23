module.exports = (sequelize, Sequelize) => {
    const OrderProduct = sequelize.define("orderproducts", {
        orderId: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: { msg: "Order Id is required" },
            },
        },
        productId: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: { msg: "Product Id is required" },
            },
        },
    });

    return OrderProduct;
};