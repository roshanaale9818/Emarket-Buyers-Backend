const userCarts = require('./usercart.routes');
const order = require('./order.routes');
module.exports = function (app){
    userCarts(app);
    order(app);
}