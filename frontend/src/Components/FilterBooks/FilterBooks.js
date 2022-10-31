import React,{useState} from 'react'
import bookIcon from '../../Assets/Icons/bookIcon.png'
import InputField from '../../Assets/Common/InputField'
import './FilterBooks.css'
import topic_list from '../../Assets/topics.json'

function FilterBooks(){
    
    const [inputFields,setInputFields] = useState({author:'',title:'',publisher:'',genres:[],ISBN:"",add_topic:"",
        topics:topic_list
    })
    
    return(
        <div className="container  w-[95%]  border-2 border-solid rounded-md mt-6 mx-auto drop-shadow-lg hover:drop-shadow-lg bg-[#c4da9e]">
            {/*filter title */}
            <div className="flex-row flex justify-center">
                <h2 className='font-[fantasy] text-soft-black text-[30px]'>FIND YOUR BOOK </h2>
                <img src={bookIcon} className="w-9 h-9 mt-1 ml-2 rotate-12"/>
            </div>
            
            {/*filter inputs */}
            <div className="flex-col mt-[40px] ml-40">
                <InputField name="title" inputFields ={inputFields} setInputFields={setInputFields} label_="Book Title" placeholder_ = "Provide the book title or the words it includes"/>
                <InputField name="author" label_="Author" inputFields ={inputFields} setInputFields={setInputFields} placeholder_ = "Provide the book's author or the words it includes"/>
                <InputField name="publisher" label_="Publisher" inputFields ={inputFields} setInputFields={setInputFields} placeholder_ = "Provide the book publisher or the words it includes"/>

                <div className=''>
                <InputField name="add_topic" label_="Topic" inputFields ={inputFields} setInputFields={setInputFields} placeholder_ = "Enter a custom topic for the book or select one from below"/>
                <span>Popular Topics</span>
                    <div>
                        <span></span>
                    </div>
                </div>
            
            </div>
            
        </div>
            
    )
}

export default FilterBooks
