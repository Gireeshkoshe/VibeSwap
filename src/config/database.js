const mongoose=require("mongoose")
async function connect(){
    mongoose.connect("mongodb+srv://admin:Ql7ZnqTZM7u7Ja4s@cluster0.hwmccod.mongodb.net/VibeSwap")
}

module.exports=connect;