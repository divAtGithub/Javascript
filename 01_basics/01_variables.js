// variables -> let, const, var

let companyName = "Hitachi"; // it has a block scope
const companyId = 87648; // constant value
var country = "Japan"; // old way to declare variable -> global scope, functional scope
continent = "Asia"; // can also declare variable like this

// const companyId = 87897;   // can't redeclare a const variable.

//let has a block scope (by block we mean this -> { }), we will use let for most of our variable declaration.
if(true){
    let totalDataReceived = 100;
    console.log(totalDataReceived); // prints 100 to console. 
}
//console.log(totalDataReceived); // will throw an error of variable is not defined.


//var has a global or functional scope, this was used in old js code.
if (true){
    var dataReceived = true;
    console.log(dataReceived); //true.
}
console.log(dataReceived); // true, 
//can access variable outside of the block it was declared, or if it was declared inside a function we can access it from anywhere in that function.