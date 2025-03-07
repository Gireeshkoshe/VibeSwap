const moongose=require('mongoose');
const userSchema= moongose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
    age:{
        type:Number, 
    },
    gender:{
        type:String,
    }
})
module.exports=moongose.model("User",userSchema);