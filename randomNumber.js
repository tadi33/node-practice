function random(){
    return Math.floor(Math.random() * 101);
};

let randomNumber = random();
console.log(randomNumber);


module.exports = random;