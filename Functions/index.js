function myFunction () {
    for (let i = 0; i <= 100; i++) {
        console.log(i);
    }
}
// anything can go into a function loops arrays variables stay inside the function.... make sure they are only responsable for one thing if not another is needed.
myFunction();

function createFullName(firstName, lastName) {  //parameters (placeholders) || saves spot for called argument.
    console.log(firstName + ' '  + lastName); //parameters also entered here not the argument....
} createFullName("Geordan", "Daugherty"); // argument || passed into the placeholder......
//parameters are like parking spots and the arguments are the cars 
createFullName("Dodge", "Neon"); // just testing
createFullName("Honda", "CRV");// just testing
//FUNCTION WAS COPIED BELOW!!!!
//GIVE DESCRIPTIVE NAMES THAT MEAN SOMETHING SO ITS EASILY READABLE.
//COPYED FUNCTION FROM ABOVE!!
function createFullName(firstName, lastName) { 
    return firstName + ' '  + lastName; 
} console.log(createFullName("Geordan", "Daugherty"));
// orrrrrr you can do  this
let fullName = createFullName("Geordan", "Daugherty");
console.log("Welcome " + fullName);

let a = 4;
let b = 7;
//write your code below
function sumOfTwo(a, b){
    return a + b;
}



//do not change. Used for Testing purposes
console.log(sumOfTwo(a))



