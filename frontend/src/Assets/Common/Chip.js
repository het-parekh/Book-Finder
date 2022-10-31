import React from 'react'

function Chip(props){
    return(
        <div className='inline-flex py-2 px-1 drop-shadow-md' key={props.text}>
            <div className='h-10 border-4 border-solid border-[#fff] rounded-l-[20px]  px-1 bg-[#fff]'>
                    <div className='flex mt-1'>
                        <div className=" rounded-[50%] w-[25px] inline-flex overflow-hidden justify-center items-center bg-theme-green" >
                            <span>{props.text.slice(0,1).toUpperCase()}</span>
                        </div>
                        <span className='ml-2'>
                            {props.text}
                        </span>
                    </div>
            </div>
            {props.status === false?
            <div onClick={() => props.selectTopic(props.text)} className='rounded-r-[20px] h-10 border-[3px] border-[#fff] bg-gradient-to-r from-[#b0ce7e] to-[#8fb946] hover:from-[#8fb946] hover:to-[#729438]  hover:cursor-pointer'> 
                <span className='content-plus h-7 mt-[4.5px] mr-2 ml-1 '></span>
            </div>
            :
            <div onClick={() => props.selectTopic(props.text)} className='rounded-r-[20px] h-10 border-[3px] border-[#fff] bg-gradient-to-r from-[#b0ce7e] to-[#8fb946] hover:from-[#8fb946] hover:to-[#729438]  hover:cursor-pointer'> 
                <span className='content-check h-6 mt-[4.5px] mr-2 ml-1 px-[2px]'></span>
            </div>
            }
        </div>
    )
}


export default Chip