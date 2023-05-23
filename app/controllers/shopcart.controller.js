
const db = require("../models");
const User = db.user;
const ShopCart = db.shopcart;

// const Op = db.Sequelize.Op;
exports.createCart = (req, res) => {
    User.findOne({
      where: {
        //userId is required
        id: req.body.userId || null
      }
    })
      .then(user => {
        if (!user) {
            // status(404)
          return res.send({ status:"error",message: "User Not found." });
        }
        else

        ShopCart.create({
            userId:req.body.userId,
            status:req.body.status,
            name:req.body.name,
            description:req.body.name,
          }).then((data)=>{
            res.send({status:"ok",data:"Successfully created ShopCart"})  
          });

  
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };


 async  function checkIfUserHasCart(userId){
    let userCart= null;
  const user = await  ShopCart.findAll({
        where: {
          userId: req.body.userId
        }
      }).then((ShopCart)=>{
        userCart = ShopCart;
        // console.log("this is got in ShopCart",ShopCart);
       
      })
      if(userCart){
        console.log("USER CART", userCart);
        return true;
      }
      else {
        return false;
      }
  }

  exports.getCartItems = (req, res) => {
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

        ShopCart.findAll({
            where: {
              userId: req.body.userId
            }
          }).then((ShopCart)=>{
            // console.log("this is got in ShopCart",ShopCart);
            res.send({status:"ok",data:ShopCart});
          })

       

    //   res.send({status:"ok",data:"Successfully created ShopCart"})  
  
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };


  // deletecartItem 
  exports.deleteCart= (req, res) => {
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

        // console.log("REQUEST BODY",req.body)
        ShopCart.destroy({
            where: {
              id: req.body.ShopCartId,
              userId:String(req.body.userId)
            }
          }).then((ShopCart)=>{
            // console.log("this is got in ShopCart",ShopCart);
            res.send({status:"ok",message:"Successfully deleted."});
          })

       

    //   res.send({status:"ok",data:"Successfully created ShopCart"})  
  
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };



  //updateShopCartStatus
  exports.updateCart = (req,res)=>{
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


        console.log("updating ShopCart")

        // update in ShopCart table 
        ShopCart.update({ status:req.body.status},{
           
            where:{
              id:req.body.id,
              userId:req.body.userId
            }
        
          }).then((data)=>{
            res.send({status:"ok",data:"Successfully updated ShopCart"})  
          })

     
  
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  
  }