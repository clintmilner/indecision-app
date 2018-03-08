import React from 'react';

const Action = (props) => (
    <button onClick={props.handlePick}
            disabled={!props.hasOptions}>
        What Should I Do?
    </button>
);

export default Action;