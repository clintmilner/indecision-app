import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button onClick={props.handleDeleteOptions} className='button button--link'>
                Remove All
            </button>
        </div>

        {props.options.length === 0 && <p className='widget-header__message'>Please add an option to get started!</p>}
        <div>
            {props.options.map((option, idx) => (
                <Option key={option}
                        count={idx+1}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}/>
            ))}
        </div>
    </div>
);

export default Options;