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

    getAge() {
        const year = new Date().getFullYear() - this.dob.getFullYear();
        return `${this.firstName + ' ' + this.lastName} is ${year} years old.`;
    }

    revise(newDOB) {
        this.dob = new Date(newDOB);
        this.revised = true;
    }

    /**
     * Static method is used without instantiating any object.
     * If you try to run it with an object it will return an error
    */
   static favouritePlace() {
       return 'Switzerland';
   }
}

// Instantiate Object
const person1 = new Person('John', 'Doe', '4/3/1980');
const person2 = new Person('Marry', 'Smith', '3/6/1970');

// console.log(person2.getFullName());
// person1.revise('4/3/1981');
// console.log(person1.getAge());

// console.log(person1.favouritePlace()); // returns person1.favouritePlace is not a function

console.log(Person.favouritePlace());
