const express = require('express');

const app=express();
const port=3001;

//list of student JASON details
const students=require('./DB/studentDB')

app.get('/stu',(req,res)=>{
    res.send(students);
});

app.get('/stu/:id',(req,res)=>{
    const id=req.params.id
    //console.log(id)
    const result=students.find(student=>student.regNo == id);
    res.send(result);
});

//filter student by gender
app.get('/stu/gender/:gen',(req,res)=>{
    const gender=req.params.gen
    const result=students.filter(student=>student.gender == gender);
    res.send(result);
});

//display student not found
app.get('/stu/:id',(req,res)=>{
    const id=req.params.id
    //console.log(id)
    const result=students.find(student=>student.regNo == id);
    //check student is available or not,if not return an error message
    if(result){
        res.send(result);
    } 
    else{
        res.status(404).send('this is not availble');
    }  
});

//search by name
app.get('/stu/name/:name', (req, res) => {
    const name = req.params.name;
    const result = students.filter(student => student.name == name);

    if (result.length > 0) {
        res.send(result);
    } else {
        res.status(404).send('Student not found');
    }
});

app.listen(port,()=>{
    console.log(`Server is running on${port}`);
})