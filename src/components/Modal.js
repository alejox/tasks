import React from 'react';

const Modal = ({close}) => {
    return (
        <>
        <div className="modal">
            <button onClick={close}>close</button>
            <h1>Soy un modal</h1>
        </div>
        <div className='overlay' onClick={close}></div>
        </>
    );
};

export default Modal;