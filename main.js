/*
---HARD_CODE---
const HARD_CODE1 = 1;
const HARD_CODE2 = 2;
const HARD_CODE3 = 3;
*/

/*
---TYPEOF---
let valueType = typeof "Olá";
let example = null || '' || false || 0 || valueType;
 console.log(example);
*/


/*
---UNSHIFT---
let unshiftTest = [3, 4, 5];
unshiftTest.unshift(1, 2);
console.log(unshiftTest);
*/

/*
---Shift---
let shiftTest = [1, 2, 3, 4, 5];
shiftTest.shift();
console.log(shiftTest);
*/

/*
---Trim---
let exemple = ' This is a test.        ';
let trimTest = `      String inside of a 
template literals.`+ exemple;

console.log(trimTest.trim());
*/

/*
---CHANGING PROPERTIES AND ADDING VALUES---
let person = {
    name: 'Vitor',
    age: 30,
    job: 'Programmer',
}

person["name"] = 'Antonio'
person.sex = 'male'

console.log(person);
*/

/*
// ---SPLIT---
let = testSplit = 'Thats a string. split test';
testSplit = testSplit.split("");
console.log(testSplit);
*/

/*
---TYPEOFF---
let nbr = 3301;
let str = "This is a string"
let boo = true;
let obj = {}

number = typeof nbr;
obj = typeof obj;
str = typeof str;
boo = typeof boo;
console.log(str)
*/

/*
---Slice---
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let parte = array.slice(2, 10);

console.log(parte); ''
*/

/*
---CONSTRUCTOR, CLASSES AND OVERRIDING---
class Human{
    constructor(name, weapon, health){
            this.name = John;
            this.weapon = weapon;
            this.health = 100;
        }
        receiveDamage(){
            this.health = this.health - 10;
        }
}

class witcher extends Human{
    receiveDamage(){
        this.health = this.health - 5;
    }
}
*/

const paragraph = document.createElement("p");
paragraph.innerHTML = "This is a create element method example";
console.log(paragraph);







