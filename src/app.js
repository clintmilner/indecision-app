console.log('app.js has loaded and is running');

// JSX === JavaScript XML (Facebook)

// React Components

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
    render() {
        return <button className={'btn btn-sm btn-outline-secondary'}>What Should I Do?</button>;
    }
}

// Options console.log some stuff
class Options extends React.Component {

    render(){
        return (
            <div>
                <p>Length: {this.props.options.length}</p>
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
    render(){
        return <button className={'btn btn-sm btn-outline-primary'}>Add Option</button>
    }
}



ReactDOM.render( <IndecisionApp />, document.getElementById('app') );