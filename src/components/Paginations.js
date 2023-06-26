import React from 'react';
import ReactPaginate from 'react-paginate';


const Paginations=({getPage,pageCount})=> {
  const handlePageClick = (event) => {
      getPage(event.selected + 1)
  };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={'pagination justify-content-center p-3'}
        pageClassName='page-item '
        pageLinkClassName='page-link'
        previousClassName='page-item pre-pagination'
        nextClassName='page-item next-pagination'
        nextLinkClassName='page-link'
        breakClassName='page-item '
        breakLinkClassName='page-link'
        previousLinkClassName='page-link'
        activeClassName="active"        
        />
      </>
  )
}
export default Paginations;
