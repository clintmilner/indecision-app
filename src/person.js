
// Person.js can check whether the input data qualifies
// you as an adult, and if you're legally able to drink

const isAdult = (age) => age >= 18;

const canDrink = (age) => age >= 21;

const isSenior = (age) => age >= 65;

export default isSenior;
export { isAdult, canDrink };