const { authJwt } = require("../middleware");
const taskController = require("../controllers/task.controller");
module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
          );
          next();
    });
    //get task by userid
    app.post("/api/task/getTasks",
    [authJwt.verifyToken],taskController.getTasksByUser);
    app.post("/api/task/createTask",[authJwt.verifyToken],taskController.createTask);
    app.post("/api/task/updateTask",[authJwt.verifyToken],taskController.updateTask);
    app.post("/api/task/deleteTask",[authJwt.verifyToken],taskController.deleteTask);


}