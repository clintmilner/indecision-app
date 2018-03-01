'use strict';

console.log('app.js has loaded and is running');

// JSX === JavaScript XML (Facebook)

var template = React.createElement(
    'h1',
    null,
    'Indecision App'
),
    appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
