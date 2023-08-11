const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        const connect=await mongoose.connect("mongodb+srv://1032200409:vijaya96@cluster0.o4wshyk.mongodb.net/studentManagement?retryWrites=true&w=majority")
        console.log("Database connected")
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectDB;