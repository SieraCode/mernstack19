// Questions -
// Create a Person <few properties and a function to return them> and Inherit it as Student class and override the function
// Inherit should be done both way's constructor and Object.Create
// Create three objects and merge their propeties
// Create a logical example of closure
// Share few data objects from one file to another

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

//closure

var closure = function func1(){
    var outervar = "vords from the outer function"
    function func2(){
        console.log(outervar)
    }
return func2
}

closure()

module.exports = {
    Student,
    Student2,
    PersonChildPuppy
}

