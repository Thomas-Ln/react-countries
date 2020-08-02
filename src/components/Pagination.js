import React from 'react';
import {default as ReactBootstrapPagination} from 'react-bootstrap/Pagination';

const Pagination = ({ currentPage, itemsPerPage, length, onPageChanged }) => {
  const pages = [];
  const pagesCount = Math.ceil(length / itemsPerPage);
  for (let i = 1; i <= pagesCount; i++) { pages.push(i); }

  return (
    <ReactBootstrapPagination className="pagination justify-content-center pt-5">
      <ReactBootstrapPagination.Prev
        className={((currentPage === 1) ? " disabled" : "")}
        onClick={() => onPageChanged(currentPage - 1)}
      />
      {
        pages.map(page =>
          <ReactBootstrapPagination.Item
            key={page}
            active={currentPage === page}
            onClick={() => onPageChanged(page)}>
            {page}
          </ReactBootstrapPagination.Item>
        )
      }
      <ReactBootstrapPagination.Next
        className={((currentPage === pagesCount) ? " disabled" : "")}
        onClick={() => onPageChanged(currentPage + 1)}
      />
    </ReactBootstrapPagination>
  );
}

Pagination.getData = (items, currentPage, itemsPerPage) => {
  const start = currentPage * itemsPerPage - itemsPerPage;
  // if 1 object only
  if (!Array.isArray(items)) { return [items]; }
  // else
  return items.slice(start, start + itemsPerPage);
}

export default Pagination;
