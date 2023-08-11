//const asyncHandler=require('express-async-handler')
const Student=require('../models/studentModel')

const getStudent=(req,res)=>{
    res.render('studentLogin')
}

const postStudent=async(req,res)=>{
    const individualStudent=await Student.findOne({rollno:req.body.roll})
    if(!individualStudent){
      res.render('studentLogin')
    }  
    res.render('studentview',{one:individualStudent})
}

module.exports={
    getStudent,
    postStudent
}
