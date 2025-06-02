const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    _id:{type:String, require:true}, 
    empName:{type:String, require:true},
    empPosition:{type:String, require:true},
    empDOB:{type:Date},
    empGender:{type:String},
    prjId:[{
        type:String,
        require:true,
        ref:'projects'
    }],
    depId:{
        type:String,
        require:true,
        ref:'departments'
    }
})

const Employee = mongoose.model('employees', employeeSchema)
const emp1 = new Employee({ 
    _id:'IT0001', 
    empName:'Yenuli',
    empDOB:'02-10-2000',
    empPosition:'Engineer',
    empGender:'Female',
    prjId:['PRJ0001', 'PRJ0002'],
    depId:'DIT01'
})
emp1.save()

module.exports = Employee