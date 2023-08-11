const express=require('express')
const expresslayouts=require('express-ejs-layouts')
const connectDB=require('./config/dbconnection')
const app=express()
connectDB()

const PORT=process.env.PORT || 3000;

app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/jpg',express.static(__dirname+'public/jpg'))
app.set('view engine','ejs')

app.use(expresslayouts)
//app.use('layout','./layouts/layout')

app.use(express.json());
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.render('index')
})
app.use('/teacherLogin',require('./routes/teacherRoutes'))
app.use('/studentLogin',require('./routes/studentRoutes'))
app.listen(PORT,()=>{
    console.log(`app is listening at ${PORT}`)
})