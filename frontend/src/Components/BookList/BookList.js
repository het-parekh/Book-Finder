import React,{useState} from 'react'
import './BookList.css'
import Rating from '../Common/Rating'

function BookList(props){
    if(props.books && props.books.length === 0){
        return(
            <div className="border border-solid border-gray-300 drop-shadow-2xl flex h-32 p-4 relative mb-10 text-center">
                Unfortunately, No Results Found were returned for your search. Change the search parameters & try again...
            </div>
        )
    }

    return(
    <>      
        {props.books && props.books.map((book) => (
            <div className="border border-solid border-gray-300 drop-shadow-2xl flex h-32  p-4 relative mb-10">
            <div className="rounded-sm flex-shrink-0 w-24 bottom-[-35px] left-[35px] drop-shadow-[-2px 6px 19px 0px #7f818e] transition ease duration-300 hover:scale-[1.03]">
                <img src={book.thumbnail} alt="" className="flex-shrink-0" />
            </div>
            <div className="ml-10 w-[13%]">
                <div className="text-soft-black"><span className='font-semibold'>Title: </span>{book.title}</div>
                <div className="text-sm mt-1"><span className='font-semibold'>Author: </span>{book.authors?book.authors.join(', '):"N/A"}</div>
                <div className="text-sm mt-1"><span className='font-semibold'>Publisher: </span>{book.publisher??"N/A"}</div>
            </div>
            <p className="text-soft-black w-[45%] ml-10 line-clamp-4"> 
                {book.description}
            </p>
            <div className='flex flex-col mt-auto mb-auto ml-10'>
                <div className='text-center text-[24px] font-semibold'>{book.rating}</div>
                <div>
                    <Rating value={Number(book.rating)} />
                </div>
            </div>
            <div  className='m-auto align-middle bg-[#c5c5c54d] px-2 py-2 content text hover:underline hover:cursor-pointer flex hover:text-blue-600'>
                <a href={book.webReaderLink}>Book Overview </a>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-5 m-auto ml-2' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </div>
        </div>
        ))} 
    </>
    )
}

export default BookList