import React, { useState } from 'react'
import ReactModal from 'react-modal';
import "../../style/nonmember/nonmemberModal.css"

function NonMember() {

  const [orderNumber, setOrderNumber] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }


  const closeModal = () => {
    setModalIsOpen(false)
  }

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderNumber(e.target.value)
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '40%' , paddingRight: '40%'}}>
        <br />
        <br />
        <h2 style={{textAlign: 'center'}}>주문조회</h2>
        <br />
        <br />
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '5%', backgroundColor: '#b5bbb0', paddingTop: '40%', paddingBottom: '40%' }}>
          <input type="text"  placeholder='주문번호 입력' value={orderNumber} onChange={inputHandler}/>
          <button className='"openModalButton' onClick={openModal}>조회</button>
          
          <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modalContent"
          overlayClassName="modalOverlay"
          >
            <div>
                <h2>비회원 주문처리 현황</h2>

                <div>
                  주문내역
                </div>
              <button onClick={closeModal} className='closeModalButton'>닫기</button>
            </div>
          </ReactModal>
        </div>
    </div>
  )
}

export default NonMember