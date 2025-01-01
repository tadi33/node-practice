console.log("My first module");

function myMultiplier(number) {
    return number * 2
}

let multiplyByTwo = myMultiplier(4);
console.log(multiplyByTwo);

module.exports = myMultiplier