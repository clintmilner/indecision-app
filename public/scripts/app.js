'use strict';

console.log('app.js has loaded and is running');

// JSX === JavaScript XML (Facebook)

var app = {
    title: 'Indecision App',
    subtitle: 'Put Your Life in the Hands of a Computer'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'one'
        ),
        React.createElement(
            'li',
            null,
            'two'
        ),
        React.createElement(
            'li',
            null,
            'three'
        )
    )
);

var user = {
    name: 'Clint Milner',
    age: 36,
    location: 'Granby, CO'
};

var userTmpl = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

ReactDOM.render(userTmpl, document.getElementById('app'));
// ReactDOM.render( template, document.getElementById('app') );
