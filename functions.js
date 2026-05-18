function vowel (str){
    let count = 0;
    for (const char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}

vowel("hello world");


// by arrow function

const count = (str) => {
    let count = 0;
    for (const char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);

}

count("hello world");

let num = [2, 3, 4, 5 , 6];

num.forEach((num) => {
    console.log(num * num);
})


let marks = [80, 90, 70, 85, 95, 97];
let newMarks = marks.filter((val) =>{
    return val > 90;
});
console.log(newMarks);
console.log(marks);

let n = prompt("Enter a number:");
let arr = [];

for ( let i=1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((prev, curr) =>{
    return prev + curr;
});
console.log(sum);
let fact = arr.reduce((prev, curr) =>{
    return prev * curr;
});
console.log(fact);

