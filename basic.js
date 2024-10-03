//March - MERNStack Session - Assessment Number 1 - 2nd October 2024
//Q1. Create a file with name basics and show all the features that you know about javascript?
// Try explaining in 1-2 lines : example - Prototype : An object which behaves as a link between two functions and provides inheritance

//ANSWER
//Hoisitng - javascript takes the last defined entity and uses that to execute... let's say there are two functions with the same name but htere are different
//behaviors of those functions. JS will take the last declared function and execute it
//Callback functions - a function that is used as a paramenter for another function.
//Closures - a function that is the child of a parent function where the child function has access to the parent function's variables
//Module = certain enteties of other js code can be used in other js files in a project
//Function and function types = we have normal functions, unnamed functions, iife, and constructor functions and function expressions and nested functions
//Call/Apply/Bind (these are defined in a later question)
//Objects

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

var name = "Robert"
name = .0266
name = false
name = {myname : "Test Me"}
name = undefined
name = true
name = "Robert Jr"
name = null
name = {}
name = -32767

console.log(name)
//here because of hoisting, name can be defined as anything but JS will take the last name assigned and use it.

//Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function

var showUserInfo = function(firstname, lastname, age){
    console.log("First Name: " + firstname + ". Last Name: " + lastname + ". Age: " +age)
}

showUserInfo("Amy", "Thalia", 26)

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!

var doaddition = function(a,b,c){
    console.log(a+b+c)
}

doaddition(2,3,4)//outputs as normal
doaddition(2)//NAN pecause only one param is present
doaddition(2.3,3)//NAN because only two params are present
doaddition("first",2,"three")// since JS is not type specefic it just prints out the string plus a number plust the last string
//Q5. Give me an example of your choice for each of the below concepts
// a. closure, 
var closure = function func1(){
    var outervar = "vords from the outer function"
    function func2(){
        console.log(outervar)
    }
return func2
}

closure()
// b. hoisting, 

var thisFunc = function(a , b){
    console.log(a+b)
}

var thisFunc = function(message){
    console.log(message)
}
thisFunc(6,7)
// c. constructor function

function person(name, lastname){
    this.name = name;
    this.lastname = lastname

    this.getPersonDetails= function(){
        console.log(name + " " + lastname)
    }
}

//Q6. What is the purpose of call, apply and bind ? and why they are used ? whats the difference between bind and apply ?
//Call is used to invoke a particular function for a specefic object when that function is globally scoped. You can only use call with one object
//Apply is used to set a number or arguments 
//Bind is used with times functions like settimeout

//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.

//Q8. Create an example of creating object with null prototype
//Object.create is used in question number 9 below

//Q9. How do we merge different objects properties using Object class function

var Person = {
    name : "Jacob",
    age : 27,
    nationality : "American",
    printDetails : function () {
        return ` 
            ${this.name}
            ${this.age}
            ${this.address}
        `
    }
    
}

var Student = new Object(Person)
var Student2 = Object.create(Person)
Student.Grade = "A";
console.log(Student)
console.log(Student2.printDetails())

var Child = {
    age : 4,
    mode : "play"
}

var Puppy = {
    age : 2,
    mode : "sit",
    demeanor : "rambunctious"
}

Child.FavoriteToy = "ball";
PersonChildPuppy = Object.assign(Student, Child, Puppy)
console.log(PersonChildPuppy)

//Q10. Create an object literal and export it to another file and import and show that there

var User = {
    name: "Adam",
    age: 25
}

module.exports = {
    User
}