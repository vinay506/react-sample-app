import React,{useEffect ,useState} from 'react';
import SearchBox from '../search-box/search-box';
import apiService from '../apiService'
import ImageList from '../image_list/ImageList'
function ImagesListView() {

    const [images,setImages] = useState([]);

    const fetchImages =  async () => {
        const response =  await apiService.get('/search/photos',{
              params:{query:'cars'}
          });
          setImages(response.data.results);
       }

    useEffect(() => {
       fetchImages()
    }, [])
    return (
        <div>
            <SearchBox/>
            <ImageList images={images}/>
        </div>
    )
}

export default ImagesListView;
