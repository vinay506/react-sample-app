import React ,{useRef}from 'react';
import './search-box-styles.scss';
// import {  MDBIcon } from "mdbreact";

function SearchBox(props) {
    console.log('In search Box',props);
    const inputRef =useRef(null);
    function submitSearchVal(){
        const value = inputRef.current.value;
        props.onSubmit(value);
    }

    return (
        <div className="search-box">
            <input ref={inputRef} className="form-control" type="text" placeholder="Search" aria-label="Search" />
            <button onClick={()=>{submitSearchVal()}}>Search</button>
        </div>
    )
}

export default SearchBox;
