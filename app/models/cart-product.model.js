module.exports = (sequelize, Sequelize) => {
    const CartProduct = sequelize.define("cartproducts", {
        cartId: {
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
        productName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: { msg: "Product Name is required" },
            },
        },
        productPrice: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: { msg: "Product price is required" },
            },
        },
        productQuantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
              notNull: { msg: "Quantity is required" },
            },
        },

        status: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: { msg: "Status is required" },
            },
        },
    });

    return CartProduct;
};