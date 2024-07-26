import React, { useState } from 'react'
import SeaFoodProductsLayout, { seaFoodProducts } from './SeaFoodProductsLayout';
import Pagination from './Pagination';

export default function Salad() {
  const [currentPage, setCurrentPage] = useState(1);
  const seaFoodProductsPerPage = 9;
  // const totalPages = Math.ceil(saladProducts.length/ saladProductsPerPage);

  // const handlePrevious = () =>  {
  //   setCurrentPage((prevPage) => Math.max(prevPage -1, 1));
    
  // };
  const indexOfLastProduct = currentPage * seaFoodProductsPerPage;

  const indexOfFirstProduct = indexOfLastProduct - seaFoodProductsPerPage;
  const currentProducts= seaFoodProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  

  // const handleNext = () => {
  //   setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages ));
  // };

  // const startIndex = (currentPage -1) * saladProductsPerPage;
  // const selectedProducts = saladProducts.slice(startIndex, startIndex + saladProductsPerPage);


  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div style={{padding: '16px'}}>

      <SeaFoodProductsLayout currentProducts= {currentProducts}/>
      <Pagination
        currentPage={currentPage}
        totalProducts={seaFoodProducts.length}
        paginate={paginate}
        seaFoodProductsPerPage={seaFoodProductsPerPage}
        />


    </div>
  )
}
