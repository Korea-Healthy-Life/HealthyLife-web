import React, { useState } from 'react'
import SeaFoodProductsLayout, { seaFoodProducts } from './SeaFoodProductsLayout';
import Pagination from './Pagination';
import '../../../style/home/productList.css'

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
    <div className='seaFoodContainer'>
    <h2>해산물</h2>

    <ul className='seaFoodButtonList'>
      <li><button>고등어</button></li>
      <li><button>연어</button></li>
      <li><button>참치</button></li>
    </ul>

    <select name='' id=''>
      <option value="">조회순</option>
      <option value="">가격높은순</option>
      <option value="">가격낮은순</option>
    </select>

    <div className='seaFoodList'>
      <SeaFoodProductsLayout currentProducts= {currentProducts}/>
      </div>
      <Pagination
        currentPage={currentPage}
        totalProducts={seaFoodProducts.length}
        paginate={paginate}
        seaFoodProductsPerPage={seaFoodProductsPerPage}
        />


    </div>
  )
}
