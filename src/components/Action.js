import React from 'react';

const Action = (props) => (
    <button onClick={props.handlePick}
            disabled={!props.hasOptions}
            className={'btn btn-sm btn-outline-secondary'}>
        What Should I Do?
    </button>
);

export default Action;