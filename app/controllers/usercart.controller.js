
const db = require("../models");
const User = db.user;
const UserCart = db.usercart;

// const Op = db.Sequelize.Op;
exports.createCart = (req, res) => {
  const { userId, productName,products, status, quantity, price, description, imgUrl } = req.body;


  if (!userId) {
    return res.send({ status: "error", message: "User Id is required" });
  }
  if (!products || products.length <0) {
    return res.send({ status: "error", message: "Product item is required" });
  }

  User.findOne({
    where: {
      //userId is required
      id: req.body.userId || null
    }
  })
    .then(user => {
      if (!user) {
        // status(404)
        return res.send({ status: "error", message: "User Not found." });
      }
      else {
        UserCart.create({
          userId: userId,
          productName: productName,
          productId: productId,
          status: status,
          quantity: quantity,
          price: price,
          description: description,
          imgUrl: imgUrl
        }).then((data) => {
          res.send({ status: "ok", data: "Successfully created UserCart" })
        }).catch(err => {
          res.status(500).send({ message: err.message });

        });

      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};



async function checkIfUserHasCart(userId) {
  let userCart = null;
  const user = await UserCart.findAll({
    where: {
      userId: req.body.userId
    }
  }).then((UserCart) => {
    userCart = UserCart;
    // console.log("this is got in UserCart",UserCart);

  })
  if (userCart) {
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
        return res.status(404).send({ status: "error", message: "User Not found." });
      }
      else

        UserCart.findAll({
          where: {
            userId: req.body.userId
          }
        }).then((UserCart) => {
          // console.log("this is got in UserCart",UserCart);
          res.send({ status: "ok", data: UserCart });
        })



      //   res.send({status:"ok",data:"Successfully created UserCart"})  

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


// deletecartItem 
exports.deleteCart = (req, res) => {
  User.findOne({
    where: {
      //userId is required
      id: req.body.userId || null
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ status: "error", message: "User Not found." });
      }
      else

        // console.log("REQUEST BODY",req.body)
        UserCart.destroy({
          where: {
            id: req.body.UserCartId,
            userId: String(req.body.userId)
          }
        }).then((UserCart) => {
          // console.log("this is got in UserCart",UserCart);
          res.send({ status: "ok", message: "Successfully deleted." });
        })



      //   res.send({status:"ok",data:"Successfully created UserCart"})  

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};



//updateUserCartStatus
exports.updateCart = (req, res) => {
  User.findOne({
    where: {
      //userId is required
      id: +req.body.userId || null
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ status: "error", message: "User Not found." });
      }
      else


        console.log("updating UserCart")

      // update in ShopCart table 
      ShopCart.update({ status: req.body.status }, {

        where: {
          id: req.body.id,
          userId: req.body.userId
        }

      }).then((data) => {
        res.send({ status: "ok", data: "Successfully updated ShopCart" })
      })



    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

}