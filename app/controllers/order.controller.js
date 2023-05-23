
const db = require("../models");
const User = db.user;
const Order = db.order;
const OrderProduct = db.orderProduct;


exports.createOrder = (req, res) => {
  const { userId, totalPrice,products, status, shippingAddress, totalItems, description } = req.body;
  if (!userId) {
    return res.send({ status: "error", message: "User Id is required" });
  }
  if (!products) {
    return res.send({ status: "error", message: "Product is required" });
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
        Order.create({
          userId: userId,
          totalItems: totalItems,
          status: status,
          shippingAddress: shippingAddress,
          totalPrice: totalPrice,
          description: description,
        }).then((data) => {

            addProductsInOrderProductTable(products,res,data.dataValues.id).then((data)=>{
                // res.send({ status: "ok", data: data })
          res.send({ status: "ok", data: "Order was Successfull" });


            })
        }).catch(err => {
          res.status(500).send({ message: err.message });

        });

      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


async function addProductsInOrderProductTable(products,res,orderId){
    try{
        console.log("PRODUCTS", products)
      if(products.length == 0){
        return;
      }
      products.map(product=>{
        OrderProduct.create({
          orderId: orderId,
          productId: product.productId,
          amount: product.amount,
          quantity: product.quantity,
          price: product.price
        }).then((data) => {
          res.send({ status: "ok", data: "Order was Successfull" });
        //   return "ok";
        }).catch(err => {
        //   res.status(500).send({ message: err.message });
          return err;
      
        })
      })
    
    } catch(err){
      res.send({status:"error",data:"Something went wrong"});
    }
    
    }




exports.getOrderItems = (req, res) => {
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

        Order.findAll({
          where: {
            userId: req.body.userId
          }
        }).then((data) => {
          // console.log("this is got in data",data);
          res.send({ status: "ok", data: data });
        })



      //   res.send({status:"ok",data:"Successfully created UserCart"})  

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

