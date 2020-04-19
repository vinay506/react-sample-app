import React from 'react';
import './image_list_styles.scss';
import ImageCard from './imageCard';

function ImageList(props) {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}></ImageCard> 
    });

    return (
        <div className="image-list">
            {images}
        </div>
    )
}

export default ImageList;
