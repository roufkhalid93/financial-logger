//TYPE BASICS
var character = 'luigi';
var age = 30;
var isBlackBelt = false;
console.log(character, age, isBlackBelt);
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
//OBJECTS & ARRAYS
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
//error will happen when we try to push non-string type data into names
var numbers = [10, 20, 30, 40];
numbers.push(25);
//error will happen when we try to push non-int type of data into numbers
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
//by declaring multiple data types within an array initially under mixed, we can successfully add string & number to the mixed variable even mutate the existing data show in the last line above
var ninja = {
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
//EXPLICIT NUMBERS
var protagonist;
var height;
var isLoggedIn;
var array;
protagonist = 'myu';
height = 120;
isLoggedIn = true;
array = ['my', 'yu'];
console.log(protagonist, height, isLoggedIn, array);
var array2 = [];
array2.push('kyu');
console.log(array2);
//initialize array2 value above with an empty '= []' to allow push option to be used to add value to it. if not, push method can't be used
//union types
var mixed2 = [];
mixed2.push('hello');
mixed2.push(20);
mixed2.push(false);
console.log(mixed2);
var uid;
uid = '123';
console.log(uid);
uid = 345;
console.log(uid);
//objects
var ninja1;
ninja1 = { name: 'yoshi', age: 30 };
console.log(ninja1);
ninja1 = []; //nothing wrong with this cuz array is considered as an object too
console.log(ninja1);
var ninja2;
ninja2 = { name: 'mario', age: 20, beltColor: 'black' };
console.log(ninja2);
ninja2 = { name: 'luigi', age: 22, beltColor: 'green' };
console.log(ninja2);
