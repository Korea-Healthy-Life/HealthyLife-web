import React from 'react'
import { useState } from 'react'
import { veganProducts } from './VeganProductsLayout';
import Pagination from './Pagination';
import VeganProductsLayout from './VeganProductsLayout';
import '../../../style/home/productList.css'

export default function Vegan() {
  const [currentPage, setCurrentPage] = useState(1);
  const veganProductsPerPage = 9;
  // const totalPages = Math.ceil(saladProducts.length/ saladProductsPerPage);

  // const handlePrevious = () =>  {
  //   setCurrentPage((prevPage) => Math.max(prevPage -1, 1));
    
  // };
  const indexOfLastProduct = currentPage * veganProductsPerPage;

  const indexOfFirstProduct = indexOfLastProduct - veganProductsPerPage;
  const currentProducts= veganProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  

  // const handleNext = () => {
  //   setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages ));
  // };

  // const startIndex = (currentPage -1) * saladProductsPerPage;
  // const selectedProducts = saladProducts.slice(startIndex, startIndex + saladProductsPerPage);


  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div style={{padding: '16px'}}>

      <VeganProductsLayout currentProducts= {currentProducts}/>
      <Pagination
        currentPage={currentPage}
        totalProducts={veganProducts.length}
        paginate={paginate}
        veganProductsPerPage={veganProductsPerPage}
        />


    </div>
  )
}
