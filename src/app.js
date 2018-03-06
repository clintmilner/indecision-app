console.log('app.js has loaded and is running');

// JSX === JavaScript XML (Facebook)

// React Components 4:30

class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);

        this.state = {
            options: []
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }

    handleAddOptions(option) {

        if(!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.includes(option)) {
            return 'This option is already on your list';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
    }

    handlePick() {
        // randomly pick an option
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];

        console.info(option);

    }


    render() {
        const title = 'Indecision App',
            subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}/>
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption handleAddOption={this.handleAddOptions}/>
            </div>
        );
    }
}


class Header extends React.Component {
    // when you extend React.Component, you must have a render function
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h4>{this.props.subtitle}</h4>
            </div>
        )
    }
}

class Action extends React.Component {

    render() {
        return (
            <button onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                    className={'btn btn-sm btn-outline-secondary'}>
                What Should I Do?
            </button>
        );
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions} className={'btn btn-sm btn-outline-secondary'}>Remove
                    All
                </button>
                <ol>
                    {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
                </ol>
            </div>

        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li key={this.props.key}>{this.props.optionText}</li>
        )
    }
}

// AddOption Component
class AddOption extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements['option'].value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {error: error};
        });

        e.target.elements['option'].value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}

                <form onSubmit={this.handleAddOption}>
                    <input type="text" name='option' placeholder="Add an Option Here"/>
                    <button type="submit" className={'btn btn-sm btn-outline-primary'}>Add Option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
