import React, { useState } from 'react'
import '../../../style/detailProductSlider/productSlider.css'
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

interface productImages{
  images: string[]
}


const Product: React.FC<productImages> = ({images}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length -1 : prevIndex -1 ));
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex)=> (prevIndex === images.length -1 ? 0 : prevIndex + 1));
  }


  const visibleImages = images.slice(currentIndex, currentIndex + 4);
  if(visibleImages.length < 4){
    visibleImages.push(...images.slice(0, 4 -visibleImages.length));
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div>
      <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', marginLeft: '10%', marginRight: '10%'}}>
        
        <div className='productImage' style={{padding: '0px', width: '75%'}}>
          <img src='https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068217_1280.jpg' alt="상세페이지 상품 이미지" width={'50%'}  style={{margin: '0px'}} />
        </div>


        <div className='productData' style={{margin: '0', width: '24%', display: 'flex', flexDirection: 'column'}}>
          <h3 style={{backgroundColor: "#b5bbb0"}}>상품명</h3>        
        <br />
        <br />
        <br />
        <div style={{backgroundColor: "#b5bbb0"}}>
          <h3>상품금액: 000</h3>
          <h3>배송기간: ~~ </h3>
        </div>
        <br />
        <br />
        <br />
        <select name="productOption" id="option" style={{width: '100%' }}>
          <option value="선택">옵션</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <br />
        <br />
        <div className='button' style={{display: 'flex', justifyContent: 'space-around'}}>
          <button onClick={openModal} >장바구니</button>
          <Link to={'/myPage/wishlist'}><button >WISH</button></Link>
          <Link to={'/payment'}><button >주문</button></Link>
        </div>

        </div>


        <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalContent"
        overlayClassName="modalOverlay"
        >

          <div className='modal'>
            <h2>장바구니(모달창)</h2>
              <br />
              <br />
              <br />
          <div className='cartModalContainer'>
            
              <button className='prevButton' onClick={handlePrevClick}>&#10094;</button>
            <div className='modalImages'>
              {visibleImages.map((image, index) => (
          <div key={index} className='relatedModalImage'>
            <img src={image} alt={`slide ${index}`} />
          </div>
        ))}
        <button className='nextButton' onClick={handleNextClick}>&#10095;</button>
            </div>
          



          </div>

          <br />
          <br />
          
          <div className='modalbuttonContainer' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          <Link to={'/payment'}> <button>바로주문</button></Link>
          <Link to={'/cart'}><button>장바구니 이동</button></Link>
          <button onClick={closeModal}>쇼핑계속하기</button>
          </div>
          
          </div>

        </ReactModal>
      </div>
      <br />
      <br />


      <div className='relatedItem'>
      <button className='prevButton' onClick={handlePrevClick}>&#10094;</button>
      <div className='relatedItemImagesContainer'>
        {visibleImages.map((image, index) => (
          <div key={index} className='relatedItemImage'>
            <img src={image} alt={`slide ${index}`} />
          </div>
        ))}
      </div>
        
      <button className='nextButton' onClick={handleNextClick}>&#10095;</button>
      </div>


    </div>
  )
}

export default Product