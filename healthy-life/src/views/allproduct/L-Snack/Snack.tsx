import React from 'react'
import { useState } from 'react'
import SnackProductsLayout, { snackProducts } from './SnackProductsLayout';
import Pagination from './Pagination';
import '../../../style/home/productList.css'

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
    <div style={{padding: '16px'}}>

      <SnackProductsLayout currentProducts= {currentProducts}/>
      <Pagination
        currentPage={currentPage}
        totalProducts={snackProducts.length}
        paginate={paginate}
        snackProductsPerPage={snackProductsPerPage}
        />


    </div>
  )
}
