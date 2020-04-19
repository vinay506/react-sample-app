import React ,{useRef,useEffect,useState}from 'react'

function ImageCard(props) {
    const [spans,setSpans] = useState(0);
    const {description,urls} = props.image;
    const imageRef =useRef(null);

    useEffect(() => {        
        console.log(imageRef.current.clientHeight);
        imageRef.current.addEventListener('load',prepareHeight);
     }, []);

     function prepareHeight(){
        const clientHeight = imageRef.current.clientHeight;
        const spans = Math.ceil(clientHeight / 10)
        setSpans(spans)
     }

    return (
        <div style={{gridRowEnd:`span ${spans}`}}>
            <img 
                ref={imageRef}
                alt={description} 
                src={urls.regular}
            />
        </div>
    )

}

export default ImageCard;
