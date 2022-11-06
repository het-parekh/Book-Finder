import React from 'react'

function Rating(props){
    if(props.value){
        let whole_rating = Math.floor(props.value)
        let remaining_rating = Math.floor(5 - props.value) // no stars
        let fraction = props.value - whole_rating
        var render=[]

        for(let i = 0;i<whole_rating;i++){
            render.push(
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline text-theme-green">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          )
        }
        if(fraction > 0){
            render.push(<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline text-theme-green">
                            <defs>
                                <linearGradient id="grad">
                                    <stop offset="50%" stop-color="#c4da9e"/>
                                    <stop offset="50%" stop-color="#fff"/>
                                </linearGradient>
                            </defs>
                            <path stroke-linecap="round" fill="url(#grad)"  stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>)
                    }
        
        
        for(let i = 0;i<remaining_rating;i++){
            render.push(
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="#c4da9e" class="w-6 h-6 inline  text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              )
        }
        return render

    }else{
        return(
            <div className='m-auto italic text-gray-600'>
                Info Unavailable
            </div>
        )
    }
    
}

export default Rating