const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


//create the app for rest api using express
const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

// use the cors body parser in express app 
app.use(cors(corsOptions));
app.use(bodyParser.json());// parsing requesting content type to application/json 
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
  res.send("Todo app is running"); 

})
app.get("/",(req,res)=>{
    res.json({status:"ok",message:"Welcome to Node js app."});

});


const PORT = process.env.PORT || 8080;//setting up the ports for application
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});
const db = require('./app/models/index');
const Role = db.role;
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/translationshistory.routes')(app);
require('./app/routes/task.routes')(app);

db.sequelize.sync({force:true}).then(()=>{
    console.log("Drop and Resync Db");
    initial(); // creates 3 rows in database
})
const initial = ()=> {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }

