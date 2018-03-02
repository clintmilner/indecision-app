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


const user = {
    name: 'Clint Milner',
    age: 36,
    location: 'Granby, CO'
};


const userTmpl = (
    <div>
        <h1>{ user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

function getLocation(location) {
    if(location) {
        return <p>Location: { location }</p>;
    }
}

// ReactDOM.render(userTmpl, document.getElementById('app'));
ReactDOM.render( template, document.getElementById('app') );