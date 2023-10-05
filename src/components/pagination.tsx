import React from "react";

interface IPagination {
  itemsLength: number;
  currentPage: number;
  setItemsLength: (newLength: number) => void;
  setPageNumber: (newLength: number) => void;
  totalCount: number;
}

export const Pagination = ({ itemsLength, currentPage, setItemsLength, setPageNumber, totalCount }: IPagination) => {
  const maxPageNumber = Math.ceil(totalCount / itemsLength);

  const moveToPrevPage = () => {
    if(currentPage === 1) return;
    setPageNumber(currentPage - 1);
  }

  const moveToNextPage = () => {
    if (currentPage + 1 > maxPageNumber) return;
    setPageNumber(currentPage + 1);
  }

  return (
    <div className="pagination">
      <div onClick={moveToPrevPage}>{'<'}</div>
      <div>{`${currentPage}/${itemsLength}`}</div>
      <div onClick={moveToNextPage}>{'>'}</div>
      <select  onChange={(e) => setItemsLength(Number(e.target.value))}>
        <option value={25}>25/page</option>
        <option  value={50}>50/page</option>
      </select>
    </div>
  )
};