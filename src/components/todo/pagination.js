import React from "react";
import { Button } from "react-bootstrap";
import PaginationBoot from "react-bootstrap/Pagination";

let previousPage = 1;
let nextPage = 1;

const Pagination = ({ tasksPerPage, totalTasks, paginate }) => {

  let active = nextPage;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    pageNumbers.push(i);
  }
  let page = pageNumbers.length;

  function next() {
    nextPage < page ? paginate(++nextPage) : paginate(page);
  }

  function previous() {
    if (nextPage > previousPage && !(nextPage == previousPage)) {
      --nextPage;
      paginate(nextPage);
    } else {
      paginate(previousPage);
    }
  }
  return (
    <>
      <PaginationBoot size="sm">
        {pageNumbers.map((page) => (
          <PaginationBoot.Item key={page} active={page === active}>
            {page}
          </PaginationBoot.Item>
        ))}
      </PaginationBoot>

      <Button variant="outline-primary" onClick={() => previous()}>
        Previous
      </Button>
      <Button variant="outline-primary" onClick={() => next()}>
        Next
      </Button>
    </>
  );
};

export default Pagination;
