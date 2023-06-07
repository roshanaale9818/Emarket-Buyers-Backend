const { authJwt } = require("../middleware");
const _controller = require("../controllers/order.controller");
const apiVersionPrefix = require("../config/verison");
module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
          );
          next();
    });
    app.post(apiVersionPrefix+"order/getOrderItems",
    [authJwt.verifyToken],_controller.getOrderItems);

    app.post(apiVersionPrefix+"order/addOrderItems", [authJwt.verifyToken],_controller.createOrder);

    app.post(apiVersionPrefix+"order/getOrderProductItems",
    [authJwt.verifyToken],_controller.getOrderProductList);

}