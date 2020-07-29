// Person Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getAge() {
        const year = new Date().getFullYear() - this.dob.getFullYear();
        return `${this.firstName + ' ' + this.lastName} is ${year} years old.`;
    }
}

// Subclass
class Subclass extends Person {
    constructor(firstName, lastName, dob, favouritePlace) {
        super(firstName, lastName, dob);
        this.favouritePlace = favouritePlace;
    }
}

// Intantiate Subclass
const subclass1 = new Subclass('John', 'Doe', '4/3/1980', 'Switzerland');

console.log(subclass1);