"use strict";
const anchor = document.querySelector('a');
if (anchor) {
    console.log(anchor.href);
}
console.log(anchor.href);
//hover over each 'form' to see the types of property they pull according to the way the const is declared 
const form = document.querySelector('form');
const form2 = document.querySelector('.new-item-form');
const form3 = document.querySelector('.new-item-form');
console.log(form.children);
console.log(form2); //cannot access the children property of form2 since the const is declared as an element instead of HTMLForm
console.log(form3.children);
//class
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'website work', 250);
const invTwo = new Invoice('luigi', 'darkwebsite work', 300);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invOne);
console.log(invoices);
//input
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form3.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber //if put .value, it'll register string value instead of number. Hence, used .valueAsNumber instead
    );
});
