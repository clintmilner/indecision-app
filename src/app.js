// install/import/use for 3rd party libs
import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';
import myMath from './utils.js';
import isSenior, { isAdult, canDrink } from "./person";


console.log( 'app.js is running using webapp!' );

console.info( myMath.square(3) );
console.info( myMath.add(3,4) );
console.info( myMath.subtract(3,4) );

const age = 36,
    email = 'clinton.milner@gmail.com';

console.warn( isAdult(age) );
console.warn( canDrink(age) );
console.warn( isSenior(age) );


console.log( email, validator.isEmail(email) );

const tmpl = <p>JSX into Babel to bundle.js!</p>;
ReactDOM.render( tmpl, document.getElementById('app'));

