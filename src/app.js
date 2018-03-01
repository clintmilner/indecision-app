console.log('app.js has loaded and is running');

// JSX === JavaScript XML (Facebook)

let app = {
    title: 'Indecision App',
    subtitle: 'Put Your Life in the Hands of a Computer'
};

let template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ol>
    </div>
);


let user = {
    name: 'Clint Milner',
    age: 36,
    location: 'Granby, CO'
};


let userTmpl = (
    <div>
        <h1>{ user.name ? user.name : 'Anonymous'}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);

function getLocation(location) {
    if(location) {
        return <p>Location: { location }</p>;
    }
}

ReactDOM.render(userTmpl, document.getElementById('app'));
// ReactDOM.render( template, document.getElementById('app') );