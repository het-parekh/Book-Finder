import React from 'react'
import googleLogo from '../../Assets/Icons/google-logo.svg'
import  {googleAuth} from '../Api'

function GoogleLogin(){

    const handleGoogleLogin = () => {
        googleAuth()
    }
    
    return(
        <button onClick={handleGoogleLogin} className="flex items-center px-2 py-2 border rounded text-soft-black border-soft-black hover:drop-shadow-lg bg-white">
            <span className='h-7 w-7 rounded-[50%] p-[1.5px] mr-2'><img src={googleLogo} /></span>Sign in with Google
        </button>
    )
}

export default GoogleLogin