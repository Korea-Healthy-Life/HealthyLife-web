import React, { useState } from 'react'
import '../../../style/mypage/Order.css'
import { Pagination } from '@mui/material'
import { ProductProps } from '../../allproduct/all/AllProduct';

const products:ProductProps[] = [
  
  {id: 3, title: 'Produt 3', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 4, title: 'Produt 4', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 5, title: 'Produt 5', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 6, title: 'Produt 6', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 7, title: 'Produt 7', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 8, title: 'Produt 8', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 9, title: 'Produt 9', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 10, title: 'Produt 10', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 11, title: 'Product 11',image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 12, title: 'Produt 12', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 13, title: 'Produt 13', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 14, title: 'Produt 14', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 15, title: 'Produt 15', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 16, title: 'Produt 16', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 17, title: 'Produt 17', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 18, title: 'Produt 18', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 19, title: 'Produt 19', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 20, title: 'Produt 20', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 21, title: 'Product 21',image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 22, title: 'Produt 22', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 23, title: 'Produt 23', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 24, title: 'Produt 24', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 25, title: 'Produt 25', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 26, title: 'Produt 26', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 27, title: 'Produt 27', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 28, title: 'Produt 28', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 29, title: 'Produt 29', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
  {id: 30, title: 'Produt 30', image: 'https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg'},
];

function ReturnOrderList() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productPerPage] = useState<number>(5);

  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  return (
    <div> 
    <div className='orderList'>
      <ul className='orderUl'>

        <li className='orderLi'>
          <img src={'/'} alt="" />
          <h5>상품이름</h5>
          <p>상품 옵션</p>
          <div className='orderListBtn'>
            <button>취소</button>
          </div>
      </li>
      </ul>
    </div>
    <div>
    <Pagination/>
    </div>
    </div>
  )
}

export default ReturnOrderList