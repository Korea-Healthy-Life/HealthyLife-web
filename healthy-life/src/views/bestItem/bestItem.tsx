import React from 'react'
import { useState } from 'react'
import Pagination from './Pagination';
import BestItemLayout from './bestItemLayout';
import { bestItemProducts } from './bestItemLayout';
import '../../style/home/productList.css'

export default function BestItem() {
  const [currentPage, setCurrentPage] = useState(1);
  const bestItemProductsPerPage = 9;
  // const totalPages = Math.ceil(saladProducts.length/ saladProductsPerPage);

  // const handlePrevious = () =>  {
  //   setCurrentPage((prevPage) => Math.max(prevPage -1, 1));
    
  // };
  const indexOfLastProduct = currentPage * bestItemProductsPerPage;

  const indexOfFirstProduct = indexOfLastProduct - bestItemProductsPerPage;
  const currentProducts= bestItemProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  

  // const handleNext = () => {
  //   setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages ));
  // };

  // const startIndex = (currentPage -1) * saladProductsPerPage;
  // const selectedProducts = saladProducts.slice(startIndex, startIndex + saladProductsPerPage);


  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>베스트상품</h2>

      <select name="" id="">
        <option value="">조회순</option>
        <option value="">가격높은순</option>
        <option value="">가격낮은순</option>
      </select>
      
    <div style={{padding: '16px'}}>
      <h2>BestItem</h2>
      <BestItemLayout currentProducts= {currentProducts}/>
      <Pagination
        currentPage={currentPage}
        totalProducts={bestItemProducts.length}
        paginate={paginate}
        bestItemProductsPerPage={bestItemProductsPerPage}
        />


    </div>
    </div>
  )
}
