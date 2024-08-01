import React from 'react'

interface paginationProps {
  currentPage: number;
  totalProducts: number;
  snackProductsPerPage: number;
  paginate: (pageNumber: number) => void;

}


const Pagination: React.FC<paginationProps> = ({currentPage, totalProducts, snackProductsPerPage, paginate}) => {
  const pageNumbers = [];
  const totalPages  = Math.ceil(totalProducts / snackProductsPerPage);
  const maxPageGroup = Math.ceil(currentPage / 3);
  const currentPageGroup = Math.ceil(currentPage / 3);
  const startPage = (currentPageGroup - 1) * 3 + 1;
  const endPage = Math.min(currentPageGroup * 3, totalPages);

  for (let i = startPage; i <= endPage; i++){
    pageNumbers.push(i);
  }


  return (
    
    <div className="pagination">
    {startPage > 1 && (
      <div className="pageItem">
      <button onClick={() => paginate(startPage -3)} className="pageLink">
        Previous
      </button>
      </div>)}

      {pageNumbers.map(number => (
        <div key={number} className={`pageItem ${number === currentPage ? 'active' : ''}`}>
          <button onClick={() => paginate(number)} className="pageLink">{number}</button>
        </div>
      ))}

      {endPage < totalPages && (
        <div className="pageItem">
          <button onClick={() => paginate(startPage + 3)} className="pageLink">Next</button>

        </div>
      )}


    </div>
  
  )
}

export default Pagination
