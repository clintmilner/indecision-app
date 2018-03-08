import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal onRequestClose={props.handleCloseModal}
           isOpen={!!props.selectedOption}
           contentLabel='Selected Option'>
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button className={'btn btn-sm btn-block'} onClick={props.handleCloseModal}>Thanks!</button>
    </Modal>
);

export default OptionModal;