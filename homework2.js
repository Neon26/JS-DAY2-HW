//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
// function favorite_dishes(person){
//     for (const [key, value] of Object.entries(person)) {
//         console.log(`${key} - ${value}`);
//     }
// }
// favorite_dishes(person3);

function favorite_food(person){
    for(let key in person){
        console.log(`${key} - ${person[key]}`);
        console.log(`${key}`)
        console.log(`${person[key]}`)
    } 
}
favorite_food(person3);
// console.log(Object.values(person3));
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
function Person(name,age){
    this.name = name;
    this.age = age;
    this.printInfo = function(){
        console.log(this.name + " is " + this.age + " years old");
    }
    this.incrementAge = () => {
        console.log(`${this.name} is now ${age+3} years old`);
    }
}
// Create our Person Prototype
const John = new Person("John",30);
John.printInfo();
John.incrementAge();
const Jane =  new Person("Jane",25);
Jane.printInfo();
Jane.incrementAge();




// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function checkString(string){
    return new Promise((resolve,reject) => {
        if(string.length > 10){
            resolve("Big word");
            }else{
                reject("Small Number");
            }
            }).then(function(result){
                console.log(result);
            }).catch(function(error){
                console.log(error);
            })
        }
checkString("Hello World");

    