import React from 'react'
import savedBooks from '../Assets/Icons/saved-books.png'
import {Link} from 'react-router-dom'
import GoogleLogin from './Common/GoogleLogin'


function Header(props){
    return(
    
    <nav className="flex items-center justify-between flex-wrap bg-theme-green p-4">
        <div className="flex items-center flex-shrink-0 text-soft-black mr-6">
            <span className='content-open_book mr-3'></span>
            <span className="font-semibold text-[24px] tracking-tight">BookSEO</span>
        </div>
        <div className="block lg">
            {props.auhtorizationStatus === false?
                <GoogleLogin />
            :
            <>
                <div className='inline-flex'>
                    <div className='flex bordedr-solid border-2 border-soft-black text-soft-black py-1 px-5 rounded-lg font-semi-bold '>
                        <span className='mr-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </span>
                        
                        {props.userDetails.firstName} {props.userDetails.lastName}
                    </div>
                    <Link to='/saved-books' className='m-auto ml-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:drop-shadow-lg inline-flex '>
                        <div className='inline-flex'>
                            <img className='mt-auto mb-auto mr-0 h-6 w-6' src={savedBooks} />
                            <span className='ml-0 border-solid border-soft-black border-2 border-l-0 pr-1'>
                                Saved Books
                            </span>
                        </div>
                        
                    </Link>
                </div>
            </>
            }
        </div>
    </nav>
    )
}

export default Header