import React,{useState} from 'react'
import bookIcon from '../../Assets/Icons/bookIcon.png'
import InputField from '../../Assets/Common/InputField'
import './FilterBooks.css'
import TagsInput from 'react-tagsinput'

function FilterBooks(){
    
    const [inputFields,setInputFields] = useState({author:'',title:'',publisher:'',genres:[],ISBN:"",topics:[]})
    
    const validateTag = (tag) => Boolean(tag.trim())
    const handleTopics = (topics) => {
        setInputFields({...InputField,topics:topics})
    }
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
                    <div>Topics</div>
                    <TagsInput 
                        value={inputFields.topics} 
                        onChange={handleTopics} 
                        onlyUnique={true} 
                        addKeys={[9,13,32]} //Enter , Tab , Space
                        className='h-10'
                        validate = {validateTag}
                        inputProps={{
                            className: `outline-none g-gray-200  appearance-none border-2 border-gray-200 rounded  
                                        text-soft-black leading-tight focus:outline-none focus:bg-white 
                                        focus:border-gray-400 py-2 px-4 placeholder-gray-300`,
                            placeholder:'Enter genres to search from'
                        }}
                        tagProps={{
                            className:'bg-[#fff] rounded-xl px-3 py-0.5 drop-shadow-md mr-3 inline-flex ',
                            classNameRemove:'content-x_circle h-5 ml-1 mt-[2px]'
                        }}
                    />
                </div>
            
            </div>
            
        </div>
            
    )
}

export default FilterBooks
