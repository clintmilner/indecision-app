console.log( 'app.js has loaded and is running' );

// JSX === JavaScript XML (Facebook)

let template = <p>This is JSX from app.js</p>,
    appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);