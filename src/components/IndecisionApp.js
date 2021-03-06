// JSX === JavaScript XML (Facebook)

import React from "react";

import Header from './Header';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };

    // lifecycle methods - class components only!
    //https://reactjs.org/docs/glossary.html#lifecycle-methods
    componentDidMount() {
        try {
            console.log('componentDidMount - DOM Ready - after render()');
            // fetching data previously saved
            const json = localStorage.getItem('options'),
                options = JSON.parse(json);

            if(options) {
                this.setState(() => ({options}));
            }
        } catch(err) {
            console.error('localStorage data is invalid', err);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate - state or prop updates', prevProps, prevState);

        if(prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options));
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount - GC for single-page apps when pages update');
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };

    handleAddOptions = (option) => {

        if(!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.includes(option)) {
            return 'This option is already on your list';
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    };

    handlePick = () => {
        // randomly pick an option
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];

        console.info(option);

        this.setState(() => ({selectedOption: option}));

    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option => optionToRemove !== option))
        }));
    };

    handleCloseModal = () => {
        this.setState(() => ({selectedOption: undefined}));
    };

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className='container'>
                    <Action hasOptions={this.state.options && this.state.options.length > 0}
                            handlePick={this.handlePick}/>
                    <div className='widget'>
                        <Options
                            handleDeleteOption={this.handleDeleteOption}
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}/>

                        <AddOption handleAddOption={this.handleAddOptions}/>
                    </div>
                </div>
                <OptionModal handleCloseModal={this.handleCloseModal}
                             selectedOption={this.state.selectedOption}/>
            </div>
        );
    }
}


// IndecisionApp.defaultProps = {
//     options: []
// };