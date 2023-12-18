// section 1 //

//Normal functin
function run() {
    return "I'm running";
}

//Anonymous function
let runAnony = function() {
    return "I'm running... Anonymously";
};

//Arrow function equivalent
let runHarder = () => "I'm running... harder";  // () => expression

console.log(`   Normal function output: ${run()}\nAnonymous function output: ${runAnony()}\n    Arrow function output: ${runHarder()}\n`);





// Section 2 //

let myName = "Takamura";

//Normal function
function sayMyName(name) {
    return `Yo! ${name}`;
}

//Anonymous function
let sayMyNameAnony = function(name) {
    return `Opps! I don't know that your name is ${name}`;
}

//arrow function
let sayMyNameLouder = (name) => `Heayyyyy, ${name}!. Whattttt's Uppppp!`;   // param => expression

console.log(`   Normal function output: ${sayMyName(myName)}\nAnonymous function output: ${sayMyNameAnony(myName)}\n    Arrow function output: ${sayMyNameLouder(myName)}\n`);





// section 3 //

let myAge = 23;

//Normal function
function info(name, age) {
    return `Hi ${name}, you are ${age} years old!`;
}

//Anonymous function
let infoAnony = function(name, age) {
    return `Heay ${name}, I really don't know that you are ${age} years old!`;
}

//Arrow function
let infoShort = (name, age) => `${name} - ${age}`;  // (param_1, param_2) => expression

console.log(`   Normal function output: ${info(myName, myAge)}\nAnonymous function output: ${infoAnony(myName, myAge)}\n    Arrow function output: ${infoShort(myName, myAge)}\n`);





// section 4 //

// Same Arrow function but using Statement instead of Expression
// You can also add multiple lines of code which is impossible in the case of Expression

let arrowFunctionUsingStatement = () => {
    myName = "鷹村";
    return `My name is ${myName}`;
}

console.log(arrowFunctionUsingStatement())
