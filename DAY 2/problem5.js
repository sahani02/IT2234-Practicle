//Define 10 student JSON store it in array
let students = [
    { name: "Alice", gender: "Female", course: "IT", GPA: 3.8 },
    { name: "Bob", gender: "Male", course: "Business", GPA: 3.2 },
    { name: "Carol", gender: "Female", course: "IT", GPA: 3.5 },
    { name: "David", gender: "Male", course: "Engineering", GPA: 3.9 },
    { name: "Emma", gender: "Female", course: "Business", GPA: 3.7 },
    { name: "Frank", gender: "Male", course: "IT", GPA: 3.1 },
    { name: "Grace", gender: "Female", course: "IT", GPA: 3.9 },
    { name: "Hank", gender: "Male", course: "Business", GPA: 2.8 },
    { name: "Ivy", gender: "Female", course: "Engineering", GPA: 3.6 },
    { name: "Jack", gender: "Male", course: "IT", GPA: 3.4 }
];

//find the female stuedents
let femaleStudents = [];
for (let i = 0; i < students.length; i++) {
    if(students[i].gender =="Female") {
        femaleStudents.push(students[i].name)
    }
}
console.log("Female Students: "+femaleStudents)

//find the students who are follong IT course
let ITstudent=[]
for (let i = 0; i < students.length; i++) {
    if (students[i].course == "IT") {
        ITstudent.push(students[i].name)
    }
}
console.log("IT Students: "+ITstudent)


//find the max  
let maxGPA=0
for (let i = 0; i < students.length; i++) {
    if (students[i].GPA>maxGPA) {
		maxGPA=students[i].GPA
    }
}
console.log("Max GPA: "+maxGPA)

//average GPA average GPA among the students
let sum=0
for (let i = 0; i < students.length; i++) {
    sum=sum+students[i].GPA
}

console.log("Average GPA: "+sum/students.length)