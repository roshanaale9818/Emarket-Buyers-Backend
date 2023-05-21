
const db = require("../models");
const User = db.user;
const Translation = db.translation;
exports.getAlltranslations = (req,res)=>{
    Translation.findAll(
        {
            //for setting up the DTO
            // we dont want to send all the fields from database such as password to user
            // attributes:['id','username','email','createdAt']
        }
    ).then((data)=>{
        // console.log("This is response",users);
       if(data){
        //send the transaltions
        res.send({status:"ok",data:data});
    }else{
        // if no translation we send the no transaction found 
        res.send({status:"ok",data:"No translation found"});
    }
    })
} 

exports.getTranslationById = (req,res)=>{
    console.log("this is userId", req)
    Translation.findAll({
        where: {
          userId: req.body.userId
        }
      }).then((translation)=>{
        console.log("this is got",translation);
        res.send({status:"ok",data:translation});
      })
};
exports.createTranslation = (req, res) => {
    User.findOne({
      where: {
        id: req.body.userId
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ status:"error",message: "User Not found." });
        }
        else{
            Translation.create({
                userId:req.body.userId,
                translatedText:req.body.translatedText,
                translatedTo:req.body.translatedTo
              })

          res.send({status:"ok",data:"Successfully created translation"})    
        }
  
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };