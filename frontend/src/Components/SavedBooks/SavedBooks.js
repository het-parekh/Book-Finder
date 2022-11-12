import React,{useEffect,useState} from 'react'
import BookList from '../BookList/BookList'
import {getSavedBooks,getBooks} from '../Api'


function SavedBooks(){
    
    useEffect(() => {
        
        (async () => {
        var fetchSavedBooks = await getSavedBooks()
        let book_ids = fetchSavedBooks.data?.books
        var temp = []
        for(let i =0 ;i < book_ids.length;i++){
            let booksResponse = await getBooks({isbn:book_ids[i]})
            let book = booksResponse.data?.items
            if (book && book.length === 1){
                book = book[0]
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
            }
        }
        setBooks(temp)
    })()
    },[])

    const [books,setBooks] = useState()
    if(!books){
        return
    }
    console.log(books,"heyaa",books.length,typeof books)
    
    return(
        <div className='container w-full '>
            <h1 className='text-soft-black text-center mt-[2%] text-[40px]'>My <span className='text-theme-green'>Book</span>List</h1>
            <div>
                <BookList books={books} authorizationStatus = {true} />
            </div>
        </div>
    )
}



export default SavedBooks