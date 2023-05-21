const config = require('../config/db.config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: 0,
    
        pool: {
          max: config.pool.max,
          min: config.pool.min,
          acquire: config.pool.acquire,
          idle: config.pool.idle
        }
      }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('../models/user.model')(sequelize,Sequelize);
db.role = require('../models/role.model')(sequelize,Sequelize);
db.translation = require('../models/translationhistory.model')(sequelize,Sequelize);
db.task=require('../models/task.model')(sequelize,Sequelize);

// through, foreignKey, otherKey, is for a new table user_roles as 
// connection between users and roles table via their primary key as foreign keys.
db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
  });
  db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
  });

// db.translation.belongsTo(db.user);  
  
  db.ROLES = ["user", "admin", "moderator"];
  
  module.exports = db;
  