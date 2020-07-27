/**
 * ES5
 
// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate Object
const person1 = new Person('John', 'Doe', '4/3/1980');
const person2 = new Person('Marry', 'Smith', '3/6/1970');

console.log(person2.getFullName());
console.log(person1);

*/

/**
 * ES6
 */
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate Object
const person1 = new Person('John', 'Doe', '4/3/1980');
const person2 = new Person('Marry', 'Smith', '3/6/1970');

console.log(person2.getFullName());
console.log(person1);
