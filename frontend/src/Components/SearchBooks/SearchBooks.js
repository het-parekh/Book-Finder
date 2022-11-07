import React,{useEffect,useState,useRef} from 'react'
import FilterBooks from "../FilterBooks/FilterBooks";
import BookList from '../BookList/BookList'
import SortBooks from './SortBooks';
import Pagination from './Pagination'
import axios from 'axios'

function SearchBooks(){
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({behavior:"smooth"})    
    const [showBooks,setShowBooks] = useState(false)
    const [books,setBooks] = useState([])
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
        console.log(bookParams.startIndex,'start')
        console.log(bookParams.subjects,'subjects')
        let url="https://www.googleapis.com/books/v1/volumes?q="
        if(bookParams.isbn.trim() !== ""){
            url+=`+isbn:${bookParams.isbn.trim()}`
        }else{
            // url+= bookParams.title.trim()??""
            url+= bookParams.title.trim()?`+intitle:${bookParams.title.trim()}`:''
            url+= bookParams.author.trim()?`+inauthor:${bookParams.author.trim()}`:''
            url+= bookParams.subjects?`${bookParams.subjects.map((subject) => ('+subject:'+subject))}`:''
            url+= `&orderBy=${bookParams.orderBy.trim()}&startIndex=${bookParams.startIndex}&maxResults=${bookParams.maxResults}`
        }     
        console.log(url,"URL")
        axios.get(url).then((res) => {
            
            if(!res.data || !res.data.items){
                setBooks([])
                return
            }
            console.log('res.data',res.data)
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
                })
            })
            if(bookParams.startIndex === 0){
                setTotalPages(Math.ceil(res.data.totalItems/20))
            }
            setBooks(temp)
        })
    },[bookParams])

    return(
        <>
            <FilterBooks setShowBooks={setShowBooks } setBookParams={setBookParams}/>
            <div ref={myRef}>{showBooks?<SortBooks setBookParams={setBookParams} bookParams={bookParams} />:null}</div>
            {showBooks?<BookList books = {books}/>:null}
            {showBooks && totalPages?<Pagination executeScroll={executeScroll} setBookParams={setBookParams} totalPages={totalPages}/>:null}
        </>
    )
}

export default SearchBooks