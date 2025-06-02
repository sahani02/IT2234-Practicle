const express = require('express');
const app =express();
const port=3001;
const mongoose=require('mongoose');
const coursert = require('./routes/courseRoute')
const degreeert = require('./routes/degreeRoute')
const studentert = require('./routes/studentRoute')


app.use(express.json())
app.use('/course',coursert)
app.use('/degree',degreeert)
app.use('/student',studentert)
mongoose.connect('mongodb://localhost:27017/StudentInfoDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})