import React from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
// import Home from './Home/Home'
import FilterBooks from './FilterBooks/FilterBooks'

function Main(){
    return(
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/books" element = {< FilterBooks />} />
        </Routes>
    )
}

export default Main