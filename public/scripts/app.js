'use strict';

console.info('loading up ES6 Arrow Functions 2');

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

// console.log( getFirstName('Clinton Milner'));


/* ======== part 2 ========= */

// arguments variable is not bound to arrow functions

var add = function add(a, b) {
    return a + b;
};

console.log(add(10, 30));

// 'this' is no longer bound

// const user = {
//     'name' : 'Clint',
//     'cities' : ['Lane End', 'Granby', 'Queenstown'],
//     printPlacesLived: function() { // an arrow function here won't pass down 'this'
//         this.cities.forEach( city => {
//             console.info(`${this.name} has lived in ${city}`);
//         });
//     }
// };


var user = {
    'name': 'Clint',
    'cities': ['Lane End', 'Granby', 'Queenstown'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        // method declaration does past 'this'


        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    // numbers - array of numbers
    'numbers': [3, 6, 1, 32, 67],
    // multiplyBy = single number
    'multiplyBy': 10,
    // multiply - returns new array where the numbers have been multiplied
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return _this2.multiplyBy * num;
        });
    }
};

console.info(multiplier.multiply());
