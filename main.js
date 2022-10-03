//this is a comment.

//there are 4 types of data types in javascript.
// 1.string data type : string data is used in quotes 
// typeof "Simon"; //here it will console log the type of data which is a string.
// typeof 5; //here it will console log the data type which is a number.
// typeof true; //here it will console log the data type which is a boolean.

// //variable : if variable is more then 1 word then use camel case which is first word is written in small letters and 2nd letter 1st word is written in capital.
// let myNumber = 5;
// myNumber + 2;

// // first javascript program this will pop up on the page.
// alert('Hello World!');

// console.log("Hello World!");
// console.log(typeof "Simon");
// console.log(typeof 42);
// console.log(typeof true);


//strings
// here const is a keyword myVariable is a variable and Mathematics is a value assigned to a variable.
const myVariable = "Mathematics"
// the length property : length property uses dot notation;length property will define the number of letters in the value of variable .
console.log(myVariable.length);
console.log(myVariable.charAt(6)); //here value of 6 will be small letter a.
console.log(myVariable.indexOf("M"));//here it will console the index number of the value of variable.and M is of Mathematics.
console.log(myVariable.slice(5));//here it will console log matics which is last 5 letters of Mathematics.
console.log(myVariable.toUpperCase());//here string will be written in uppercase.
console.log(myVariable.toLowerCase());//here string will be written in lowercase.
console.log(myVariable.includes("mat"));//includes method returns boolean data.here it will log true becuz this are string caracters.
console.log(myVariable.split("e")); //here split method splits the string from e and returns "Math" "matics".
console.log(myVariable.split(""));//empty quotes will return string like this ["M","a","t","h","e","m","a","t","i","c","s"].
console.log("simon,dave,lace".split(","));//here it will return ["simon","dave","lace"]


//Numbers
// an integer is a whole number.
const myNumber = 42;
const myFloat = 42.0151;
console.log(myFloat);
console.log(myNumber);

const myString = "42.123abc";
console.log(myString + 3);
// we can change string into number by using this function
console.log(Number(myString)+ 3);
//  The Number.isInteger() method determines whether the passed value is interger or not
console.log(Number.isInteger(myNumber));
// NUmber.parseFloat() methid determines whether the passed value is float or not.
console.log(Number.parseFloat(myFloat));
// .toFixed() method formats a number according to how many decimal points you provide as parameter which is here (2).
console.log(Number.parseFloat(myString).toFixed(2));
console.log(myFloat.toFixed(2));//here myFloat value is 42.0164 i've assigned parameter(2)so the ans will be 42.02 because after 1 the number 6 is greater then 5 thats why 1 will become 2.
//Number.parseInt() methods removes decimal points
console.log(Number.parseInt(myFloat));
// tostring() methods returns string representing the number [when we console log string is in white color and number in purple.so here the number is in white color.]
console.log(myFloat.toString());
//for comparing we can use typeof to see its number or an integer.
console.log(typeof myFloat.toString());
console.log(typeof Number.parseFloat(myString));
// Number.isNan() method determines the value passed is Nan and is number.


//Math Methods and properties
console.log(Math.PI);
// this property returns the value of pie.
console.log(Math.trunc(Math.PI));//here all the decimal points will be removed from the pi.
console.log(Math.round(3.5));//Math.round rounds up the number to the nearet integer.
console.log(Math.ceil(Math.PI));//Math.ceil will round up the number.
console.log(Math.floor(Math.PI));//.floor rounds down the number.
//.pow() method takes two arguments
console.log(Math.pow(5,2));
// Math.min() method returns the smallest number from the assigned numbers.
console.log(Math.min(2,4,6));
// Math.max() method returns the largest number from the assigned numbers.
console.log(Math.max(2,4,6));
// Math.random() method returns any random number from 0 to 1.
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);//choose floor() instead of ceil while generating the random number from 1 to 10.

const anyName = "Mehrunnisa";
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));


// conditionals
let customerIsBanned = false;
let soup = 'chicken noodle soup';
let crackers = true;
let reply;
if(customerIsBanned){s
    reply = "No soup for you!"
}
else if(soup) {
    reply = `Here's your order of ${soup} & crackers.`;
} else {
    reply = "Sorry we're out of soup."
}
console.log(reply);

let testScore = 89;
let collegestudent = true;
let grade;
if (testScore >= 90) {
    grade = 'A';
} else if (testScore >= 80) {
    grade = 'B';
} else if (testScore >= 70) {
    grade = 'C';
} else if (testScore >= 60) {
    grade = 'D';
    // Nested if statement
} else {
    if (collegestudent) { //We can nest if statement in the else.
        grade = 'U';//if the marks are not satisfied then it will be console.
    } else {
        grade = 'F';
    }
}
console.log(grade);


//Conditionals: Switch statements
// syntax
switch (Math.floor(Math.random() * 5 + 1)){ //this will generate random value from 1 to 5
    case 1:
        console.log(1);
        break;
   case 2:
        console.log(2);
        break;
    case 3:  
        console.log(3);
        break;
    // can add as many cases you want
    // if no cases matches default runs.
    default:
        console.log("No match");
}


// Ternary operators
let soup1 = "Chicken noodle soup";//we can remove the value of soup1 and we'll get sorry,we dont have soup today.
let response = soup1 ? "Yes, We have soup." : "Sorry, We don't have soup today";
console.log(response);

let soup2 = "Chicken noodle soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned 
? "Sorry, No soup for you!" 
: soup 
? `Yes, We have ${soup2} today`
: "Sorry, No soup today";
console.log(soupAccess);

// condition ? ifTrue : ifFalse

let testScore1 = 79;
let myGrade =
testScore1 > 89
? "A"
: testScore1 > 79
? "B"
: testScore1 > 69
? "C"
: "F"
console.log(`My test grade is ${myGrade}`);

// rock paper scissors game.
let playerOne = "paper";
let computer = "scissors";
let result =
playerOne === computer
? "Tie game!"
: playerOne === "rock" && computer === "paper"
? "computer wins"
: playerOne === "paper" && computer === "scissors"
? "computer wins"
: playerOne === "scissors" && computer === "rock"
? "computer wins"
: "playerOne wins"
console.log(result);


// user input
let myBoolean = confirm("ok === true/nCancel === false");
console.log(myBoolean);

 let Name = prompt("please enter your name");
 console.log(Name ?? "You didn't enter your name");//this ?? and then sentence is use so that it can tell if the value is false

//  this one is more reactive code.
 let Name1 = prompt("please enter your Mother's name");
 if (Name1) {
    console.log(Name1.length);//here it will log length of the variable Name1.
    console.log(Name1.trim().length);//here it will log by triming the variable.
    console.log(Name1.trim());//here it will trimed name for eg.hasina
 } else {
    console.log("You didn't enter name");
 }


//First interactive game.
let playGame = confirm("Shall we play Rock , Paper , Scissors");//this code is written 1st for asking user whether they want to play rock paper ans scissors    #1.
if (playGame) {
 
    let playerChoice = prompt("Please enter rock, paper, or scissors.");//this code is written to ask for players choice. //#5
    if (playerChoice) {
        let playerOnee = playerChoice.trim().toLowerCase();//we gave value toLowerCase so that we can check only specfic value that we have specified at first which is in small letters.  //#8
        if (playerOnee === "rock" || playerOnee === "paper" || playerOnee === "scissors") {//here now we have to find out whether it is rock paper or scissors.  //#9
           
            let computerChoice = (Math.floor(Math.random() * 3 + 1));//#10
            let computer = computerChoice === 1 ? "rock"//#11
            : computerChoice === 2 ? "paper"//#12
            : "scissors";//#13  //here we don't need to check possibility as this is 3rd and last possibility.

            let result;//#14
            playerOne === computer//15
            ? "Tie game!"//#16
            : playerOne === "rock" && computer === "paper"//#17
            ? `playerOne: ${playerOne}\nComputer: ${computer}\ncomputer wins!`//#18
            : playerOne === "paper" && computer === "scissors"//#18
            ? `playerOne: ${playerOne}\nComputer: ${computer}\ncomputer wins!`//#20
            : playerOne === "scissors" && computer === "rock"//#21
            ? `playerOne: ${playerOne}\nComputer${computer}\ncomputer wins!`//#22
            : `playerOne: ${playerOne}\nComputer${computer}\nplayerOne wins!`//#23
            alert(result);//#24
            let playAgain = confirm("play again?");//this is to ask player to play again.  //#25
            playAgain ? location.reload() : alert("Ok, Thanks for playing")//location.reload is used if player wants to play again.#26
        } else { //#6
            alert("You didn't enter rock paper or scissors.")
        }
    } else {
        alert("I guess you changed your mind. Maybe next time.");//#4
    }
} else { //#3
    alert("Ok, Maybe next time.");//for the user to say whether they want to play 
}    


// Loops
//1.while loop
let myNumb = 0;
while (myNumb < 50) {
    console.log(myNumb);
    myNumb++;
    // ++myNumb pre increment sign adds first and then consoles the variable.
}

let asam = "haid";
let counter = 0;
let letters;
while (true) {
    letters = asam[counter];
    console.log(letters);
    if (letters === "i") break;
    counter++;
}
//2.Do While Loop
let myInteger = 50;
do {
    console.log(myInteger);
} while (myInteger < 50);
//3.for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let myName = "Harry";
for (let i = 0; i <= myName.length; i++) { //.length is used so that can console length of the name.
    console.log(myName.charAt(i)); //charAt is used because h a r r y these are the caracters.
}


// Functions
function sum() {
    return 2 + 2;
}
console.log(sum());
// Functions with parameters
function sum1(num1,num2) {
    return num1 + num2;
} 
console.log(sum(2,6));
//another method
//in this eg number2 is not defined so we can use this code to define number2 also.
function add(number1,number2) {
    if(number2 === undefined){
        return number1 + number1;
    }
    return number1 + number2;
}
console.log(sum(2));

function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("Mehrunnisamullaji827@gmail.com"));

//this is second way of writting function 
const getUserNameFromEmailId = function (email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmailId("HasinaMullaji@gmail.com"));

//Arrow function
const getUserNameFromEmailIdd = (email) => {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmailIdd("Simon@GitHub.com"));

