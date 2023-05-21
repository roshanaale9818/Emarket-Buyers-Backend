const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if(req.body.isAdmin==="007"){
        //3 is admin as we have coded in server.js
        user.setRoles([3]).then(() => {
          res.send({ status:"ok",message: "User was registered successfully!" });
        });
      }
       else{
         // user role = 1
         user.setRoles([1]).then(() => {
          res.send({ status:"ok", message: "User was registered successfully!" });
        });
       }
      // }
    })
    .catch(err => {
      res.status(500).send({status:"error", message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        // status(404)
        return res.send({ status:"error",message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        // status(401)
        return res.send({
          status:"error",
          accessToken: null,
          message: "Invalid Credential!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secretKey, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          status:"ok",
          data:{
            id: user.id,
            username: user.username,
            email: user.email,
            roles: authorities,
            accessToken: token
          }
       
        });
      });
    })
    .catch(err => {
      res.status(500).send({ status:"error",message: err.message });
    });
};