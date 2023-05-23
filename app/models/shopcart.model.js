module.exports = (sequelize, Sequelize) => {
    const ShopCart = sequelize.define("shopcarts", {
        userId: {
            type: Sequelize.STRING
        },
        product_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: { msg: "product name is required" },
            },
        },
        product_id: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: { msg: "Product Id is required" },
            },
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: { msg: "Status is required" },
            },
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
              notNull: { msg: "Quantity is required" },
            },
        },
        description: {
            type: Sequelize.STRING
        },
    });

    return ShopCart;
};