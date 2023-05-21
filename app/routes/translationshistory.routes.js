const { authJwt } = require("../middleware");
const translationController = require("../controllers/translation.controller");
module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
          );
          next();
    });
    app.get("/api/translations",
    [authJwt.verifyToken, authJwt.isAdmin],translationController.getAlltranslations);

    app.post("/api/gettranslation", [authJwt.verifyToken, authJwt.isAdmin],translationController.getTranslationById);
    app.post("/api/createtranslation",[authJwt.verifyToken],translationController.createTranslation);

}