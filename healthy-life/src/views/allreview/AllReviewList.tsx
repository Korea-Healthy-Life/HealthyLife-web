import { ProductProps } from './AllReview';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../style/home/AllReview.css'
import { useState } from 'react';
import ReactModal from 'react-modal';




const AllProductList:React.FC<{ products: ProductProps []}> =({products})  => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };  

  
  return (
    <div className='reviewImageContainer'>
      <div className="allProductImageList">
      {products.map(product => (
        <div onClick={openModal} className='reviewBox' key={product.id}>
          <img src={product.image} alt={product.title} />
          <div className='productInform'>
          <h5>{product.title}</h5>
          <div className='reveiwInfoDiv'>
          <span className='allrevieprofile'><AccountCircleIcon/></span>
          <p className='reviewP'>아이디 . 업로드 날짜</p>
          </div>
          <div className='reviewContent'>
          <pre>{product.content}</pre>
          </div>
          </div>
          </div>
      ))}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
        >
      <h2>후기</h2>
      <div className='reveiwModal'>
          <img src='https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg' alt="" className='modalImage' />
          <div className='reviewModalInfpo'>
            <h5>사품명</h5>
            <div className='countInfo'>
            <AccountCircleIcon/> 
            <p>아이디 . 업로드 날짜</p>
            </div>
            <pre>리뷰상세 내용 다른 상품들 마다 다양하게 들어간다.</pre>
          </div>
        <button onClick={closeModal} className="closeReviewModalBtn">Close Modal</button>
      </div>

      </ReactModal>
      </div>
    </div>
  )
}
export default AllProductList;