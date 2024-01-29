import React, { useState, useEffect } from "react"
import "../css/pagination.css"

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [pagesToShow] = useState(3)

  const handlePageChange = (page) => {
    onPageChange(page)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    const startPage = Math.max(1, currentPage - pagesToShow)
    const endPage = Math.min(totalPages, currentPage + pagesToShow)

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i}>
          <button
            className={currentPage === i ? "active" : ""}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>
      )
    }
    return pageNumbers
  }

  return (
    <ul className="pagination">
      <li>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt; Anterior
        </button>
      </li>
      {renderPageNumbers()}
      <li>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próximo &gt;
        </button>
      </li>
    </ul>
  )
}

export default Pagination
