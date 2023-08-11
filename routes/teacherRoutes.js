const express=require('express')
const router=express.Router()
const {getTeacher,postTeacher,getAll,deleteStudent,editStudent_get,editStudent_post,addStudentGet,addStudentPost}=require('../controller/teacherController')

router.route('/').get(getTeacher)

router.route('/').post(postTeacher);

router.route('/viewAll').get(getAll)

router.route('/delete/:id').get(deleteStudent)

router.route('/edit/:id').get(editStudent_get)

router.route('/edit/:id').post(editStudent_post)

router.route('/addStudent').get(addStudentGet)

router.route('/addStudent').post(addStudentPost)

module.exports=router;