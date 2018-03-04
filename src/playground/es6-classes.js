

console.info( 'ES6 Classes' );

class Person {
    // define a constructor function (method definition)
    // arguments can be set with method defaults
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year${this.age !== 1 ? 's' : ''} old!`
    }
}


const me = new Person('Clint Milner',36);
const you = new Person();


console.info( me.getDescription() );
console.info( you.getDescription() );