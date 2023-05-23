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
        amount: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
              notNull: { msg: "Amount is required" },
            },
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
              notNull: { msg: "Quantity is required" },
            },
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
              notNull: { msg: "Price is required" },
            },
        },
        
    });

    return OrderProduct;
};