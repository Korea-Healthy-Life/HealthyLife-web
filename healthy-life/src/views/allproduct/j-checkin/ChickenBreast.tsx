import React, { useEffect, useState } from 'react'
import { ProductProps } from '../../../types'
import axios from 'axios';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

const ChickenBreast: React.FC<{ products:ProductProps[] }> = ({products}) => {
  const [chickenBreast, setChickenBreast] = useState<ProductProps[]>([]);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [modalOpen, setmodalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


 // 버튼호버 함수
const handleMouseEnter = (index: number) => {
  setActiveProduct(index);
};
const handleMouseLeave = () => {
  setActiveProduct(null);
};
// 모달창 함수
const openModal = () => {
  setmodalOpen(true);
};
const closeModal = () => {
  setmodalOpen(false);
};

// 방향 버튼
const handlePrevClick = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? products.length - 1 : prevIndex - 1
  );
};
const handleNextClick = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === products.length - 1 ? 0 : prevIndex + 1
  );
};

const visibleProducts = products.slice(currentIndex, currentIndex + 4);
if (visibleProducts.length < 4) {
  visibleProducts.push(...products.slice(0, 4 - visibleProducts.length));
}

  useEffect(() => {

    const fetchProduct = async () => {
      try {
        
        const response = await axios.get(`http://localhost:3001/ProductChicken`);

  
        const data = response.data.filter((product: ProductProps) => 
          product.tag.includes('닭가슴살')
        );

        setChickenBreast(data);

      } catch(e){
        
      }
    }
    fetchProduct();
  }, [])

  return (
    <div>

<div className="allProductImageContainer">
      {chickenBreast.map((product, index) => (
        <div key={product.id} className="allProductContain">
          <Link to={"/productdetail"}>
            <img
              src={product.image}
              alt={product.title}
              className="allProductImage"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
            <div className="productLine"></div>
            <h4>{product.title}</h4>
            <p>{product.price}원</p>
          </Link>
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {activeProduct === index && (
              <div className="allProductHoverBtn">
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
        <div className="modal">
          <h2>장바구니</h2>
          <div className="modalContainerCart">
            <button className="prevButton" onClick={handlePrevClick}>
              &#10094;
            </button>
            <div className="modalImages">
              {visibleProducts.map((product) => (
                <div key={product.id} className="relatedModalImage">
                  <img src={product.image} alt={product.title} />
                  <p>{product.title}</p>
                </div>
              ))}
              <button className="nextButton" onClick={handleNextClick}>
                &#10095;
              </button>
            </div>

            <div className="modalButtonContainer">
              <Link to={"/payment"}>
                {" "}
                <button>바로주문</button>
              </Link>
              <Link to={"/cart"}>
                <button>장바구니 이동</button>
              </Link>
              <button onClick={closeModal}>쇼핑계속하기</button>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
    </div>
  );
};

export default ChickenBreast