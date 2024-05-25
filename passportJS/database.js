const mongoose=require('mongoose')
require('dotenv').config()
exports.connectMongoose=()=>{
    mongoose.connect(process.env.MONGODB_URI)
    .then((e)=>console.log(`connected to mongoDB:${e.connection.host}`))
    .catch((e)=>console.log(e))
}
const userSchema=new mongoose.Schema({
        name:String,

        username:{
            type:String,
            required:true,
            unique:true
        },

        password:String,
    })
    exports.User=mongoose.model('User',userSchema);