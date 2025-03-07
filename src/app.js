const express=require("express")
const app=express();
const connect=require('./config/database')
const User=require("./models/user");

app.post("/signup",async(req,res)=>{
    const user=new User({
        firstName:"John",
        lastName:"Doe",
        email:"john@gmail.com"
    })
    try{
        await user.save();
        res.send("User created");
    }catch(err){
        console.error(err);
        res.send("An error occured in creating user");
    }
   
})

connect().then(()=>{
    console.log("Connected to database");
    app.listen(3000,()=>{
        console.log("Server started ");
    });
})
.catch((err)=>{
    console.error("Error connecting to database",err);
})