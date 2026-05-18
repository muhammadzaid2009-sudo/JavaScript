// for (let i = 1; i<=100; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

/* ===================QUESTION 2===================
 CREATE A GAME WHERE YOU START WITH ANY RANDOM GAME NUMBER. ASK THE USER TO KEEP GUESSING THE NUMBER UNTIL THEY GUESS IT RIGHT. 
 IF THE USER GUESS IS HIGHER THAN THE GAME NUMBER, THEN TELL THEM THAT THEIR GUESS IS TOO HIGH.
  IF THE USER GUESS IS LOWER THAN THE GAME NUMBER, THEN TELL THEM THAT THEIR GUESS IS TOO LOW.
 ONCE THE USER GUESSES THE NUMBER RIGHT, CONGRATULATE THEM AND TELL THEM HOW MANY ATTEMPTS IT TOOK TO GUESS THE NUMBER.*/

 let game_num = 16;

let user_num =  prompt("Welcome to the Guessing Game! Try to guess the number.");

while (user_num != game_num ) {
   user_num =  prompt("Wrong guess! Try again.");
}
console.log("Congratulations You got the correct guess.....")