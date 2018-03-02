console.log('app.js has loaded and is running');

// JSX === JavaScript XML (Facebook)

// SECTION 3, LESSON 15

const app = {
    title: 'Indecision App',
    subtitle: 'Put Your Life in the Hands of a Computer',
    options: ['ONE', 'TWO']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        { app.subtitle && <p>{app.subtitle}</p>}
        <p>{getOptions(app.options)}</p>
        <ol>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ol>
    </div>
);

function getOptions(options){
    if(options && options.length > 0){
        return 'Here are your options'
    }
    return 'No Options'
}

let count = 0;
const addOne = () => {
    count++;
    console.log( 'addOne was clicked', count );
    renderCounterApp()
};
const minusOne = () => {
    count--;
    console.info( 'minusOne was clicked', count );
    renderCounterApp()
};
const reset = () => {
    count = 0;
    console.warn( 'reset the count', count );
    renderCounterApp()
};


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h3>Count: {count}</h3>
            <div className={"btn-group btn-group-sm"}>
                <button onClick={minusOne} className={'btn btn-secondary'}>-1</button>
                <button onClick={reset} className={'btn btn-dark'}>Reset</button>
                <button onClick={addOne} className={'btn btn-secondary'}>+1</button>
            </div>
        </div>
    );

    ReactDOM.render( templateTwo, document.getElementById('app') );
};

renderCounterApp();