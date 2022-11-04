import React,{useState,useEffect,useCallback } from 'react'
import './Home.css'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particleParams from './Particles'
import Button from '../../Assets/Common/Button';
import {Link} from 'react-router-dom'

function Home(){

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return(
        <div className='container h-[calc(100vh-74.66px)] relative overflow-hidden '>
            <diV className='h-[100vh] absolute opacity-50'>
            <Particles id="tsparticles" className='h-[inherit]' init={particlesInit} loaded={particlesLoaded} options={{...particleParams}}/>
            </diV>
            <div class="p-6 max-w-xl  rounded-lg shadow-md absolute border border-2px left-[50%] translate-x-[-50%] mt-40">
                <p>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-soft-black">BookSEO</h5>
                </p>
                <p class="mb-3 text-[18px] font-normal text-black">
                    Whether you want the cheapest reading copy or a specific collectible edition, 
                    with <i>BookSEO</i>, you'll find just the right book. BookSEO uses <i>Google Books API</i> to search the inventories 
                    of over 100,000 booksellers worldwide, accessing millions of books with just a single click! Click the button below to get started.</p>
                
                <span className='float-right mt-2'><Link to='books'><Button text="Find your book" icon='search_book'/></Link></span>
            </div>
        </div>
)}

export default Home