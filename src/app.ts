const anchor = document.querySelector('a')!

if(anchor){
    console.log(anchor.href)
}

console.log(anchor.href)

//hover over each 'form' to see the types of property they pull according to the way the const is declared 
const form = document.querySelector('form')!
const form2 = document.querySelector('.new-item-form')
const form3 = document.querySelector('.new-item-form') as HTMLFormElement
console.log(form.children)
console.log(form2) //cannot access the children property of form2 since the const is declared as an element instead of HTMLForm
console.log(form3.children)

//class
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('mario', 'website work', 250);
const invTwo = new Invoice('luigi', 'darkwebsite work', 300);
console.log(invOne, invTwo)

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invOne);
console.log(invoices)

//input
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form3.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber //if put .value, it'll register string value instead of number. Hence, used .valueAsNumber instead
    )
})