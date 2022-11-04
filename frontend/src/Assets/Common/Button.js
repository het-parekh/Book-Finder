import React from 'react'

function Button(props){
    return(
            <button className="mt-3-auto text-[20px] inline-flex py-1 px-3 rounded-md border border-1px bg-gradient-to-r from-[#fff] to-[#e6e6e6] drop-shadow-md
                          transition ease-in-out delay-150 hover:-translate-y-1 duration-100 
                          ">
                {props.text}
                <span className={`content-${props.icon} h-6 m-auto ml-2`}></span>

            </button>
    )
}

export default Button