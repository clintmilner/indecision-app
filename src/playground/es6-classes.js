

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

class Student extends Person {
    constructor(name, age, major) {
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if( this.hasMajor() ){
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

// traveler extends Person
// add support for home location
// override get greeting
   // if isHome, include it in the message

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){ return !!this.homeLocation; }

    getGreeting(){
        let greeting = super.getGreeting();

        if( this.hasHomeLocation() ){
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}



const me = new Student('Clint Milner', 36, 'Physics');
const me2 = new Traveler('Clint Milner', 36, 'Granby');
const you = new Student();


console.info( me.getDescription() );
console.info( me2.getGreeting() );
console.info( you.getDescription() );