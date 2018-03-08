import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

console.log('app.js has loaded and is running and loading via webpack-dev-server');

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));