import React,{useState} from 'react'
import './BookList.css'

function BookList(){
    return(
        <>
        <div className="">
            
        </div>
        <div className="border-black border-solid border flex h-32 mr-px p-6 relative">
            <div className="rounded-sm flex-shrink-0 w-24 bottom-[-35px] left-[35px] shadow-[-2px 6px 19px 0px #7f818e] transition ease duration-300 hover:scale-[1.03]">
                <img src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" alt="" className="flex-shrink-0" />
            </div>
            <div className="book-content">
                <div className="font-semibold text-white">BIG MAGIC</div>
                <div className="text-sm mt-1 truncate">by Elizabeth Gilbert</div>
            </div>
        </div>
        </>
    )
}

export default BookList