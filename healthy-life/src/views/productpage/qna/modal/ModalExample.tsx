import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './ModalExample.css';

ReactModal.setAppElement('#root');

const ModalExample: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="modal-container">
      <button onClick={openModal} className="open-modal-button">문의하기</button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className='qnaModalTotal'>
        <h2>문의하기</h2>
          <textarea/>
        <div className='modalBtn'>
        <button onClick={closeModal} className="close-modal-button">취소하기</button>
        <button
        className='commandModalBtn'
        >등록하기</button>
        </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default ModalExample;
