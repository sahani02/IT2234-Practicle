const students= require('./studentDB')

function getstudents(){
    return students;
}

function getStudent(id){
    return students.find((student)=>student.regNo==id)
}

function getByGender(gender){
    return students.filter((steudent)=>steudent.gender==gender)
}

function getByCourse(course){
    return students.filter((student)=>student.course==course)
}
module.exports={getStudent,getstudents,getByGender,getByCourse}