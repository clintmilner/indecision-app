console.log( 'counter example running' );

class Counter extends React.Component {

    constructor(props){
        super(props);

        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset    = this.handleReset.bind(this);
        this.handlePlusOne  = this.handlePlusOne.bind(this);
    }

    handleMinusOne() {
        console.log( 'handleMinusOne' );
    }

    handleReset() {
        console.log( 'handleReset' );
    }

    handlePlusOne() {
        console.log( 'handlePlusOne' );
    }



    render(){
        return (
            <div>
                <h1>Count: </h1>
                <div className={'btn-group btn-group-justified'}>
                    <button onClick={this.handleMinusOne}>-1</button>
                    <button onClick={this.handleReset}>Reset</button>
                    <button onClick={this.handlePlusOne}>+1</button>
                </div>
            </div>
        )
    }
}


ReactDOM.render( <Counter />, document.getElementById('app') );
