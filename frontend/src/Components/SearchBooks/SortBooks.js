import React, { useEffect } from 'react'

function SortBooks(props){
    // useEffect(() => {
    //     props.executeScroll()
    // },[])
    const handleSort = ((e) => {
        props.setBookParams((prevState) => ({
            ...prevState,
            orderBy:e.target.value,
            startIndex:0
        }))
    })
    return(
        <>
            <div className="flex justify-end p-4 ">
                <select onChange={handleSort} id="countries" class=" m-5  border border-solid boreder-2 border-gray-400 p-2 rounded-sm w-60 focus:outline-none hover:cursor-pointer max-sm:m-auto max-sm:mt-4">
                    <option selected value="relevance" >Relevance</option>
                    <option value="newest">Latest</option>
                </select>
            </div>
        </>
    )
}

export default SortBooks