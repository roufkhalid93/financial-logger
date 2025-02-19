"use strict";
//TYPE BASICS
let character = 'luigi';
let age = 30;
let isBlackBelt = false;
console.log(character, age, isBlackBelt);
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
//OBJECTS & ARRAYS
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
//error will happen when we try to push non-string type data into names
let numbers = [10, 20, 30, 40];
numbers.push(25);
//error will happen when we try to push non-int type of data into numbers
let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
//by declaring multiple data types within an array initially under mixed, we can successfully add string & number to the mixed variable even mutate the existing data show in the last line above
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 5
};
console.log(ninja.name, ninja.belt, ninja.age);
ninja.name = 'ryu';
ninja.age = 30;
console.log(ninja.name, ninja.belt, ninja.age);
//if you wanna redeclare the ninja variable, you must follow the properties & data types declared initially like below:
ninja = {
    name: 'luigi',
    belt: 'green',
    age: 8
};
console.log(ninja.name, ninja.belt, ninja.age);
//EXPLICIT TYPES
let protagonist;
let height;
let isLoggedIn;
let array;
protagonist = 'myu';
height = 120;
isLoggedIn = true;
array = ['my', 'yu'];
console.log(protagonist, height, isLoggedIn, array);
let array2 = [];
array2.push('kyu');
console.log(array2);
//initialize array2 value above with an empty '= []' to allow push option to be used to add value to it. if not, push method can't be used
//union types
let mixed2 = [];
mixed2.push('hello');
mixed2.push(20);
mixed2.push(false);
console.log(mixed2);
let uid;
uid = '123';
console.log(uid);
uid = 345;
console.log(uid);
//objects
let ninja1;
ninja1 = { name: 'yoshi', age: 30 };
console.log(ninja1);
ninja1 = []; //nothing wrong with this cuz array is considered as an object too
console.log(ninja1);
let ninja2;
ninja2 = { name: 'mario', age: 20, beltColor: 'black' };
console.log(ninja2);
ninja2 = { name: 'luigi', age: 22, beltColor: 'green' };
console.log(ninja2);
//DYNAMIC (ANY)TYPES
let age2 = 25;
console.log(age2);
age2 = true;
console.log(age2);
age2 = 'hello';
console.log(age2);
age2 = { name: 'luigi' };
console.log(age2);
let mixed3 = [];
mixed3.push(5);
mixed3.push('mario');
mixed3.push(false);
console.log(mixed3);
let ninja3;
ninja3 = { name: 'yoshi', age: 25 };
console.log(ninja3);
ninja3 = { name: 25, age: 'yoshi' };
console.log(ninja3);
//FUNCTIONS
let greet;
greet = () => {
    console.log('hello, world');
};
//method 1
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
//method2
const add2 = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add2(2, 3);
const minus = (a, b) => {
    return a - b;
};
let result = minus(5, 7);
console.log(result);
const logDetails = (uid, item) => {
    console.log(`${item} has uid of ${uid}`);
};
console.log(logDetails);
const greet2 = (user) => {
    console.log(`${user.name} says hello`);
};
console.log(greet2);
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
console.log(greetAgain);
//FUNCTION SIGNATURES
//example 1
let greet3;
greet3 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//example 3
let logDetails2;
logDetails2 = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
