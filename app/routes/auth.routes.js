const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const  apiVersionPrefix = require("../config/verison");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    apiVersionPrefix+"auth/signup",
    [verifySignUp.verifyRequestHasEmailAndUsername,
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post(apiVersionPrefix+"auth/signin", controller.signin);
};