module.exports = (sequelize, Sequelize) => {
    const UserCart = sequelize.define("usercarts", {
        userId: {
            type: Sequelize.STRING
        },
        productName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              notNull: { msg: "product name is required" },
            },
        },
        productId: {
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
        price: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
              notNull: { msg: "Quantity is required" },
            },
        },
        description: {
            type: Sequelize.STRING
        },
        imgUrl:{
            type:Sequelize.STRING
        }
    });

    return UserCart;
};