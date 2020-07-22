import React from 'react';
import {default as rb_Pagination} from 'react-bootstrap/Pagination';

const Pagination = ({ currentPage, itemsPerPage, length, onPageChanged }) => {
  const pages = [];
  const pagesCount = Math.ceil(length / itemsPerPage);
  for (let i = 1; i <= pagesCount; i++) { pages.push(i); }

  return (
    <rb_Pagination className="pagination pagination-lg justify-content-center pt-5">
      <rb_Pagination.Prev
        className={((currentPage === 1) ? " disabled" : "")}
        onClick={() => onPageChanged(currentPage - 1)}
      />
      {
        pages.map(page =>
          <rb_Pagination.Item
            key={page}
            active={currentPage === page}
            onClick={() => onPageChanged(page)}>
            {page}
          </rb_Pagination.Item>
        )
      }
      <rb_Pagination.Next
        className={((currentPage === pagesCount) ? " disabled" : "")}
        onClick={() => onPageChanged(currentPage + 1)}
      />
    </rb_Pagination>
  );
}

Pagination.getData = (items, currentPage, itemsPerPage) => {
  const start = currentPage * itemsPerPage - itemsPerPage;
  return items.slice(start, start + itemsPerPage);
}

export default Pagination;
