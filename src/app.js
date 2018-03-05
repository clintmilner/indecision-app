console.log('app.js has loaded and is running');

// JSX === JavaScript XML (Facebook)

// React Components 4:30

class IndecisionApp extends React.Component {

    render(){
        const title = 'Indecision App',
              subtitle = 'Put your life in the hands of a computer',
              options = ['thing 1', 'thing 2', 'thing 4'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}



class Header extends React.Component {
    // when you extend React.Component, you must have a render function
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h4>{this.props.subtitle}</h4>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        console.log('What Should I Do? btn clicked');
    }
    render() {
        return <button onClick={this.handlePick} className={'btn btn-sm btn-outline-secondary'}>What Should I Do?</button>;
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);

        this.handleRemoveAll = this.handleRemoveAll.bind(this); // creates a class-based binding to this
    }
    handleRemoveAll() {
        console.log( this.props.options, 'time to remove all the things' );
    }

    render(){
        return (
            <div>
                <button onClick={this.handleRemoveAll} className={'btn btn-sm btn-outline-secondary'}>Remove All</button>
                <ol>
                    {this.props.options.map( (option) => <Option key={option} optionText={option} />)}
                </ol>
            </div>

        )
    }
}

class Option extends React.Component {
    render(){
        return (
            <li key={this.props.key}>{this.props.optionText}</li>
        )
    }
}

// AddOption Component
class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        let option = e.target.elements['option'].value.trim();

        if(option){
            e.target.elements['option'].value = '';
        }
    }
    render(){
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name='option' placeholder="Add an Option Here" />
                <button type="submit" className={'btn btn-sm btn-outline-primary'}>Add Option</button>
            </form>
        )
    }
}



ReactDOM.render( <IndecisionApp />, document.getElementById('app') );
