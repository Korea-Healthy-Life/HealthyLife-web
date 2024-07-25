interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({currentPage, totalPages, onPrevious, onNext}) =>{

  return(
    <div className="pagination">

  <button onClick={onPrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <span style={{ margin: '0 16px' }}>{currentPage} / {totalPages}</span>
      <button onClick={onNext} disabled={currentPage === totalPages}>
        Next
      </button>

    </div>
  )

}



export default Pagination;