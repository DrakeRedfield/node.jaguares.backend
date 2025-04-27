import { takeElements } from "../constant/pagination";

export const getPaginationResponse = <T>(data: T[], totalRows: number, page: number) => {
  const totalPages = Math.ceil(totalRows / takeElements);
  const nextPage = page + 1 > totalPages ? null : page + 1;
  const prevPage = page - 1 < 1 ? null : page - 1;
  return {
    data,
    pagination: {
      count: totalRows,
      currentPage: page,
      totalPages,
      nextPage,
      prevPage,
    }
  }
};
