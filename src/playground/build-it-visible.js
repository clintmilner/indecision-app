

console.log( 'build-it visibility example is running' );

let app = {
    'btnText' : 'Show Details',
    'isVisible' : false
};

const toggleVisibility = () => {
    app.isVisible = !app.isVisible;

    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility} className={'btn btn-sm btn-outline-primary'}>{app.isVisible ? 'Hide' : 'Show'} Details</button>
            { app.isVisible === true ? <p>Hey, you can see this now!</p> : ''}
        </div>
    );
    ReactDOM.render( template, document.getElementById('app') );
};

render();