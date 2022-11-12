import React,{useState,useEffect} from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import SearchBooks from './SearchBooks/SearchBooks'
import Header from './Header'
import Home from './Home/Home'
import SavedBooks from './SavedBooks/SavedBooks'
import {checkAuthorization} from './Api'
import PrivateRoute from './PrivateRoute';

function Main(){
    const [auhtorizationStatus,setAuthroizationStatus] = useState()
    const [userDetails,setUserDetails] = useState({firstName:"",lastName:"",user_id:""})

    useEffect(() => {
        checkAuthorization().then( (res) => {
           if(res.status === 200){
               setAuthroizationStatus(true)
               setUserDetails({firstName:res.data?.firstName,lastName:res.data?.lastName,user_id:res.data?.user_id})
           }
           console.log(res.data.user_id)
       })
       .catch(err => setAuthroizationStatus(false))

   },[])
   
   if(typeof auhtorizationStatus === 'undefined'){
    return (<div className='bg-black'>Loading</div>)
   }
    return(
        <>
            <Header auhtorizationStatus={auhtorizationStatus} userDetails={userDetails}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element = {< SearchBooks auhtorizationStatus={auhtorizationStatus}/>} />
                <Route element={<PrivateRoute auhtorizationStatus={auhtorizationStatus} />}>
                    <Route path="/saved-books" element = {<SavedBooks auhtorizationStatus={auhtorizationStatus}/>} />
                </Route>
            </Routes>
        </>
    )
}

export default Main