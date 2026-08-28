interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <nav aria-label="Pagination">
      <button
        type="button"
        aria-label="Go to previous page"
        disabled={currentPage === 0}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      <span aria-current="page">
        Page {currentPage + 1} of {totalPages}
      </span>

      <button
        type="button"
        aria-label="Go to next page"
        disabled={currentPage === totalPages - 1}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </nav>
  )
}

export default Pagination
