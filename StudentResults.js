// Arrays
const students = [
    { name: "Ali", score: 85 },
    { name: "Zaid", score: 42 },
    { name: "Hamza", score: 78 },
    { name: "Umer", score: 95 },
    { name: "Mustafa", score: 59 }
];
// Empty Arrays to hold results
let passingStudents = [];
let failingStudents = [];

//loop
for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];

// if-else part
    if (currentStudent.score >= 60) {
        // Adding a new property to the object on the fly
        currentStudent.status = "Pass";
        passingStudents.push(currentStudent.name);
    } else {
        currentStudent.status = "Fail";
        failingStudents.push(currentStudent.name);
    }
}

// final results
console.log("Passed:", passingStudents.join(", "));
console.log("Needs Improvement:", failingStudents.join(", "));