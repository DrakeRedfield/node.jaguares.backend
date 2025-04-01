import { takeElements } from "../constant/pagination";

export const getPaginationResponse = (data: any[], totalRows: number, page: number) => {
  const lastPage = Math.ceil(totalRows / takeElements);
  const nextPage = page + 1 > lastPage ? null : page + 1;
  const prevPage = page - 1 < 1 ? null : page - 1;
  return {
    data,
    count: totalRows,
    currentPage: page,
    lastPage,
    nextPage,
    prevPage
  }
};
