import React,{useEffect,useState,useRef} from 'react'
import FilterBooks from "../FilterBooks/FilterBooks";
import BookList from '../BookList/BookList'
import SortBooks from './SortBooks';
import Pagination from './Pagination'
import {getBooks,getSavedBooks} from '../Api'

function SearchBooks(props){
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({behavior:"smooth"})    
    const [showBooks,setShowBooks] = useState(false)
    const [books,setBooks] = useState([])
    const [savedBooks,setSavedBooks] = useState()
    const [totalPages,setTotalPages] = useState()
    const [bookParams,setBookParams] = useState({
        title:"",
        author:"",
        publisher:"",
        subjects:[],
        isbn:"",
        startIndex:0,
        maxResults:20,
        orderBy:"relevance"
    })

    useEffect(() => {
        if(props.auhtorizationStatus){
            getSavedBooks().then((res) => {
                setSavedBooks(new Set([...res.data?.books]))
            })
        }
    },[])

    useEffect(() => {

        getBooks(bookParams).then((res => {
            if(!res.data || !res.data.items){
                setBooks([])
                return
            }
            let items = res.data.items
            let temp = []
            items.forEach((book) => {
                temp.push({
                    title:book.volumeInfo.title,
                    authors:book.volumeInfo.authors,
                    publisher:book.volumeInfo.publisher,
                    description:book.volumeInfo.description,
                    thumbnail:book.volumeInfo.imageLinks?.thumbnail,
                    infoLink:book.volumeInfo.infoLink,
                    rating:book.volumeInfo.averageRating,
                    isbn:book.volumeInfo.industryIdentifiers[0].identifier
                })
            })
            if(bookParams.startIndex === 0){
                setTotalPages(Math.ceil(res.data.totalItems/20))
            }
            setBooks(temp)
        }))
             
    },[bookParams])



    return(
        <>
            <FilterBooks setShowBooks={setShowBooks } setBookParams={setBookParams}/>
            <div ref={myRef}>{showBooks?<SortBooks setBookParams={setBookParams} bookParams={bookParams} />:null}</div>
            {showBooks?<BookList savedBooks={savedBooks} books = {books} auhtorizationStatus = {props.auhtorizationStatus}/>:null}
            {showBooks && totalPages?<Pagination executeScroll={executeScroll} setBookParams={setBookParams} totalPages={totalPages}/>:null}
        </>
    )
}

export default SearchBooks