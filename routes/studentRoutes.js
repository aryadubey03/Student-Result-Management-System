const express=require('express')
const {getStudent,postStudent}=require('../controller/studentController')
const router=express.Router()

router.route('/').get(getStudent)

router.route('/').post(postStudent)

module.exports=router;