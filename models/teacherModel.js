const mongoose=require('mongoose')

const teacherModel=mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("Teacher",teacherModel)