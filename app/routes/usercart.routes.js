const { authJwt } = require("../middleware");
const _controller = require("../controllers/usercart.controller");
const apiVersionPrefix = require("../config/verison");
module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
          );
          next();
    });
    app.post(apiVersionPrefix+"cart/getcartitems",
    [authJwt.verifyToken],_controller.getCartItems);

    app.post(apiVersionPrefix+"cart/addcartitems", [authJwt.verifyToken],_controller.createCart);
    app.post(apiVersionPrefix+"cart/deletecartitem", [authJwt.verifyToken],_controller.deleteCartItem);

    // app.post(apiVersionPrefix+"cart/addcartitems", [authJwt.verifyToken],_controller.createCart);


}