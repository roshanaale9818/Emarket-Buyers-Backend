const db = require("../models");
const User = db.user;
exports.getAllUser=(req,res)=>{
User.findAll(
    {
        //for setting up the DTO
        // we dont want to send all the fields from database such as password to user
        attributes:['id','username','email','createdAt']
    }
).then((users)=>{
    // console.log("This is response",users);
   if(users){
    //send the transaltion
    res.send({status:"ok",data:users});
}else{
    // if no users we send the no users found 
    send({status:"ok",data:"No users found"});
}
})
}