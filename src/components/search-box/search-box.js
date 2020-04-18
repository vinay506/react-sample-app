import React from 'react';
// import {  MDBIcon } from "mdbreact";

function SearchBox(props) {
    console.log('In search Box',props);
    return (
        <div>
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            <button>Search</button>
        </div>
    )
}

export default SearchBox;
