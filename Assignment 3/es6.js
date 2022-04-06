// Solution 1
const printName = name => console.log('Hi ' + name);

// Solution 2
const printBill = (name, bill) => {
    return `Hi ${name}, please pay bill of amount ${bill}`
}

console.log(printBill("Gopi", 25))

// Solution 3
const person = {
    name: "Noam Chomsky",
    age: 92
}

let {name, age} = person;

console.log(name);
console.log(age);