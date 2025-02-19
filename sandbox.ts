
let character = 'luigi';
let age = 30;
let isBlackBelt = false;

const circ = (diameter) => {
  return diameter * Math.PI
}

console.log(circ(7.5))

let names = ['luigi', 'mario', 'yoshi']
names.push('toad')
//error will happen when we try to push non-string type data into names

let numbers = [10, 20, 30, 40]
numbers.push(25);
//error will happen when we try to push non-int type of data into numbers

let mixed = ['ken', 4, 'chun-li', 8, 9]

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
//by declaring multiple data types within an array initially under mixed, we can successfully add string & number to the mixed variable even mutate the existing data show in the last line above


let ninja = {
  name: 'mario',
  belt: 'black',
  age: 5
};
console.log(ninja.name, ninja.belt, ninja.age)

ninja.name = 'ryu'
ninja.age=30

console.log(ninja.name, ninja.belt, ninja.age)

//if you wanna redeclare the ninja variable, you must follow the properties & data types declared initially like below:
ninja = {
  name: 'luigi',
  belt: 'green',
  age: 8
};
console.log(ninja.name, ninja.belt, ninja.age)