console.log('app.js has loaded and is running');

// JSX === JavaScript XML (Facebook)

// SECTION 3, LESSON 21

const app = {
    title: 'Indecision App',
    subtitle: 'Put Your Life in the Hands of a Computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements['option'].value;

    if(option) {
        app.options.push(option);
        e.target.elements['option'].value = '';
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

function getOptions(options) {
    if(options && options.length > 0) {
        return 'Here are your options'
    }
    return 'No Options'
}

const onMakeDecision = () =>  {
    const randNum = Math.floor( Math.random() * app.options.length );
    const option = app.options[ randNum ];


    console.info( randNum, option );
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{getOptions(app.options)}</p>
            <button disabled={app.options.length <= 0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                { app.options.map( (option) => <li key={option}>{option}</li> ) }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button className={'btn btn-sm btn-success'}>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
};

render();