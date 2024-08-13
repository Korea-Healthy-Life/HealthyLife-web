import { useState } from 'react';
import '../../../style/home/allProduct.css'
import { ProductProps } from './AllCheckinApp';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import '../../../style/modal/cartModal.css'


const Checkin:React.FC<{ products: ProductProps[]}> = ({products})  => {
    const [activeBtn, setActiveBtn] = useState<string | null> (null);
    const [modalOpen, setmodalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // 버튼호버 함수
    const handleMouseEnter = (btn: string) => {
      setActiveBtn(btn);
    };
    const handleMouseLeave = () => {
      setActiveBtn(null);
    }
    // 모달창 함수
    const openModal = () => {
      setmodalOpen(true);
    }
    const closeModal = () => {
      setmodalOpen(false);
    }

    // 방향 버튼 
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length -1 : prevIndex -1))
    }
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === products.length -1 ? 0 : prevIndex + 1));
    }

    const visibleProducts = products.slice(currentIndex, currentIndex + 4); 
    if(visibleProducts.length < 4) {
        visibleProducts.push(...products.slice(0, 4 -visibleProducts.length));
    }

  return (
      <div className="allProductImageContainer">
      {products.map(product => (
        <div key={product.id} className='allProductContain'>
          <Link to={'/productdetail'}>
          <img src={product.image} alt={product.title}  className='allProductImage'
          onMouseEnter={() => handleMouseEnter('btn')}
          onMouseLeave={handleMouseLeave}
          />
          <h4>{product.title}</h4>
          <p>price: 30000만원</p>
          </Link> 
        <div 
        onMouseEnter={() => handleMouseEnter('btn')}
        onMouseLeave={handleMouseLeave}>
        {activeBtn === 'btn' && (
          <div className='allProductHoverBtn'>
          <button onClick={openModal}>cart</button>
          <button>WISH</button>
          </div>
        )}
        </div>
          </div>
      ))}

<ReactModal
isOpen={modalOpen}
onRequestClose={closeModal}
className="modalContianerCart"
overlayClassName="modalOverlay"
>
<div className='modal'>
      <h2>장바구니</h2>
  <div className='modalContainerCart'>
      <button className='prevButton' 
        onClick={handlePrevClick}>
        &#10094;</button>
      <div className='modalImages'>
        {visibleProducts.map((product) => 
        <div key={product.id} className='relatedModalImage'>
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
        </div>
        )}
        <button className='nextButton' onClick={handleNextClick}>
          &#10095;
        </button>
      </div>

      <div className='modalButtonContainer'>
          <Link to={'/payment'}> <button>바로주문</button></Link>
          <Link to={'/cart'}><button>장바구니 이동</button></Link>
          <button onClick={closeModal}>쇼핑계속하기</button>
      </div>
  </div>
</div>
</ReactModal>
</div>
  )
}
export default Checkin;