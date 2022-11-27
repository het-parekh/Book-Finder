import React,{useState,useEffect} from 'react'
import savedBooks from '../Assets/Icons/saved-books.png'
import searchBooks from '../Assets/Icons/search-book-header.png'
import {Link} from 'react-router-dom'
import GoogleLogin from './Common/GoogleLogin'
import {logout} from './Api'



function Header(props){
    const hamburger = `h-1 w-6 my-[2px] rounded-full bg-soft-black transition ease transform duration-300`;
    const [open,setOpen] = useState(false)
    
    useEffect(() => {

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const handleWindowSizeChange = () => {
        if (window.innerWidth > 768){
            setOpen(true)
        }else{
            setOpen(false)
        }
    }
    if (window.innerWidth > 768 && open!=true){
        setOpen(true)
    }

    const handleLogout = async () => {
        logout().then(() => {
            window.location.href = '/'
        })
    }

    return(
    
    <nav className="flex items-center justify-between flex-wrap bg-theme-green p-4 sticky max-sm:p-2">
        <Link to='/' className="flex items-center flex-shrink-0 text-soft-black mr-6 max-sm:mr-2">
            <span className='content-open_book mr-3'></span>
            <span className="font-semibold text-[24px] tracking-tight">BookSE</span>
        </Link>
        
        <div className="flex ml-auto"><></>
            {props.authorizationStatus === false?
                <GoogleLogin />
            :
            <>
                    <div className='flex border-solid border-2 border-soft-black text-soft-black py-1 px-5 rounded-lg font-semi-bold max-sm:px-2 max-sm:justify-center'>
                        <span className='mr-1 max-sm:border-none'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </span>
                        
                        {props.userDetails.firstName} {props.userDetails.lastName}
                    </div>
            </>
            }
            <button className="lg:hidden flex flex-col ml-2  rounded justify-center items-center group" onClick={() => setOpen(!open)}>
                <div className={`${hamburger} ${open? "rotate-45 translate-y-2 group-hover:opacity-100": "group-hover:opacity-100"}`}
                />
                <div className={`${hamburger} ${open ? "opacity-0" : "group-hover:opacity-100"}`}
                />
                <div className={`${hamburger} ${open? "-rotate-45 -translate-y-2 group-hover:opacity-100": "group-hover:opacity-100"}`}
                />
            </button>
        </div>

             
            <div className={`flex  max-sm:w-full max-sm:flex-col ${open?"max-sm:h-[120px]":"max-sm:h-[0px]"} transition-all ease-in duration-250`}>
            {open &&
                <>
                {props.authorizationStatus === true?<>
                <Link to='/saved-books' className='ml-4 hover:drop-shadow-lg inline-flex max-sm:ml-0 max-sm:py-1 max-sm:mt-2 max-sm:shadow-none max-sm:justify-center font-semibold '>
                    <div className='inline-flex'>
                        <img className='mt-auto mb-auto mr-0 h-6 w-6 max-sm:hidden' src={savedBooks} />
                        <span className='ml-0 border-solid border-soft-black border-2 border-l-0 pr-1 max-sm:border-none '>
                            Saved Books
                        </span>
                    </div>
                    
                </Link>
                <Link to='/books' className=' ml-4 hover:drop-shadow-lg inline-flex max-sm:ml-0 max-sm:py-1 max-sm:shadow-none max-sm:border-none max-sm:justify-center font-semibold'>
                    <div className='inline-flex'>
                        <img className='mt-auto mb-auto mr-0 h-6 w-6 max-sm:hidden' src={searchBooks} />
                        <span className='ml-0 border-solid border-soft-black border-2 border-l-0 pr-1 max-sm:border-none'>
                            Filter Books
                        </span>
                    </div> 
                </Link>
                <button onClick={handleLogout} className='ml-4  hover:drop-shadow-lg inline-flex max-sm:ml-0 max-sm:py-2 max-sm:justify-center font-semibold'>
                    <div className='inline-flex'>
                        <span className='ml-0  pr-1 '>
                            Logout 
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                            </svg>
                    </div> 
                </button>
                </>:null}
            </>}
            </div>
    </nav>
    )
}

export default Header