const mongoose=require('mongoose')

const studentModel=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        rollno:{
            type:Number,
            required:true
        },
        score:{
            type:Number
        } 
    }
)

module.exports=mongoose.model("Student",studentModel)