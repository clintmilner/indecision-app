'use strict';

console.log('app.js has loaded and is running');

// JSX === JavaScript XML (Facebook)

// SECTION 3, LESSON 15

var app = {
    title: 'Indecision App',
    subtitle: 'Put Your Life in the Hands of a Computer',
    options: ['ONE', 'TWO']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        getOptions(app.options)
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

function getOptions(options) {
    if (options && options.length > 0) {
        return 'Here are your options';
    }
    return 'No Options';
}

var count = 0;
var addOne = function addOne() {
    count++;
    console.log('addOne was clicked', count);
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    console.info('minusOne was clicked', count);
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    console.warn('reset the count', count);
    renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'div',
            { className: "btn-group btn-group-sm" },
            React.createElement(
                'button',
                { onClick: minusOne, className: 'btn btn-secondary' },
                '-1'
            ),
            React.createElement(
                'button',
                { onClick: reset, className: 'btn btn-dark' },
                'Reset'
            ),
            React.createElement(
                'button',
                { onClick: addOne, className: 'btn btn-secondary' },
                '+1'
            )
        )
    );

    ReactDOM.render(templateTwo, document.getElementById('app'));
};

renderCounterApp();
