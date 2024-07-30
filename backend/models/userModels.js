const mongoose =require('mongoose')
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Nombre requerido'],
    },
    email:{
        type:String,
        required:[true,'Email requerido'],
    },
    password:{
        type:String,
        required:[true,'Password requerido']
    },
},
    {timestamps:true}
)
module.exports=mongoose.model('user',userSchema)