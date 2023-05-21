const isRequiredMessage = require("../util/validateRequest");
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,

    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,

    },
  
    address: {
    type: Sequelize.STRING,
    allowNull: false,

  },
    contact: {
    type: Sequelize.STRING,
    allowNull: false,

  },
  });

return User;
};