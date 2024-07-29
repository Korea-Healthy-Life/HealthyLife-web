import React, { useState } from 'react'
import SaladProductsLayout from './SaladProductsLayout';
import Pagination from './Pagination';
import { saladProducts } from './SaladProductsLayout';
import '../../../style/home/productList.css'


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
    <div>
      <h2>샐러드</h2>

      {/* <ul>
        <li><button></button></li>
        <li><button></button></li>
        <li><button></button></li>
      </ul> */}

      <select name='' id=''>
        <option value="">조회순</option>
        <option value="">가격높은순</option>
        <option value="">가격낮은순</option>
      </select>

    <div style={{padding: '16px'}}>

      <SaladProductsLayout currentProducts= {currentProducts}/>
      <Pagination
        currentPage={currentPage}
        totalProducts={saladProducts.length}
        paginate={paginate}
        saladProductsPerPage={saladProductsPerPage}
        />
    </div>


    </div>
  )
}
