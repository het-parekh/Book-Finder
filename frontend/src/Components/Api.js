import axios from 'axios'

const baseUrl = 'https://book-searchengine.vercel.app/bookse-backend/'

export const getBooks = ((bookParams) => {
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
    return axios.get(url)
})

export const getBooksbyIBSN = ((book_ids) => {

})

export const googleAuth = (() => {
    window.open(baseUrl + 'user/auth/google','_self')
})

export const checkAuthorization = (() => {
    return axios.get(baseUrl + 'user/auth/success',{withCredentials:true})
})

export const logout = (() => {
    return axios.post(baseUrl + 'user/logout',{},{withCredentials:true})
})

export const addSavedBook = ((book_id) => {
    return axios.put(baseUrl + 'user/savedBooks/' + book_id,{},{withCredentials:true})
})
export const removeSavedBook = ((book_id) => {
    return axios.delete(baseUrl + 'user/savedBooks/' + book_id,{withCredentials:true})
})
export const getSavedBooks = (() => {
    return axios.get(baseUrl + 'user/savedBooks/',{withCredentials:true})
})

