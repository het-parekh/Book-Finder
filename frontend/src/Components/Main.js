import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import SearchBooks from './SearchBooks'
import Header from './Header'
import Home from './Home/Home'

function Main(){
    return(
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element = {< SearchBooks />} />
            </Routes>
        </>
    )
}

export default Main