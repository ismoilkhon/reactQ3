import "./style.css";
import React from "react";

interface PaginationProps {
  onSelect: (offset: number) => void;
  count: number;
  limit: number;
  offset: number;
}

export class Pagination extends React.Component<PaginationProps> {
  render() {
    const { onSelect, count, limit, offset } = this.props;
    const totalPages = Math.ceil(count / limit);

    let pagesToShow: (string | number)[] = [];
    if (totalPages <= 6) {
      pagesToShow = Array.from(Array(totalPages).keys()).map((i) => i + 1);
    } else if (offset < 5 * limit) {
      pagesToShow = Array.from(Array(6).keys()).map((i) => i + 1);
    } else {
      const currentPage = Math.floor(offset / limit) + 1;
      pagesToShow = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
    }

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
  }
}
