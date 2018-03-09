import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal onRequestClose={props.handleCloseModal}
           isOpen={!!props.selectedOption}
           closeTimeoutMS={311}
           className='modal'
           contentLabel='Selected Option'>
        <h3 className='modal__title'>Selected Option</h3>
        {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
        <button className='button' onClick={props.handleCloseModal}>Thanks!</button>
    </Modal>
);

export default OptionModal;