import "./style.css";
import React, { useState, useEffect } from "react";

interface PaginationProps {
  onSelect: (offset: number) => void;
  count: number;
  limit: number;
  offset: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  onSelect,
  count,
  limit,
  offset,
}) => {
  const [pagesToShow, setPagesToShow] = useState<(string | number)[]>([]);

  useEffect(() => {
    const totalPages = Math.ceil(count / limit);
    if (totalPages <= 5) {
      setPagesToShow(Array.from(Array(totalPages).keys()).map((i) => i + 1));
    } else if (offset < 4 * limit) {
      setPagesToShow(Array.from(Array(5).keys()).map((i) => i + 1));
    } else {
      const currentPage = Math.floor(offset / limit) + 1;
      setPagesToShow([
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ]);
    }
  }, [count, limit, offset]);

  return (
    <div className="pagination">
      {pagesToShow.map((page: string | number, index) => (
        <button
          className={(Number(page) - 1) * limit === offset ? "disabled" : ""}
          key={index}
          disabled={typeof page !== "number"}
          onClick={() => {
            if (typeof page === "number") {
              onSelect((page - 1) * limit);
            }
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
