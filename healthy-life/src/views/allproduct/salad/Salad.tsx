import React, { useState } from 'react'
import SaladProductsLayout from './SaladProductsLayout';
import Pagination from './Pagination';
import { saladProducts } from './SaladProductsLayout';
import '../../../style/home/salad.css'


export default function Salad() {
  const [currentPage, setCurrentPage] = useState(1);
  const saladProductsPerPage = 9;
  const totalPages = Math.ceil(saladProducts.length/ saladProductsPerPage);  //2

  const handlePrevious = () =>  {
    setCurrentPage((prevPage) => Math.max(prevPage -1, 1));
    
  };

  

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages ));
  };

  const startIndex = (currentPage -1) * saladProductsPerPage;
  const selectedProducts = saladProducts.slice(startIndex, startIndex +saladProductsPerPage);


  return (
    <div style={{padding: '16px'}}>

      <SaladProductsLayout saladProducts= {selectedProducts}/>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
        />


    </div>
  )
}
