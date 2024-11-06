// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils


// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

let isNotEvil = heroes.filter((hero)=>hero.isEvil == false)
console.log(isNotEvil)

let heroFamily = heroes.map((family)=>family.family)
console.log(heroFamily)

let sirNames = heroes.map((hero)=> "sir" + hero.name)
console.log(sirNames)

let marvelNotEvil = heroes.filter((hero)=>hero.isEvil == false && hero.family == "Marvel")
console.log(marvelNotEvil)

//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice)
let numbers = [2,4,6,2,85]
let multiply = function(...numbers){
    let product = 0;
    product = numbers.reduce((prevnum, currnum)=>{
        return prevnum * currnum
    },0)
    return product
}

console.log(multiply(...numbers))

//3. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}

//4. Give me an example of const data manipulation
const person1 = { name: "Alice", age: 30 };

person1.name = "Bob";
person1.age = 31;
console.log(person);

//5. What is the difference between for-of and for-in show with examples

let space = "";
for (let x in numbers) {
  space += numbers[x];
}

let beds = ["king", "queen", "full", "twin"]
for (const element of cars) {
    console.log(element)
}

//6. Give me an example of bind and write its usage, comparison with arrow function
let dog = {
    name:"Buddy",
    breed: "DDoberman",
    details: function () {
      return this.name + " " + this.breed;
    }
  }
  
  let dog2 = {
    name:"Cutie",
    breed: "Shitzu",
  }
  
  let fullDetails = dog1.details.bind(dog2);
  //above the dog2 object borrows the details method from the dog 1 object. Bind id where you can borrow a method from another obj


//7. Create an example showing usage of event loop in concurrent execution cycle

//8. create an example showing usage of short hand and default param.

function add(num1 = 0, num2 = 0, num3 = 0) {
    console.log(num3)
    return num1+num2+num3
}

console.log(add(1,2,3))

//9. Create two objects with some properties and merge them using Object method and ES6 way
const obj1 = { key1: 1, key2: 2 };
const obj2 = { key3: 3, key4: 4 };

const mergedObject = Object.assign({}, obj1, obj2);

console.log(mergedObject);

//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
let myMap = new Map();
myMap.set("email","sierastrau@gmail.com")
myMap.set(keyString, "hello")
console.log(myMap.get(keyString))
console.log(myMap.has(keyString))
console.log(myMap.clear())

//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
let myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({
            message : "success"
        })
    }, 2000);

    setTimeout(() => {
        reject({
            message : "failure"
        })
    }, 3000);
})

console.log(myPromise)
//myPromise.then
//a little confused about this part... returning 5 es6 features,
//like a for in loop or something?

//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//this question was answered previously

//13. Use the question #11 to build promises using async and await - with multithread

//14. Create an example of generator function of your choice
function* generatorFunction(){
    yield 1;
    yield 2;
    yield 3;
}

let generatorObj = generatorFunction();
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next()); //undef
//15. Explain your knowledge of - statelessness, http, REST, spa and classical applications
//satelessness means that each rest call is independent of eachother. In a restful web 
//service we have the verbs of rest which are post to save data, put to update data, 
//delete is to delete data, patch is to make partial updates to data, and get is to retrieve data
//REST stands for representation state transfer protocol. It is a method of retrieving and managing data from the frontend of an
//application to the backend. There are other data transfer protocols as well. A spa is 
//a website that loads a single HTML page where the content loads dynamically depending on
//user iteraction, it doesn't have to reload the whole page every single time somtehing changes.
//a classical application is where the page does not load dynamically it is a multi page applicaiton, 
//opposite to a single page application