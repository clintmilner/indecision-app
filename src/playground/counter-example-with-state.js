console.log( 'counter example running' );

class Counter extends React.Component {

    constructor(props){
        super(props);

        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset    = this.handleReset.bind(this);
        this.handlePlusOne  = this.handlePlusOne.bind(this);


        // set up default state inside the Component Constructor
        // default state can be passed in on initialization using props

        // commented out now because we're getting the initial state from
        // localStorage and updating the state in the lifecycle methods below
        this.state = {
            count: props.count
        };
    }

    componentDidMount(){
        // go get stuff that was stored

        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt( stringCount, 10 );

            if( !isNaN(count) ) {
                this.setState( () => ({count}));
            }
        } catch( err ) {
            console.error( 'invalid JSON in localStorage', err);
        }
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate - state or prop updates', prevProps, prevState);


        if((prevState.count !== this.state.count) || (prevState.count !== 0 && this.state.count === 0)){
            console.log(prevState.count , this.state.count);
            localStorage.setItem( 'count', this.state.count);
        }
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
                <div className={'btn-group'}>
                    <button className={'btn btn-dark'} onClick={this.handleMinusOne}>-1</button>
                    <button className={'btn'} onClick={this.handleReset}>Reset</button>
                    <button className={'btn btn-dark'} onClick={this.handlePlusOne}>+1</button>
                </div>
            </div>
        )
    }
}

Counter.defaultProps = {
    count : 0
};

ReactDOM.render( <Counter />, document.getElementById('app') );
