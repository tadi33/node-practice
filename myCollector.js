const myFirstFunction = require("./myFirst");
const mySecondFunction = require("./mySecond");
const fs = require("fs");


console.log(myFirstFunction(5));
console.log(mySecondFunction(5));

const inputNumber = 14;
const result = myFirstFunction(14);

const txtMessage = `The value of ${inputNumber} when passed through the myMultiplier function is ${result}`;

fs.writeFile("results.txt", txtMessage, (err) => {
    if (err){
        console.log("error writing to file", err);
        
    }else{
        console.log("Result successfully written to results.txt!");
        
    }
});


const result2 = mySecondFunction(14);
const textMessage = `\nThe value of ${inputNumber} when passed through the myMultiplier function is ${result2}`;

fs.appendFile("results.txt", textMessage, (err) =>{
    if(err){
        console.log("this is error", err);
        
    }else{
        console.log("execute successfully");
        
    }
});
