import React from "react";

const Pagination = ({
  postsLength,
  currentPage,
  postPerPage,
  handlePageChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(postsLength / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={handlePageChange}
        className={
          currentPage === number ? "paginate-number active" : "paginate-number"
        }
      >
        {number}
      </li>
    );
  });

  if (renderPageNumbers.length === 1) {
    return null;
  }

  return (
    <div>
      <ul id="page-numbers">{renderPageNumbers}</ul>
    </div>
  );
};

export default Pagination;
