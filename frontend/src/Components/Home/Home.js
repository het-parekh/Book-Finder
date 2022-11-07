import React,{useState,useCallback } from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particleParams from './Particles'
import Button from '../Common/Button';
import {Link} from 'react-router-dom'
import search_book from '../../Assets/Icons/search-book.png'
function Home(){
    const [loaded,setLoaded] = useState(false)
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
        await setLoaded(true)
    }, []);

    return(
        <div className='container h-[calc(100vh-74.66px)] relative overflow-hidden '>
            <div className='h-screen absolute opacity-50 w-screen'>
            <Particles id="tsparticles" className='h-[inherit]' init={particlesInit} loaded={particlesLoaded} options={{...particleParams}}/>
            </div>
            {loaded === true? // Prevents screen buffer on page load due to canvas being loaded
            <div className="p-6 max-w-xl  rounded-lg shadow-md absolute border border-2px left-[50%] translate-x-[-50%] mt-40 max-sm:w-4/5 max-sm:mt-20 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-soft-black">BookSEO</h5>
                <p className="mb-3 text-[18px] font-normal text-black">
                    Whether you want the cheapest reading copy or a specific collectible edition, 
                    with <i>BookSEO</i>, you'll find just the right book. BookSEO uses <i>Google Books API</i> to search the inventories 
                    of over 100,000 booksellers worldwide, accessing millions of books with just a single click! Click the button below to get started.</p>
                
                <span className='float-right mt-2'><Link to='books'><Button text="Find your book" icon={search_book}/></Link></span>
            </div>
            :null}
        </div>
)}

export default Home