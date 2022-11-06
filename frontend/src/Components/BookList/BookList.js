import React,{useState} from 'react'
import './BookList.css'
import Rating from '../Common/Rating'
import coverUnavailable from '../../Assets/Images/cover-unavailable.jpg'
function BookList(props){

    const [expandedIndex,setExpandedIndex] = useState(-1)
    if(props.books && props.books.length === 0){
        return(
            <div className="border border-solid border-gray-300 drop-shadow-2xl flex h-32 p-4 relative mb-10 text-center">
                Unfortunately, No Results Found were returned for your search. Change the search parameters & try again...
            </div>
        )
    }

    return(
    <>      
        {props.books && props.books.map((book,index) => (
            <div className={`border border-solid border-gray-300 ${expandedIndex!==index?"h-36":""} drop-shadow-2xl flex p-8 relative mb-10`}>
                
                <div className="rounded-sm  flex-shrink-0 bottom-[-35px] left-[35px] transition ease duration-300 hover:scale-[1.03]">
                    <img src={book.thumbnail??coverUnavailable} width={110}  className="flex-shrink-0 h-36" />
                </div>
                <div className="ml-10 w-[20%]">
                    <div className={`text-soft-black ${expandedIndex!==index?"line-clamp-1":""} "`}><span className='font-semibold '>Title: </span>{book.title??(<span className='italic text-gray-600'>Info Unavailable</span>)}</div>
                    <div className={`text-soft-black ${expandedIndex!==index?"line-clamp-2":""} "`}><span className='font-semibold 2'>Author: </span>{book.authors?book.authors.join(', '):(<span className='italic text-gray-600'>Info Unavailable</span>)}</div>
                    <div className={`text-soft-black ${expandedIndex!==index?"line-clamp-1":""} "`}><span className='font-semibold'>Publisher: </span>{book.publisher??(<span className='italic text-gray-600'>Info Unavailable</span>)}</div>
                </div>
                    
                <p className={`text-soft-black w-[40%] ml-5 ${expandedIndex!==index?"line-clamp-3":""} "`}> 
                    {book.description??(<div className='text-center italic text-gray-600 '>No Description Available</div>)}
                </p>

                <div className='flex flex-col mt-auto mb-auto ml-5 w-[180px]'>
                    <div className='text-center text-[24px] font-semibold'>{book.rating}</div>
                    <div className='m-auto'>
                        <Rating value={Number(book.rating)} />
                    </div>
                </div>
                <div  className='m-auto align-middle bg-[#c5c5c54d] px-2 py-2 content text hover:underline hover:cursor-pointer flex hover:text-blue-600'>
                    <a href={book.infoLink} target="_blank">Book Overview </a>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-5 m-auto ml-2' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </div>
                {expandedIndex !== index?
                <button onClick={() => setExpandedIndex(index)} className='float-right absolute top-2 right-2 hover:shadow-[0px_0px_3px_rgba(26,26,26,0.3)]' title="Expand">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-1 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                    </svg>
                </button>
                :
                <button onClick={() => setExpandedIndex(-1)} className='float-right absolute top-2 right-2 hover:shadow-[0px_0px_3px_rgba(26,26,26,0.3)]' title="Collapse">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                    </svg>
                </button>
                }
            </div>
        ))} 
    </>
    )
    
}

export default BookList