const mongoose=require("mongoose")
async function connect(){
    mongoose.connect()
}

module.exports=connect;
