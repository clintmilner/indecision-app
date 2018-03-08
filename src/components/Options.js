import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions} className={'btn btn-sm btn-outline-secondary'}>Remove
                All
            </button>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
            <div>
                {props.options.map((option) => (
                    <Option key={option}
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}/>
                ))}
            </div>
        </div>

    );
};

export default Options;