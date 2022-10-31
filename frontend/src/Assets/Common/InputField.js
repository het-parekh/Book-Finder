import React from 'react'

function InputField(props){

    const hangeInputChange = (e) => {
        let name_ = e.target.name
        let val = e.target.value
        props.setInputFields({...props.inputFields,[name_]:val})
    }

    return(
    <div className='flex flex-row mb-10'>
        <label className=" text-soft-black font-bold mt-[3px] ml-10 mr-4 text-[20px] w-[100px]" for={`inline-${props.name}`}>
            {props.label_}
        </label>
        <input 
            className="g-gray-200 w-[40%] appearance-none border-2 border-gray-200 rounded  
                    text-soft-black leading-tight focus:outline-none focus:bg-white 
                    focus:border-gray-400 py-2 px-4 placeholder-gray-300" 
            id={`inline-${props.name}`} 
            name={props.name}
            placeholder={props.placeholder_}
            onChange={(e) => hangeInputChange(e)}
            >
        </input>
    </div>
    )
}

export default InputField