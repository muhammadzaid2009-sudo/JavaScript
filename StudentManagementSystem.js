// step no 1 we will create a empty array to store a students 
let students = [];

// step no 2 then we will put function to add a student
function addStudent(id,name,marks) {
    let student = {
        id:id,
        name:name,
        marks:marks
    };
    students.push(student);
}

//step no 3 then we will put function to display all students.

function displayStudents() {
    console.log("All Students:");
    students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.name}, Marks: ${student.marks}`);
    });
}

//step 4 we will put function to find student by ID
function findStudentByid(id) {
    let Student = students.find(s => s.id === id);
    if(student){
        console.log("Student Found:",student);
    }else{
    console.log("Student Not Found");
    }
    }

    //step 5: we will put function to calculate average marks
    function calculateAverage(){
    let total = 0;
    students.forEach(s => total += s.marks);
    let avg = total/students.length;
    console.log("Average Marks:",avg);
    }

    //step no. 6: Function to find topper 
    function findTopper(){
    let topper = students.reduce((max,s)=>(s.marks>max.marks ? s:max));
    console.log("Topper:",topper);
    }

    //step no.7: Function to filter passed Students
    function getPassedStudents(){
    let passed = students.filter(s=>s.marks>=50);
    console.log("Passed Students:",passed);
    }