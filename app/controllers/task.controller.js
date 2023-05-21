
const db = require("../models");
const User = db.user;
const Task = db.task;

// const Op = db.Sequelize.Op;
exports.createTask = (req, res) => {
    User.findOne({
      where: {
        //userId is required
        id: req.body.userId || null
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ status:"error",message: "User Not found." });
        }
        else

        Task.create({
            userId:req.body.userId,
            status:req.body.status,
            name:req.body.name,
            description:req.body.name,
            originText:req.body.originText

          }).then((data)=>{
            res.send({status:"ok",data:"Successfully created task"})  

          })

  
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.getTasksByUser = (req, res) => {
    User.findOne({
      where: {
        //userId is required
        id: req.body.userId || null
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ status:"error",message: "User Not found." });
        }
        else

        Task.findAll({
            where: {
              userId: req.body.userId
            }
          }).then((task)=>{
            // console.log("this is got in task",task);
            res.send({status:"ok",data:task});
          })

       

    //   res.send({status:"ok",data:"Successfully created Task"})  
  
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };


  // deleteTask 
  exports.deleteTask= (req, res) => {
    User.findOne({
      where: {
        //userId is required
        id: req.body.userId || null
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ status:"error",message: "User Not found." });
        }
        else

        console.log("REQUEST BODY",req.body)
        Task.destroy({
            where: {
              id: req.body.taskId,
              userId:String(req.body.userId)
            }
          }).then((task)=>{
            // console.log("this is got in task",task);
            res.send({status:"ok",message:"Successfully deleted."});
          })

       

    //   res.send({status:"ok",data:"Successfully created Task"})  
  
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };



  //updateTaskStatus
  exports.updateTask = (req,res)=>{
        User.findOne({
      where: {
        //userId is required
        id: +req.body.userId || null
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ status:"error",message: "User Not found." });
        }
        else


        console.log("updating task")

        // update in task table 
        Task.update({ status:req.body.status,},{
           
            where:{
              id:req.body.id,
              userId:req.body.userId
            }
        
          }).then((data)=>{
            res.send({status:"ok",data:"Successfully updated task"})  
          })

     
  
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  
  }