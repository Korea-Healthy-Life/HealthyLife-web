import React from 'react'
import { useState } from 'react'
import { veganProducts } from './VeganProductsLayout';
import Pagination from './Pagination';
import VeganProductsLayout from './VeganProductsLayout';
import '../../../style/home/allProduct.css';
import '../../../style/home/productList.css';


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
    <div className='allProductContainer'>
      <h2>비건</h2>

      <ul className='allProductButtonList'>
        <li><button>도시락</button></li>
        <li><button>샐러드</button></li>
        <li><button>비건 고기</button></li>
        <li><button>간식</button></li>
      </ul>

      <select name="" id="">
        <option value="">조회순</option>
        <option value="">가격높은순</option>
        <option value="">가격낮은순</option>
      </select>


    <div className='allProductList'>
      <VeganProductsLayout currentProducts= {currentProducts}/>
      </div>
      
      <Pagination
        currentPage={currentPage}
        totalProducts={veganProducts.length}
        paginate={paginate}
        veganProductsPerPage={veganProductsPerPage}
        />


    </div>
  )
}
