interface Props {
  page: number;
  limit: number;
  total: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
}

const Pagination = ({
  page,
  limit,
  total,
  onPageChange,
  onLimitChange,
}: Props) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex justify-between items-center mt-6">
      <div className="text-sm text-gray-600">
        Showing page {page} of {totalPages} ({total} total)
      </div>

      <div className="flex items-center gap-4">
        <button
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <button
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>

        <select
        aria-label="limit"
          value={limit}
          onChange={(e) => onLimitChange(Number(e.target.value))}
          className="border px-2 py-1 rounded"
        >
          <option value={15}>15</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;