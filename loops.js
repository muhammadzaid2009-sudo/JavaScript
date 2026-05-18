// For loop example
// let sum = 0;
// for(let i=1; i<=6; i++){
//     sum = sum + i;
// }
// console.log("The sum of the first 6 natural numbers is: " + sum);

// While loop example.

// let i = 1;

// while(i <= 10){
//     console.log("The number is: " + i);
//     i++;
    
// }

// Do-while loop example

// let i = 2;

// do{
//     console.log("The number is: " + i);
//     i++;
// } while(i <= 1);

// for-of loop example

// let str = "Zaid is a good boy";

// for(let char of str){
//     console.log(char);
// }

// for-in loop example

let student = {
    name : "Zaid",
    age : 20,
    grade : "A",
    city : "Karachi"
};

for (let key in student){
    console.log("Key = ",key, "Value = ", student[key],);
}