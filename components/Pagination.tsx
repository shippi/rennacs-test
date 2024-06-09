interface Props {
  count: number,
  currentPage: number
  setPage: Function
}

function Pagination({ count, currentPage, setPage }: Props) {
  const totalPageCount = Math.ceil(count/20);
  
  const getPages = (pagesCount: number, pagesCutCount: number, currentPage: number) => {
    const ceiling = Math.ceil(pagesCutCount / 2);
    const floor = Math.floor(pagesCutCount / 2);
  
    if (pagesCount < pagesCutCount) {
      return { start: 1, end: pagesCount + 1 };
    } else if (currentPage >= 1 && currentPage <= ceiling) {
      return { start: 1, end: pagesCutCount + 1 };
    } else if (currentPage + floor >= pagesCount) {
      return { start: pagesCount - pagesCutCount + 1, end: pagesCount + 1 };
    } else {
      return { start: currentPage - ceiling + 1, end: currentPage + floor + 1 };
    }
  }

  const pagesCut = getPages(totalPageCount, 5, currentPage);
  const pageNums = Array(pagesCut.end - pagesCut.start).fill(0).map((val, i) => i + pagesCut.start);

  return (
    <div className="flex gap-x-2 py-8">
      <button 
        className={`flex items-center justify-center w-8 h-8 p-4 bg-stone-100 rounded-md shadow-md hover:bg-stone-200 duration-200 ${currentPage === 1 && "pointer-events-none bg-stone-400 text-stone-500"}`}
        onClick={() => setPage(currentPage - 1)}
      >
        <i className="bi bi-arrow-left-short text-lg"/>
      </button>
      {
        pageNums.map(num => (
          <button 
            key={num} 
            className={`flex items-center justify-center w-8 h-8 p-4 bg-stone-100 rounded-md shadow-md hover:bg-stone-200 duration-200 ${num === currentPage && "!bg-blue-200"}`}
            onClick={() => setPage(num)}
          >
            {num}
          </button>
        ))
      }
      <button 
        className={`flex items-center justify-center w-8 h-8 p-4 bg-stone-100 rounded-md shadow-md hover:bg-stone-200 duration-200 ${currentPage === totalPageCount && "pointer-events-none bg-stone-400 text-stone-500"}`}
        onClick={() => setPage(currentPage + 1)}
      >
        <i className="bi bi-arrow-right-short text-lg"/>
      </button>
    </div>
  )
}

export default Pagination