import React, { useState } from 'react'
import SaladProductsLayout from './SaladProductsLayout';
import Pagination from './Pagination';
import { saladProducts } from './SaladProductsLayout';
import '../../../style/home/productList.css';


export default function Salad() {
  const [currentPage, setCurrentPage] = useState(1);
  const saladProductsPerPage = 9;
  // const totalPages = Math.ceil(saladProducts.length/ saladProductsPerPage);

  // const handlePrevious = () =>  {
  //   setCurrentPage((prevPage) => Math.max(prevPage -1, 1));
    
  // };
  const indexOfLastProduct = currentPage * saladProductsPerPage;

  const indexOfFirstProduct = indexOfLastProduct - saladProductsPerPage;
  const currentProducts= saladProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  

  // const handleNext = () => {
  //   setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages ));
  // };

  // const startIndex = (currentPage -1) * saladProductsPerPage;
  // const selectedProducts = saladProducts.slice(startIndex, startIndex + saladProductsPerPage);


  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className='allProductBoxljw'>
      <h2>샐러드</h2>

      <ul className='allProductButtonListljw'>
        <li><button>샐러드</button></li>
        <li><button>드레싱</button></li>
      </ul> 

    <div className='itemContainerljw'>
      <ul className='allProductSelectBtnljw'>
        <li value="">조회순</li>
        <li>|</li>
        <li value="">가격높은순</li>
        <li>|</li>
        <li value="">가격낮은순</li>
      </ul>
    </div>

    <div className='allProductListljw'>
      <SaladProductsLayout currentProducts= {currentProducts}/>
      </div>
      <Pagination
        currentPage={currentPage}
        totalProducts={saladProducts.length}
        paginate={paginate}
        saladProductsPerPage={saladProductsPerPage}
        />


    </div>
  )
}
