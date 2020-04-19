import React,{useEffect ,useState} from 'react';
import SearchBox from '../search-box/search-box';
import apiService from '../apiService'
import ImageList from '../image_list/ImageList'
function ImagesListView(props) {

    const [images,setImages] = useState([]);
    const [searchVal,setSearchVal] = useState('');

    const fetchImages =  async () => {
        const response =  await apiService.get('/search/photos',{
              params:{query:searchVal}
          });
          setImages(response.data.results);
       }

    const onSubmitSearchVal = (value)=>{
        if(value){
            setSearchVal(value);
            fetchImages();
        }
    }

    useEffect(() => {
        if(props.searchVal){
            fetchImages()
        }
    }, [props.searchVal])

    return (
        <div>
            <SearchBox onSubmit={onSubmitSearchVal}/>
            <ImageList images={images}/>
        </div>
    )
}

export default ImagesListView;
