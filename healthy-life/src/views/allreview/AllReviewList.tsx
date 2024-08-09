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
    <div className='allProductImageContainer'>
      <div className="allProductImageList">
      {products.map(product => (
        <div onClick={openModal} className='reviewBox' key={product.id}>
          <img src={product.image} alt={product.title} />
          <div className='productInform'>
          <span className='allrevieprofile'><AccountCircleIcon/></span>
          <div className='reviewContent'>
          <h4>{product.title}</h4>
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
          <img src='https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg' alt="" />
          <h4>title</h4>

        <button onClick={closeModal} className="close-modal-button">Close Modal</button>
      </ReactModal>
      </div>
    </div>
  )
}
export default AllProductList;