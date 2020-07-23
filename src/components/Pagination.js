import React from 'react';
import {default as RB_Pagination} from 'react-bootstrap/Pagination';

const Pagination = ({ currentPage, itemsPerPage, length, onPageChanged }) => {
  const pages = [];
  const pagesCount = Math.ceil(length / itemsPerPage);
  for (let i = 1; i <= pagesCount; i++) { pages.push(i); }

  return (
    <RB_Pagination className="pagination pagination-lg justify-content-center pt-5">
      <RB_Pagination.Prev
        className={((currentPage === 1) ? " disabled" : "")}
        onClick={() => onPageChanged(currentPage - 1)}
      />
      {
        pages.map(page =>
          <RB_Pagination.Item
            key={page}
            active={currentPage === page}
            onClick={() => onPageChanged(page)}>
            {page}
          </RB_Pagination.Item>
        )
      }
      <RB_Pagination.Next
        className={((currentPage === pagesCount) ? " disabled" : "")}
        onClick={() => onPageChanged(currentPage + 1)}
      />
    </RB_Pagination>
  );
}

Pagination.getData = (items, currentPage, itemsPerPage) => {
  const start = currentPage * itemsPerPage - itemsPerPage;
  return items.slice(start, start + itemsPerPage);
}

export default Pagination;
