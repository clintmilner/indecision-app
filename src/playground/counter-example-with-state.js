console.log( 'counter example running' );

class Counter extends React.Component {

    constructor(props){
        super(props);

        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset    = this.handleReset.bind(this);
        this.handlePlusOne  = this.handlePlusOne.bind(this);


        // set up default state inside the Component Constructor
        this.state = {
            count: 0
        };
    }

    handleMinusOne() {
        this.setState( (prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset() {
        this.setState( () => {
            return { count : 0 }
        });
    }

    handlePlusOne() {
        this.setState( (prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <div className={'btn-group btn-group-justified'}>
                    <button className={'btn btn-dark'} onClick={this.handleMinusOne}>-1</button>
                    <button className={'btn'} onClick={this.handleReset}>Reset</button>
                    <button className={'btn btn-dark'} onClick={this.handlePlusOne}>+1</button>
                </div>
            </div>
        )
    }
}


ReactDOM.render( <Counter />, document.getElementById('app') );