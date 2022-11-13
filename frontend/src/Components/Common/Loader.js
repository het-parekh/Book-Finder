import React from 'react'
import loader from '../../Assets/Icons/loader.svg' 

function Loader() {

    return(
        <div className='absolute top-[50%] left-[50%] mr-[-50%] translate-x-[-50%] translate-y-[-50%]'>
            <img src={loader} />
            <div className="mt-2 font-bold ml-[-10px] ">READING </div>
        </div>
    )
}

export default Loader