

console.info( 'loading up ES6 Arrow Functions 2' );

const getFirstName = ( fullName ) => fullName.split(' ')[0];

// console.log( getFirstName('Clinton Milner'));




/* ======== part 2 ========= */

// arguments variable is not bound to arrow functions

const add = (a,b) => a + b;

console.log( add(10, 30) );



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


const user = {
    'name' : 'Clint',
    'cities' : ['Lane End', 'Granby', 'Queenstown'],
    printPlacesLived() { // method declaration does past 'this'


        return this.cities.map( (city) => `${this.name} has lived in ${city}`);


    }
};

console.log(user.printPlacesLived());



const multiplier = {
    // numbers - array of numbers
    'numbers' : [3,6,1,32,67],
    // multiplyBy = single number
    'multiplyBy' : 10,
    // multiply - returns new array where the numbers have been multiplied
    multiply(){
        return this.numbers.map( (num) => this.multiplyBy * num);
    }
};


console.info( multiplier.multiply() );