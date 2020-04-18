import React,{useEffect } from 'react';
import SearchBox from '../search-box/search-box';
import axios from 'axios'

function ImagesListView() {

    useEffect(() => {
     async () => {
      const response =  await axios.get('https://api.unsplash.com/search/photos',{
            params:{query:'cars'},
            headers:{
                Authorization:'Client-ID YTKtPTHClgOjIDYdOleZxLAIjIYc3pOcwwKTUUg54j4'
            }
        })  
        
        console.log('testing');
        console.log(response);
       
     }  
    }, [])
    return (
        <div>
            <SearchBox/>
        </div>
    )
}

export default ImagesListView;
