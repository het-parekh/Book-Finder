import React,{useState,useEffect} from 'react'
import {
    Routes,
    Route,
  } from "react-router-dom";
import SearchBooks from './SearchBooks/SearchBooks'
import Header from './Header'
import Home from './Home/Home'
import SavedBooks from './SavedBooks/SavedBooks'
import Loader from './Common/Loader'
import Footer from './Footer';
import {checkAuthorization} from './Api'
import PrivateRoute from './PrivateRoute';

function Main(){
    const [authorizationStatus,setAuthroizationStatus] = useState()
    const [userDetails,setUserDetails] = useState({firstName:"",lastName:"",user_id:""})

    useEffect(() => {
        checkAuthorization().then( (res) => {
           if(res.status === 200){
               setAuthroizationStatus(true)
               setUserDetails({firstName:res.data?.firstName,lastName:res.data?.lastName,user_id:res.data?.user_id})
           }
       })
       .catch(err => setAuthroizationStatus(false))

   },[])
   
   if(typeof authorizationStatus === 'undefined'){
    return (<Loader />)
   }
    return(
        <>  
            <Header authorizationStatus={authorizationStatus} userDetails={userDetails}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/loader" element={<Loader />} />
                <Route path="/books" element = {< SearchBooks authorizationStatus={authorizationStatus}/>} />
                <Route element={<PrivateRoute authorizationStatus={authorizationStatus} />}>
                    <Route path="/saved-books" element = {<SavedBooks authorizationStatus={authorizationStatus}/>} />
                </Route>
            </Routes>
            <Footer />
        </>
    )
}

export default Main