import React,{useState} from 'react'
import bookIcon from '../../Assets/Icons/bookIcon.png'
import InputField from '../Common/InputField'
import Chip from '../Common/Chip'
import Button from '../Common/Button'
import './FilterBooks.css'
import topic_list from '../../Assets/topics.json'
import TagsInput from 'react-tagsinput'

function FilterBooks(props){
    
    const [inputFields,setInputFields] = useState({author:'',title:'',publisher:'',topics:[],ISBN:"",add_topic:"",selected_topics:[]})
    const [allTopics,setAllTopics]  = useState(topic_list)

    //TagsInput props
    const validateTag = (topic) => Boolean(topic.trim()) 
    const handleTopics = (selected_topics,changed_topics) => {

        //Remove the check from the popular topic list
        if(selected_topics.length < inputFields.selected_topics.length){
            changed_topics.forEach((removed_topic) => {
                removed_topic = removed_topic.slice(0,1).toUpperCase() + removed_topic.slice(1,).toLowerCase() //match lower case letters to the popular list
                if(removed_topic in allTopics){
                    setAllTopics({
                        ...allTopics,
                        [removed_topic]:false
                    })
                }
            })
        }else{
             //Add the check to the popular topic list
            changed_topics.forEach((add_topic) => {
                add_topic = add_topic.slice(0,1).toUpperCase() + add_topic.slice(1,).toLowerCase() //match lower case letters to the popular list
                if(add_topic in allTopics){
                    setAllTopics({
                        ...allTopics,
                        [add_topic]:true
                    })
                }
            })
        }

        //adds custom selected topics
        setInputFields({...inputFields,selected_topics:selected_topics})
    }

    const selectTopic = (topic) => {
        // Adding or Removing popular topics from the selected topics
        if(allTopics[topic] === false ){
            setInputFields({
                ...inputFields,
                selected_topics:[...inputFields.selected_topics,topic]
            })
        }else{
            setInputFields({
                ...inputFields,
                selected_topics:inputFields.selected_topics.filter(x => x!==topic)
            })
        }
        setAllTopics({
            ...allTopics,
            [topic]:!allTopics[topic]
        })
    }

    const handleSubmit = ((e) => {
        props.setBookParams((prevState) => ({
            ...prevState,
            title:inputFields.title,
            author:inputFields.author,
            publisher:inputFields.publisher,
            subjects:[inputFields.topics],
            isbn:inputFields.ISBN,
        }))
        props.setShowBooks(true)
    })

    return(
        <div className="container  w-[100%]  border-2 border-solid rounded-md mt-6 mx-auto drop-shadow-lg hover:drop-shadow-lg bg-theme-green">
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

                <div className='ml-10 mb-5'>
                    <div className='text-soft-black font-bold mt-[3px] text-[20px] mb-4'>Topics (max 10)</div>
                    <div className='text-soft-black font-bold text-[14px] mb-2 italic '>Enter a custom topic or pick from the ones from below</div>
                    <TagsInput 
                        value={inputFields.selected_topics} 
                        onChange={handleTopics} 
                        onlyUnique={true} 
                        addKeys={[9,13]} //Enter , Tab , Space
                        className='bg-[#fff] w-[51%] inline-block py-2 border-2 border-solid rounded-md overflow-auto'
                        validate = {validateTag}
                        inputProps={{
                            className: `outline-none g-gray-200  appearance-none rounded  
                                        text-soft-black leading-tight focus:outline-none focus:bg-white 
                                        py-4 placeholder-gray-400 ml-4 `,
                            placeholder:'Add Topic'
                        }}
                        tagProps={{
                            className:'bg-gradient-to-r from-[#bcd590] to-[#a5c76b] rounded-xl px-3 py-0.5 drop-shadow-md ml-3 mt-3 inline-flex ',
                            classNameRemove:'content-x_circle h-5 ml-1 mt-[2px] hover:cursor-pointer  '
                        }}
                    />
                </div>
                <div className='ml-10 w-[95%]'>
                    <div className='text-soft-black font-bold mt-[3px] text-[20px] mb-4'>Popular Topics</div>
                    <div>
                        {
                            Object.keys(allTopics).map((book) => {
                                return(
                                    <Chip text={book} status={allTopics[book]} selectTopic={selectTopic}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div></div>

                <div className='text-[24px] text-center py-3 after:mt-[-18px] after:flex after:m-auto after:content-[""] after:border-b-[2px] after:border-b-[#fff] after:border-b-solid mb-5 mr-20'><span className='bg-theme-green px-2 text-soft-black'>OR</span></div>

                <InputField name="ISBN" inputFields ={inputFields} setInputFields={setInputFields} label_="ISBN No." placeholder_ = "Provide the ISBN number for the book (Prefered)"/>
                
                <div className="mt-10 mb-10 flex justify-end mr-20 ">
                    <Button onClick={handleSubmit} text="Search Book" icon='search'/>
                </div>
                
            </div>
            
        </div>
            
    )
}

export default FilterBooks
