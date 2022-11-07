import React from 'react'

function Button(props){
    if(props.icon){
        return(
            <button onClick={props.onClick}
                    className="mt-3-auto text-[20px] inline-flex py-1 px-3 rounded-md border border-1px bg-gradient-to-r from-[#fff] to-[#e6e6e6] drop-shadow-md
                          transition ease-in-out delay-150 hover:-translate-y-1 duration-100 
                          ">
                {props.text}
                <img className={`h-6 m-auto ml-2`} src={props.icon}></img>

            </button>
    )
    }

}

export default Button