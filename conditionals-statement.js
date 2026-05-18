let grade = prompt("Enter your grade: ");
// conditions starts from here

if (grade >= 80 && grade <= 90 ){
    console.log("You got an A");
} else if(grade >= 70 && grade < 80){
    console.log("You got a B");
} else if(grade >= 60 && grade <= 70){
    console.log("You got a C");
} else if(grade >= 50 && grade <= 60){
    console.log("You got a D");
} else {
    console.log("You got an F");
}