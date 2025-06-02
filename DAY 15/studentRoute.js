const express = require('express')
const router = express.Router()
const Student = require('../models/students')
const { mongoose } = require('mongoose')

router.get('/', async (req,res)=>{
    try {
        const results = await Student.find().populate('degreeId')
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No data Found !")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }
})

router.get('/course', async (req,res)=>{
    try {
        const results = await Student.find().populate('degreeId').populate('enroled_courses')
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No data Found !")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }
})



module.exports=router