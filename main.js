//my current age
const myAge = 23;

//fist equivalence, first two years
let earlyYears = 2;
earlyYears *= 10.5;

//Calculate age after the two first years
let laterYears = myAge - 2; //myAge is constant
laterYears *= 4;

//checkpoint
console.log(`Early Years: ${earlyYears}`); //interpoletion concept for printing variables
console.log(`Later Years: ${laterYears}`); //interpoletion concept for printing variables

//Final Addition
let myAgeInDogYears = earlyYears + laterYears;

//Lower case name
let myName = 'JorgeBesnier'.toLowerCase();
console.log(`Name: ${myName}`)

//Final print
console.log(`My name is ${myName}. I Am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);



