import React from 'react'


interface paginationProps {
  currentPage: number;
  totalProducts: number;
  saladProductsPerPage: number;
  paginate: (pageNumber: number) => void;

}

const Pagination: React.FC<paginationProps> = ({currentPage, totalProducts, saladProductsPerPage, paginate}) =>{
    const pageNumbers = [];
    const totalPages  = Math.ceil(totalProducts / saladProductsPerPage);
    const maxPageGroup = Math.ceil(currentPage / 3);
    const currentPageGroup = Math.ceil(currentPage / 3);
    const startPage = (currentPageGroup - 1) * 3 + 1;
    const endPage = Math.min(currentPageGroup * 3, totalPages);

    for (let i = startPage; i <= endPage; i++){
      pageNumbers.push(i);
    }


  return(
    
    <div className="productPaginationljw">
    {startPage > 1 && (
      <div className="productPageItemljw">
      <button onClick={() => paginate(startPage -3)} className="PageLinkdirectionljw pageLinkljw">
        Previous
      </button>
      </div>)}

      {pageNumbers.map(number => (
        <div key={number} className={`pageItemljw ${number === currentPage ? 'active' : ''}`}>
          <button onClick={() => paginate(number)} className="productPageLinkjw pageLinkljw">{number}</button>
        </div>
      ))}

      {endPage < totalPages && (
        <div className="pageItemljw">
          <button onClick={() => paginate(startPage + 3)} className="PageLinkdirectionljw pageLinkljw">Next</button>

        </div>
      )}


    </div>
  )

}



export default Pagination;