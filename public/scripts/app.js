'use strict';

console.log('build-it visibility example is running');

var app = {
    'btnText': 'Show Details',
    'isVisible': false
};

var toggleVisibility = function toggleVisibility() {
    app.isVisible = !app.isVisible;

    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility, className: 'btn btn-sm btn-outline-primary' },
            app.isVisible ? 'Hide' : 'Show',
            ' Details'
        ),
        app.isVisible === true ? React.createElement(
            'p',
            null,
            'Hey, you can see this now!'
        ) : ''
    );
    ReactDOM.render(template, document.getElementById('app'));
};

render();
