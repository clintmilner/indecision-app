'use strict';

console.log('app.js has loaded and is running');

// JSX === JavaScript XML (Facebook)

// SECTION 3, LESSON 19

var app = {
    title: 'Indecision App',
    subtitle: 'Put Your Life in the Hands of a Computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements['option'].value;

    if (option) {
        app.options.push(option);
        e.target.elements['option'].value = '';
        render();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    render();
};

function getOptions(options) {
    if (options && options.length > 0) {
        return 'Here are your options';
    }
    return 'No Options';
}

var onMakeDecision = function onMakeDecision() {
    var randNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randNum];

    console.info(randNum, option);
};

var render = function render() {
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
            'button',
            { disabled: app.options.length <= 0, onClick: onMakeDecision },
            'What Should I Do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                { className: 'btn btn-sm btn-success' },
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};

render();
