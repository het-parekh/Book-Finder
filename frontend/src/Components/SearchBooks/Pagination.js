import React,{useCallback, useState,useEffect} from 'react'

function Pagination(props){
    const [currentPage,setCurrentPage] = useState(0)
    const [pages,setPages] = [Array.from(Array(props.totalPages).keys())] // 0,1,2,3,4....props.totalPages

    useEffect(() => {

    })
    useEffect(() => {
        props.executeScroll()
    })

    // 0,1,2,3,4....props.totalPages

    const handleChangePage = useCallback((page) => {
        setCurrentPage(page)
        props.setBookParams((prev) => ({
            ...prev,
            startIndex:page*20
        }))
        props.executeScroll()
    },[currentPage])
    
    return(
        <>
            <div className='flex justify-center py-5 mb-5'>
                <ul className='inline-flex' >
                    <li onClick={() => handleChangePage(0)} title="First Page" class='m-auto mr-1 py-1 px-2 border border-solid  border-theme-green transition hover:bg-theme-green duration-400 ease-in-out hover:cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>
                    </li>
                    <li onClick={() => handleChangePage(Math.max(currentPage-1,0))}  title="Previous Page" class='m-auto mr-1 py-1 px-2 border border-solid  border-theme-green transition hover:bg-theme-green duration-400 ease-in-out hover:cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </li>
                    {currentPage<=3 ?
                    pages.slice(0,Math.min(props.totalPages,6)).map((pageNo) => (
                    <li key={pageNo} onClick={() => handleChangePage(pageNo)} className={`${currentPage === pageNo?"bg-theme-green":""} py-1 m-[2px] px-2 border border-solid border-theme-green drop-shadow-sm hover:cursor-pointer text-soft-black transition hover:bg-theme-green duration-400 ease-in-out `}>
                        {pageNo+1}
                    </li>
                    ))
                    :
                    currentPage>props.totalPages-3?
                    pages.slice(Math.max(0,props.totalPages-6),props.totalPages).map((pageNo) => (
                        <li key={pageNo}  onClick={() => handleChangePage(pageNo)} className={`${currentPage === pageNo?"bg-theme-green":""} py-1 m-[2px] px-2 border border-solid border-theme-green drop-shadow-sm hover:cursor-pointer text-soft-black transition hover:bg-theme-green duration-400 ease-in-out `}>
                            {pageNo+1}
                        </li>
                    ))
                    :
                    pages.slice(Math.max(0,currentPage-3) , Math.min(currentPage+3,props.totalPages)).map((pageNo) => (
                        <li key={pageNo} onClick={() => handleChangePage(pageNo)} className={`${currentPage === pageNo?"bg-theme-green":""} py-1 m-[2px] px-2 border border-solid border-theme-green drop-shadow-sm hover:cursor-pointer text-soft-black transition hover:bg-theme-green duration-400 ease-in-out `}>
                            {pageNo+1}
                        </li>
                    ))
                    }
                    <li onClick={() => handleChangePage(Math.min(currentPage+1,props.totalPages-1))} title="Next Page" class='m-auto mr-1 ml-1 py-1 px-2 border border-solid  border-theme-green transition hover:bg-theme-green duration-400 ease-in-out hover:cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    </li>
                    <li onClick={() => handleChangePage(props.totalPages-1)} title="Last Page" class='m-auto mr-1 py-1 px-2 border border-solid  border-theme-green transition hover:bg-theme-green duration-400 ease-in-out hover:cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Pagination