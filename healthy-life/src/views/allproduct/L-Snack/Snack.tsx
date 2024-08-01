import React from 'react'
import { useState } from 'react'
import SnackProductsLayout, { snackProducts } from './SnackProductsLayout';
import Pagination from './Pagination';
import '../../../style/home/allProduct.css';

export default function Snack() {
  const [currentPage, setCurrentPage] = useState(1);
  const snackProductsPerPage = 9;
  // const totalPages = Math.ceil(saladProducts.length/ saladProductsPerPage);

  // const handlePrevious = () =>  {
  //   setCurrentPage((prevPage) => Math.max(prevPage -1, 1));
    
  // };
  const indexOfLastProduct = currentPage * snackProductsPerPage;

  const indexOfFirstProduct = indexOfLastProduct - snackProductsPerPage;
  const currentProducts= snackProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  

  // const handleNext = () => {
  //   setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages ));
  // };

  // const startIndex = (currentPage -1) * saladProductsPerPage;
  // const selectedProducts = saladProducts.slice(startIndex, startIndex + saladProductsPerPage);


  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className='allProductContainer'>
      <h2>간식</h2>

      <ul className='allProductButtonList'>
        <li><button>빵</button></li>
        <li><button>과자</button></li>
        <li><button>시리얼류</button></li>
        <li><button>프로틴바</button></li>
      </ul>

      <select name="" id="">
        <option value="">조회순</option>
        <option value="">가격높은순</option>
        <option value="">가격낮은순</option>
      </select>
      
    <div className='allProductList'>
      <SnackProductsLayout currentProducts= {currentProducts}/>
      </div>

      <Pagination
        currentPage={currentPage}
        totalProducts={snackProducts.length}
        paginate={paginate}
        snackProductsPerPage={snackProductsPerPage}
        />


    </div>
  )
}
