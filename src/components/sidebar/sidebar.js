import React from 'react'
import './sidebar.scss';
// import {Link} from 'react-router-dom'

const pageConfig = require('./pages_config.json')
function SideBar() {

    const listOfLinks = (pageConfig.pages || []).map(page => {
        const li = <li>Test</li>
        return li;
    })

    return ( 
        <div className="sidebar_container">
                {listOfLinks}
        </div>
    )
}

export default SideBar
