let stu_marks = [40,50,67,48,87,95];
let sum = 0;

for (let val of stu_marks){
    sum = sum + val;
}
let avg = sum / stu_marks.length;
console.log(`The Average Marks of Students is : ${avg}`);



let prices = [40,70,250,170,90,650];
let i = 0;


for (let i = 0; i < prices.length; i++){
    console.log(prices[i]);

    let offer = prices[i] / 10;
    prices[i] -= offer;

}
console.log(prices);


// arrays methods

let companies = ["Google", "Facebook", "Amazon", "Apple", "Microsoft"];
companies.splice(2,1,"Tesla");
companies.push("amazon");
console.log(companies);
