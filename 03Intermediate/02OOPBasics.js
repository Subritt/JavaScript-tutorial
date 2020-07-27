
const str1 = 'Hello';
// console.log(typeof str1); // string
str1.toUpperCase(); // treats str1 as a object

const str2 = new String('Hello');
// console.log(typeof str2); // object

// console.log(navigator.appVersion);

/**
 * Objects literal
 * difficult to create many objects like this 
 * so we create constructor createing a class 
 * given in another OOP.js file
*/

const book1 = {
    title: 'Dada\'s Biography',
    author: 'Dada',
    year: '2020',
    getSummary: function() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`;
    }
};

// console.log(book1.getSummary());
// console.log(Object.values(book1));
console.log(Object.keys(book1));

