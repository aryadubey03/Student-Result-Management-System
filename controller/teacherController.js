const Teacher=require('../models/teacherModel')
const Student=require('../models/studentModel')

const getTeacher=(req,res)=>{
    res.render('teacherLogin')
}

const postTeacher=(req,res)=>{
    const teacherDetails=Teacher.findOne({email:req.body.email,password:req.body.password})
    if(!teacherDetails){
        res.render('teacherLogin')
    }
    res.render('teacherview');
}

const getAll=async(req,res)=>{
    const allDetails=await Student.find();
    res.render('viewAll',{student:allDetails})
}

const editStudent_get=async(req,res)=>{
    const studentID=await Student.findById(req.params.id)
    res.render('edit',{student:studentID})
}

const editStudent_post=async(req,res)=>{
    await Student.findByIdAndUpdate(req.params.id,req.body)
    res.redirect('viewAll')
}

const deleteStudent=async(req,res)=>{
    await Student.findByIdAndDelete(req.params.id)
    res.redirect('viewAll')
}

const addStudentGet=(req,res)=>{
    res.render('addStudent')
}

const addStudentPost=async(req,res)=>{
    const newStudent=new Student({
        name:req.body.name,
        rollno:req.body.roll,
        score:req.body.score
    })
    await newStudent.save();
    res.render('teacherview')
}

module.exports={
    getTeacher,
    postTeacher,
    getAll,
    deleteStudent,
    editStudent_get,
    editStudent_post,
    addStudentGet,
    addStudentPost
}