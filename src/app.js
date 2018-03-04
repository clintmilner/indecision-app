console.log('app.js has loaded and is running');

// JSX === JavaScript XML (Facebook)

// React Components

class IndecisionApp extends React.Component {

    render(){
        return (
            <div>
                <Header />
                <Action />
                <Options />
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
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of a computer</h2>
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
            <ol>
                <Option />
            </ol>
        )
    }
}

class Option extends React.Component {
    render(){
        return (
            <li>Here is an Option</li>
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