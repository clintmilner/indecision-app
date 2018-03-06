'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('app.js has loaded and is running');

// JSX === JavaScript XML (Facebook)

// React Components 4:30

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOptions = _this.handleAddOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);

        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handleAddOptions',
        value: function handleAddOptions(option) {

            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.includes(option)) {
                return 'This option is already on your list';
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            // randomly pick an option
            var randNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randNum];

            console.info(option);
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision App',
                subtitle = 'Put your life in the hands of a computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOptions })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h4',
            null,
            props.subtitle
        )
    );
};

// class Header extends React.Component {
//     when you extend React.Component, you must have a render function
// render() {
//     return (
//         <div>
//             <h1>{this.props.title}</h1>
//             <h4>{this.props.subtitle}</h4>
//         </div>
//     )
// }
// }

var Action = function Action(props) {
    return React.createElement(
        'button',
        { onClick: props.handlePick,
            disabled: !props.hasOptions,
            className: 'btn btn-sm btn-outline-secondary' },
        'What Should I Do?'
    );
};

// class Action extends React.Component {
//
//     render() {
//         return (
//             <button onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                     className={'btn btn-sm btn-outline-secondary'}>
//                 What Should I Do?
//             </button>
//         );
//     }
// }

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions, className: 'btn btn-sm btn-outline-secondary' },
            'Remove All'
        ),
        React.createElement(
            'div',
            null,
            props.options.map(function (option) {
                return React.createElement(Option, { key: option, optionText: option });
            })
        )
    );
};

// class Options extends React.Component {
//
//     render() {
//         return (
{/*<div>*/}
{} /*<button onClick={this.props.handleDeleteOptions} className={'btn btn-sm btn-outline-secondary'}>Remove*/
// All
// </button>
{} /*<ol>*/
// {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
// </ol>
// </div>
//
// )
// }
// }


var Option = function Option(props) {
    return React.createElement(
        'p',
        null,
        props.optionText
    );
};

// class Option extends React.Component {
//     render() {
//         return (
{} /*<li key={this.props.key}>{this.props.optionText}</li>*/
// )
// }
// }

// AddOption Component

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);

        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements['option'].value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });

            e.target.elements['option'].value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option', placeholder: 'Add an Option Here' }),
                    React.createElement(
                        'button',
                        { type: 'submit', className: 'btn btn-sm btn-outline-primary' },
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// stateless functional components
// good for functions that don't need state
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
