import React,{useState,useRef,useEffect} from "react";
import GoogleLogin from './GoogleLogin'

function Tooltip(props){

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false)
        return () => {
          document.removeEventListener("click", handleClickOutside, false)
        };
      }, [])

    const [show,setShow] = useState(false)
    const [loginShow,setLoginShow] = useState(false)
    const popupRef = useRef(null)
    const handleClickOutside = event => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          setLoginShow(false)
        }
      }

    return (<>
        {props.showlogin === false?
            <div className="inline-block relative" onMouseEnter={() => setShow(true)} onMouseLeave = {() => setShow(false)}>
                {props.children}
                {show && (<>
                    {props.direction === 'top'?
                    <div className="absolute bottom-5 left-1/2 translate-x-[-95.5%] p-1 px-3 
                                text-white bg-soft-black text-[14px] z-100 whitespace-nowrap 
                                ">
                        {props.content}
                    </div>
                    :
                    <div className="absolute  left-1/2 translate-x-[-95.5%] p-1 px-3 
                    text-white bg-soft-black text-[14px] z-100 whitespace-nowrap 
                    ">
                        {props.content}
                    </div>
                    }
                    </>)}
            </div>
        :
        <div ref={popupRef}  className="inline-block relative" onClick={() => setLoginShow(!loginShow)} onMouseEnter={() => setShow(true)} onMouseLeave = {() => setShow(false)} >
            {props.children}
            {show && (<>
                    {props.direction === 'top'?
                    <div className="absolute bottom-5 left-1/2 translate-x-[-95.5%] p-1 px-3 
                                text-white bg-soft-black text-[14px] z-100 whitespace-nowrap 
                                ">
                        {props.content}
                    </div>
                    :
                    <div className="absolute  left-1/2 translate-x-[-95.5%] p-1 px-3 
                    text-white bg-soft-black text-[14px] z-100 whitespace-nowrap 
                    ">
                        {props.content}
                    </div>
                    }
                    </>)}
            {props.showlogin && loginShow  && 
                <div className="absolute  left-1/2 translate-x-[-97.5%] p-6 
                                text-soft-black  z-[100] whitespace-nowrap bg-white
                                ">
                    <div className="font-semibold mb-4 text-[18px]">Click the button below to login & access your saved collection.</div>
                    <div className="float-right"><GoogleLogin /></div>
                </div>
                
            }
        </div>
            
        }</>
    )
}

export default Tooltip