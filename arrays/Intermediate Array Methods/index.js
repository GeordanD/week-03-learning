// MAP ARRAY usful to transform data 
let names = ["Sam", "Tom", "Eric", "Sally", "Geordan"];
let lengths = names.map(function(element) {     // element of names array
    return element.length;

})  // takes a function and call it for each element in the array and returns element in new array
console.log(lengths); // map portion takes the function 
// reduce method.... can be used lots of way but we want to use when we want the sigle value of all arrays

let sum = lengths.reduce(function(accumulator, currentValue) {   // can also be current index and the array itself  can take innital value to start at....
    return accumulator + currentValue;
} , 10); // this makes it start at a certin point not needed in full array
console.log(sum);

// for each array method similar to math method does not return a new array if we only need to preform an action this one to use loop or for each

names.forEach(function(element) {
    console.log(element);
});

//filter method returns boolean it returns each element that is true filter for even number of char 

let evens = names.filter(function(element) {
    return element.length % 2== 0;
});
console.log(evens);

// splice method. alter contents of an arrayadd, remove, modify, or removing at specific location.... 

let removedElement = names.splice(1, 3);
console.log(removedElement);
// very powerfull 
//BELOW REMOVES AN ITEM FROM THE ARRAY IN THE 2ND SPOT. splice()
let studentList = ["Allen", "Jessica", "Eddie", "Sarah"]
//write your code here

studentList.splice(2,1);



// do not change
// for testing purposes
function checkArray(array){
    return array.sort()
}

console.log(checkArray(studentList));




// WEEK THREE OPEN CLASS   Array Fun: Using the given function, gradList, add the following names to the passed array: "Mary", "Steven", "Eddie". Then, sort the remaining students from Z-A, and return the modified array.
var fs = require("fs");
var grads = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");

function gradList(graduates){
    //write your code here
    graduates.push("Mary", "Steven", "Eddie");
    graduates.sort();
    graduates.reverse();
    return graduates;
    
    }
   
    


console.log(gradList(grads));


//solution  returns alphebeticly reversed.

var fs = require("fs");
var grads = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");

function gradList(graduates){
    //write your code here
    graduates.push("Mary", "Steven", "Eddie");
    graduates.sort();
    let reverseGrads = graduates.reverse();
    return reverseGrads;
}
 

console.log(gradList(grads));