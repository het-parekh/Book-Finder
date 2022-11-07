import React from 'react'

function Alert(props){
    window.scroll({top: 0, left: 0, behavior: 'smooth' })

    return(
        <div className={`flex bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-10 py-3 shadow-md absolute top-1 right-5 max-sm:w-full max-sm:top-0 max-sm:right-0`} role="alert">
                <div className="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                <div>
                <p className="font-bold">{props.header ?? null}</p>
                <p className="text-sm">{props.message ?? null}</p>
                </div>
        </div>
    )
}

export default Alert