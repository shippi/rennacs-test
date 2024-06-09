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

  const pagesCut = getPages(100, 5, currentPage);
  const pageNums = Array(pagesCut.end - pagesCut.start).fill(0).map((val, i) => i + pagesCut.start);

  console.log(pageNums)
  return (
    <div className="flex gap-x-2">
      {
        pageNums.map(num => (
          <button 
            key={num} 
            className="flex items-center justify-center w-8 h-8 p-4 bg-stone-100 rounded-md shadow-md hover:bg-stone-200 duration-200"
          >
            {num}
          </button>
        ))
      }
    </div>
  )
}

export default Pagination