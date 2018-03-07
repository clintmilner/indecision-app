'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('counter example running');

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        _this.handlePlusOne = _this.handlePlusOne.bind(_this);

        // set up default state inside the Component Constructor
        // default state can be passed in on initialization using props

        // commented out now because we're getting the initial state from
        // localStorage and updating the state in the lifecycle methods below
        _this.state = {
            count: props.count
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // go get stuff that was stored

            try {
                var stringCount = localStorage.getItem('count');
                var count = parseInt(stringCount, 10);

                if (!isNaN(count)) {
                    this.setState(function () {
                        return { count: count };
                    });
                }
            } catch (err) {
                console.error('invalid JSON in localStorage', err);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            console.log('componentDidUpdate - state or prop updates', prevProps, prevState);

            if (prevState.count !== this.state.count || prevState.count !== 0 && this.state.count === 0) {
                console.log(prevState.count, this.state.count);
                localStorage.setItem('count', this.state.count);
            }
        }
    }, {
        key: 'handleMinusOne',
        value: function handleMinusOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            this.setState(function () {
                return { count: 0 };
            });
        }
    }, {
        key: 'handlePlusOne',
        value: function handlePlusOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'div',
                    { className: 'btn-group' },
                    React.createElement(
                        'button',
                        { className: 'btn btn-dark', onClick: this.handleMinusOne },
                        '-1'
                    ),
                    React.createElement(
                        'button',
                        { className: 'btn', onClick: this.handleReset },
                        'Reset'
                    ),
                    React.createElement(
                        'button',
                        { className: 'btn btn-dark', onClick: this.handlePlusOne },
                        '+1'
                    )
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
