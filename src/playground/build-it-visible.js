

console.log( 'build-it visibility example is running' );
//
// let app = {
//     'btnText' : 'Show Details',
//     'isVisible' : false
// };
//
// const toggleVisibility = () => {
//     app.isVisible = !app.isVisible;
//
//     render();
// };
//
// const render = () => {
//     const template = (
//        <div>
//            <h1>Visibility Toggle</h1>
//            <button onClick={toggleVisibility} className={'btn btn-sm btn-outline-primary'}>{app.isVisible ? 'Hide' : 'Show'} Details</button>
//            { app.isVisible === true ? <p>Hey, you can see this now!</p> : ''}
//        </div>
//     );
//     ReactDOM.render( template, document.getElementById('app') );
// };
//
// render();




class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);

        this.toggleVisibility = this.toggleVisibility.bind(this);

        this.state = {
            visibility : false
        };
    }

    toggleVisibility() {
        this.setState( (prevState) => {
           return {
               visibility: !prevState.visibility
           }
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility} className={'btn btn-sm btn-outline-primary'}>{app.isVisible ? 'Hide' : 'Show'} Details</button>
                { this.state.visibility === true ? <p>Hey, you can see this now!</p> : ''}
            </div>
        )
    }
}

ReactDOM.render( <VisibilityToggle />, document.getElementById('app'));