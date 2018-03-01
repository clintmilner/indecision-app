console.log( 'app.js has loaded and is running' );

// JSX === JavaScript XML (Facebook)

let template = <h1>Indecision App</h1>,
    appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);