function myFunction () {
    for (let i = 0; i <= 100; i++) {
        console.log(i);
    }
}
// anything can go into a function loops arrays variables stay inside the function.... make sure they are only responsable for one thing if not another is needed.
myFunction();

function creatFullName(firstName, lastName) {  //peramiters (placeholders) || saves spot for called argument.
    console.log(firstName + ' '  + lastName); //peramiters also entered here not the argument....
} creatFullName("Geordan", "Daugherty"); // argument || passed into the placeholder......
//peramiters are like parking spots and the arguments are the cars 
creatFullName("Dodge", "Neon"); // just testing
creatFullName("Honda", "CRV");// just testing
//FUNCTION WAS COPYED BELOW!!!!
//GIVE DISCRIPTIVE NAMES THAT MEAN SOMETHING SO ITS EASILY READABLE.
//COPYED FUNCTION FROM ABOVE!!
function creatFullName(firstName, lastName) { 
    return firstName + ' '  + lastName; 
} console.log(creatFullName("Geordan", "Daugherty"));
// orrrrrr you can do  this
let fullName = creatFullName("Geordan", "Daugherty");
console.log("Welcome " + fullName);

let a = 4;
let b = 7;
//write your code below
function sumOfTwo(a, b){
    return a + b;
}



//do not change. Used for Testing purposes
console.log(sumOfTwo(a))



